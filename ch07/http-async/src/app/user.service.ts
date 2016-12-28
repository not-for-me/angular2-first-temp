import { Injectable, Inject } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './app.component';
import { MAX_SEARCH_USER_LIMIT } from './app.tokens';;
import * as $ from 'jquery'

const SEARCH_ERROR_MSG = '사용자 검색 실패';

@Injectable()
export class UserService {
  userApiUrlPrefix = '/api/users';

  constructor(
    public http: Http,
    @Inject(MAX_SEARCH_USER_LIMIT)
    public maxSearchUserLimit: number
  ) { }

  findUserWithJquery(userNo: number, callback) {
    const settings = {
      url: `${this.userApiUrlPrefix}/${userNo}`,
      success: callback,
      error: this.getApiErrorHandler()
    };
    $.get(settings);
  }

  findUserWithPromise(userNo: number): Promise<any> {
    return this.http.get(`${this.userApiUrlPrefix}/${userNo}`)
      .map(res => res.json()).toPromise();
  }

  findUserWithObservable(userNo: number): Observable<any> {
    return this.http.get(`${this.userApiUrlPrefix}/${userNo}`)
      .map(res => res.json());
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

      const errorHandler = this.getApiErrorHandler();
      errorHandler(SEARCH_ERROR_MSG);
    };

    const settings = {
      url: `${this.userApiUrlPrefix}/nos`,
      success: onSuccessCallback,
      error: this.getApiErrorHandler()
    };
    $.get(settings);
  }

  findLastUserNameWithPromise(): Promise<string> {
    return this.http.get(`${this.userApiUrlPrefix}/nos`)
      .map(res => res.json()).toPromise()
      .then((nos) => {
        if (this.isSutiableForSearch(nos)) {
          const lastNo = nos.pop();
          return this.findUserWithPromise(lastNo);
        }

        return Promise.reject(SEARCH_ERROR_MSG);
      })
      .then(user => user.name);
  }

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

  getApiErrorHandler() {
    return (err) => {
      let errMessage;
      if (err.hasOwnProperty('responseText')) {
        errMessage = err.responseText;
      } else if (err.hasOwnProperty('_body')) {
        errMessage = err._body;
      } else if (err instanceof Error) {
        errMessage = err.message;
      } else {
        errMessage = err;
      }
      alert(`검색 오류: ${errMessage}`);
    }
  }

  saveUser(user: User) {
    return this.http.post(this.userApiUrlPrefix, user)
      .map(res => res.json());
  }

  clearAllUser() {
    return this.http.delete(this.userApiUrlPrefix)
      .subscribe((res) => console.log(res));
  }
}
