import { Injectable, Inject } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ErrorHandlerService, SEARCH_ERROR_MSG } from '../error-handler.service';
import { User } from './user.model';
import { MAX_SEARCH_USER_LIMIT } from '../app.tokens';;
import * as $ from 'jquery'


@Injectable()
export class UserService {
  userApiUrlPrefix = '/api/users';

  constructor(
    public http: Http,
    public errorHandler: ErrorHandlerService,
    @Inject(MAX_SEARCH_USER_LIMIT) public maxSearchUserLimit: number
  ) { }

  findUserWithJquery(userNo: number, callback) {
    const settings = {
      url: `${this.userApiUrlPrefix}/${userNo}`,
      success: callback,
      error: this.errorHandler.getApiErrorHandler()
    };
    $.get(settings);
  }

  // findUserWithPromise(userNo: number): Promise<any> {
  //   return this.http.get(`${this.userApiUrlPrefix}/${userNo}`).map(res => res.json()).toPromise();
  // }

  findUserWithObservable(userNo: number): Observable<any> {
    return this.http.get(`${this.userApiUrlPrefix}/${userNo}`).map(res => res.json());
  }

  isSutiableForSearch(nos: number[]) {
    return 0 < nos.length && nos.length < this.maxSearchUserLimit;
  }

  findLastUserNameWithJquery(callback) {
    const onSuccessCallback = (nos) => {
      if (this.isSutiableForSearch(nos)) {
        const lastNo = nos.pop();
        const innerCallback = (lastUser) => {
          const nameOfLastUser = lastUser.name;
          callback(nameOfLastUser);
        };
        this.findUserWithJquery(lastNo, innerCallback);
        return;
      }

      const errorHandler = this.errorHandler.getApiErrorHandler();
      errorHandler(SEARCH_ERROR_MSG);
    };

    const settings = {
      url: `${this.userApiUrlPrefix}/nos`,
      success: onSuccessCallback,
      error: this.errorHandler.getApiErrorHandler()
    };
    $.get(settings);
  }

  // findLastUserNameWithPromise(): Promise<string> {
  //   return this.http.get(`${this.userApiUrlPrefix}/nos`)
  //     .map(res => res.json()).toPromise()
  //     .then((nos) => {
  //       if (this.isSutiableForSearch(nos)) {
  //         const lastNo = nos.pop();
  //         return this.findUserWithPromise(lastNo);
  //       }

  //       return Promise.reject(SEARCH_ERROR_MSG);
  //     })
  //     .then(user => user.name);
  // }

  findLastUserNameWithObservable(): Observable<string> {
    return this.http.get(`${this.userApiUrlPrefix}/nos`)
      .map(res => res.json())
      .switchMap(nos => {
        if (this.isSutiableForSearch(nos)) {
          const lastNo = nos.pop();
          return this.findUserWithObservable(lastNo);
        }

        return Observable.throw(new Error(SEARCH_ERROR_MSG));
      })
      .map(user => user.name);
  }

  saveUser(user: User) {
    return this.http.post(this.userApiUrlPrefix, user).map(res => res.json());
  }

  clearAllUser() {
    return this.http.delete(this.userApiUrlPrefix).subscribe(res => console.log(res));
  }

  testPost() {
    return this.http.post(`${this.userApiUrlPrefix}/test`, 'hello').subscribe(res => console.log(res));
  }
}
