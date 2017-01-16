import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { User } from './user.model';
import { MyApiGatewayService } from '../../my-api-gateway.service';

@Injectable()
export class UserDetailService {
  constructor(public apiGateway: MyApiGatewayService) { }

  findUser(no: number) {
    return this.apiGateway.get(`users/${no}`);
  }

  addUser(user: any) {
    return this.apiGateway.post('users', user);
  }

  modifyUser(user: User) {
    return this.apiGateway.put(`users/${user.no}`, user);
  }

  removeUser(userNo: any) {
    return this.apiGateway.delete(`users/${userNo}`);
  }
}
