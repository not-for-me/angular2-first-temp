import { Injectable } from '@angular/core';
import { Http, Response, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './app.component';
import * as $ from 'jquery'

@Injectable()
export class UserService {
  data: Observable<string>;

  constructor(public http: Http, public jsonp: Jsonp) { }

  findUserWithJquery(userNo: number, callback) {
     $.get(`/api/users/${userNo}`, callback);
  }

  findUserWithPromise(userNo: number): Promise<any> {
    return this.http.get(`/api/users/${userNo}`).map(res => res.json()).toPromise();
  }

  findUserWithObservable(userNo: number): Observable<any> {
    return this.http.get(`/api/users/${userNo}`).map(res => res.json());
  }


  // getUserNosWithPromise(): Promise<number[]> {
  //   return this.http.get('/api/users/nos').map(res => res.json()).toPromise();
  // }

  // getUserNosWithObservable(): Observable<number[]> {
  //   return this.http.get('/api/users/nos').map(res => res.json());
  // }


  getLastUserNameWithJquery(callback) {
    $.get('/api/users/nos', (nos) => {
      if (nos.length < 5) {
        const lastNo = nos.pop();
        $.get(`/api/users/${lastNo}`, (lastUser) => {
          const nameOfLastUser = lastUser.name;
          callback(nameOfLastUser);
        });
      }
    });
  }

  getLastUserNameWithPromise(): Promise<string> {
    return this.http.get('/api/users/nos')
    .map(res => res.json()).toPromise()
      .then((nos) => {
        if (nos.length < 5) {
          const lastNo = nos.pop();
          return this.findUserWithPromise(lastNo);
        }
      })
      .then(user => user.name);
  }

  getLastUserNameWithObservable(): Observable<string> {
    return this.http.get('/api/users/nos').map(res => res.json())
      .filter(nos => nos.length < 5)
      .map(nos => nos.pop())
      .switchMap(lastNo => this.findUserWithObservable(lastNo))
      .map(user => user.name);
  }

  getText() {
    return this.http.get('/api/text').map((res: Response) => {
      // console.log('headers');
      // console.log(`content-type: ${res.headers.get('content-type')}`)

      // console.log(`statusText: ${res.statusText}`);
      // console.log(`type: ${res.type}`)
      // console.log(`url: ${res.url}`)
      // console.log(`total bytes: ${res.totalBytes}`);

      return res.text();
    });
  }

  postUser(user: User) {
    return this.http.post('/api/users', user).map(res => res.json());
  }

  getGitHubUserInfo(userId: string) {
    return this.http.get(`https://api.github.com/users/${userId}`).map(res => res.json());
  }
}
