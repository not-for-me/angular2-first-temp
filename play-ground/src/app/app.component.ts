import { Component, ViewChild, ViewChildren, QueryList, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { TestChildComponent } from './test-child/test-child.component';
import { TestGrandChildComponent } from './test-child/test-grand-child/test-grand-child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app works!';
  myBoolean: boolean;
  fooStrig: string = 'test';
  checkListNums: number[]

  @ViewChild('testDiv') testDiv: ElementRef;

  @ViewChildren(TestChildComponent) testChild: QueryList<TestChildComponent>;
  @ViewChildren(TestGrandChildComponent) testGrandChild: QueryList<TestGrandChildComponent>;

  constructor() {
    this.checkListNums = [1, 2, 3];
  }

  checkedAll() {
    this.testChild.map((comp) => {
      comp.isChecked = true;
    });
  }

  unCheckedAll() {
    this.testChild.map((comp) => comp.isChecked = false);
  }

  ngOnInit() {
    debugger;
    // this.testChild.foo();
  }

  ngAfterViewInit() {
    console.log(`view init`);
    console.log(JSON.stringify(this.testDiv.nativeElement));
  }

  clicked() {
    // this.testChild.clicked(this.fooStrig);
  }

}
