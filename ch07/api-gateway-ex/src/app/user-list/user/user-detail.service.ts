import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user.model';

@Injectable()
export class UserDetailService {
  constructor(public http: Http) { }

  findUser(no: number) {
    // const headerInfo = new Headers();
    // headerInfo.set('X-My-Api-Token', 'angular-is-awesome');

    // return this.http.get(`/api/v1/users/${no}`, { headers: headerInfo }).map(res => res.json());
    return this.http.get(`/api/v1/users/${no}`).map(res => res.json());
  }


  addUser(user: any) {
    // const headerInfo = new Headers();
    // headerInfo.set('X-My-Api-Token', 'angular-is-awesome');

    // return this.http.post('/api/v1/users', user, { headers: headerInfo }).map(res => res.json());
    return this.http.post('/api/v1/users', user).map(res => res.json());
  }

  modifyUser(user: User) {
    // const headerInfo = new Headers();
    // headerInfo.set('X-My-Api-Token', 'angular-is-awesome');

    // return this.http.put(`/api/v1/users/${user.no}`, user, { headers: headerInfo }).map(res => res.json());
    return this.http.put(`/api/v1/users/${user.no}`, user).map(res => res.json());
  }

  removeUser(userNo: any) {
    // const headerInfo = new Headers();
    // headerInfo.set('X-My-Api-Token', 'angular-is-awesome');

    return this.http.delete(`/api/v1/users/${userNo}`);
    // return this.http.delete(`/api/v1/users/${userNo}`, { headers: headerInfo });
  }
}
