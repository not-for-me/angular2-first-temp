import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { NgModel, NgForm, FormControl } from '@angular/forms';
import { TestChildComponent } from './test-child/test-child.component';
import { TestGrandChildComponent } from './test-child/test-grand-child/test-grand-child.component';
import { TestAppDirective } from './test-app.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  myData: string = 'default';
  // @ViewChild('myD') data: NgModel;
  // @ViewChild('myD') dataEf: ElementRef;
  @ViewChild('heroForm') heroForm: NgForm;

  constructor() {
  }

  ngAfterViewInit() {
    // console.dir(this.data);
    // console.dir(this.dataEf);

  }

  justShow() {
    // console.dir(this.heroForm);
    for(let controlKey in this.heroForm.controls) {
      const control = <FormControl>this.heroForm.controls[controlKey];
      console.log(control.value);
    }
  }

  onSubmit() {
    console.log(`cur Data: ${this.myData}`);
  }

}
