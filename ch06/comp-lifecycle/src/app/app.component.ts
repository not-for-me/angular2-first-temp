import { Component, DoCheck, ChangeDetectionStrategy, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'cl-root',
  template: `
  <h1>
    {{title}} counter: {{counter}}
  </h1>
  <button (click)="dummy()">dummy</button>
  <button (click)="toggleView()">Toggle</button>
  <button (click)="counter = counter + 1">inc</button>
  <button (click)="counter = counter - 1">dec</button>
  <input type="text" [(ngModel)]="user.name" />
  <input type="number" [(ngModel)]="user.age" />
  <button (click)="newUser()">new user</button>

  `,
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck, AfterViewInit, AfterViewChecked,
  AfterContentInit, AfterContentChecked {
  title = '생명주기 테스트!';
  toggle: boolean = false;
  counter: number = 0;
  _oldCounter: number;
  user: any;

  constructor() {
    this.user = { age: 12, name: '' };
  }

  toggleView() {
    this.toggle = !this.toggle;
  }

  newUser() {
    this.user = { age: this.counter, name: `new-${this.counter}` };
  }

  dummy() {
    console.log('dummy');
  }

  ngDoCheck() {
    // console.log("do Check");
    // if (this._oldCounter > this.counter) {
    //   console.log('counter is decreased');
    //   this.user.age--;
    // } else if (this._oldCounter < this.counter) {
    //   console.log('counter is increased');
    //   this.user.age++;
    // } else {
    //   console.log('counter is not changed');
    // }
    // this._oldCounter = this.counter;
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    // error
    this.title = 'abc';
    this.counter++;
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
    // this.title = 'abc1232';
    // this.counter = 111;
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');

  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
}
