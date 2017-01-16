import { Injectable } from '@angular/core';
import { User } from './user';
import { MyApiGatewayService } from '../my-api-gateway.service';

@Injectable()
export class UserListService {

  constructor(public apiGateway: MyApiGatewayService) { }

  findAllUserSummary() {
    return this.apiGateway.get('users');
  }
}
