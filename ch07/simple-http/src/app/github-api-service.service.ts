import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GithubApiServiceService {

  constructor(public http: Http) { }

}
