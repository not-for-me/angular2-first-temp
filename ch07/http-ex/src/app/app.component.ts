import { Component, OnInit } from '@angular/core';
import { userService } from './data.service';
;

export class User {
  id: string;
  name: string;
  age: number;

  constructor() {
    this.id = '';
    this.name = '';
    this.age = 0;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Http Service 사용하기';
  user: User = new User();
  searchedUser: User;

  constructor(public userService: userService) { }

  ngOnInit() {
  }

/**
 * 1회성 단순 비동기 이벤트 처리
 */
  findUserWithJquery(userNo: number) {
    const onSuccessCallback = (res) => {
      console.log("Using jQuery");
      this.searchedUser = res;
    };
    this.userService.findUserWithJquery(onSuccessCallback);
  }

  findUserWithPromise(userNo: number) {
    const onSuccessCallback = (res) => {
      console.log("Using Promise");
      this.searchedUser = res;
    };

    const userPromise = this.userService.findUserWithPromise(userNo);
    userPromise.then(onSuccessCallback);
  }

  findUserWithObservable(userNo: number) {
    const onSuccessCallback = (res) => {
      console.log("Using RxJS");
      this.searchedUser = res;
    };

    const userId$ = this.userService.findUserWithObservable(userNo);
    userId$.subscribe(onSuccessCallback);
  }

/**
 * 복합 비동기 이벤트 처리
 */
  getLastUserWithJquery() {
    console.log("Using jQuery");
    const onSuccessCallback = (nameOfLastUser) => this.alertLastUserName(nameOfLastUser);
    this.userService.getLastUserNameWithJquery(onSuccessCallback);
  }

  getLastUserWithPromise() {
    console.log("Using Promise");
    this.userService.getLastUserNameWithPromise()
      .then(nameOfLastUser => this.alertLastUserName(nameOfLastUser));
  }

  getLastUserNameWithObservable() {
    console.log("Using RxJS");
    this.userService.getLastUserNameWithObservable()
      .subscribe(nameOfLastUser => this.alertLastUserName(nameOfLastUser));
  }

  alertLastUserName(name: string) {
    alert(`Last user's name: ${name}`);
  }

  addUser() {
    this.userService.postUser(this.user)
      .subscribe(res => {
        console.log(res);
        this.resetUser();
      });
  }

  resetUser() {
    this.user = new User();
  }
}
