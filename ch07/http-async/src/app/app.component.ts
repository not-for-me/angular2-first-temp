import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

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

  constructor(public userService: UserService) { }

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
    this.userService.findUserWithJquery(userNo, onSuccessCallback);
  }

  findUserWithPromise(userNo: number) {
    const onSuccessCallback = (res) => {
      console.log("Using Promise");
      this.searchedUser = res;
    };

    const userPromise = this.userService.findUserWithPromise(userNo);
    userPromise
      .then(onSuccessCallback)
      .catch(this.userService.getApiErrorHandler());
  }

  findUserWithObservable(userNo: number) {
    const onSuccessCallback = (res) => {
      console.log("Using RxJS");
      this.searchedUser = res;
    };

    const userId$ = this.userService.findUserWithObservable(userNo);
    userId$.subscribe(onSuccessCallback, this.userService.getApiErrorHandler());
  }

  /**
   * 복합 비동기 이벤트 처리
   */
  findLastUserWithJquery() {
    console.log("Using jQuery");
    const onSuccessCallback = (nameOfLastUser) => this.alertLastUserName(nameOfLastUser);
    this.userService.findLastUserNameWithJquery(onSuccessCallback);
  }

  findLastUserWithPromise() {
    console.log("Using Promise");
    this.userService.findLastUserNameWithPromise()
      .then(nameOfLastUser => this.alertLastUserName(nameOfLastUser))
      .catch(this.userService.getApiErrorHandler());
  }

  findLastUserNameWithObservable() {
    console.log("Using RxJS");
    this.userService.findLastUserNameWithObservable()
      .subscribe(nameOfLastUser => this.alertLastUserName(nameOfLastUser), this.userService.getApiErrorHandler());
  }

  alertLastUserName(name: string) {
    alert(`Last user's name: ${name}`);
  }

  addUser() {
    this.userService.saveUser(this.user).subscribe(res => {
      console.log(res);
      this.resetUser();
    });
  }

  resetUser() {
    this.user = new User();
  }

  clearAllUser() {
    this.userService.clearAllUser();
  }
}
