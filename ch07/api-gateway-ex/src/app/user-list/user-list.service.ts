import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user';


@Injectable()
export class UserListService {

  constructor(public http: Http) { }

  findAllUserSummary() {
    const headerInfo = new Headers();
    headerInfo.set('Authorization', 'angular-is-awesome');

    return this.http.get('/api/v1/users', { headers: headerInfo }).map(res => res.json());
  }

}
