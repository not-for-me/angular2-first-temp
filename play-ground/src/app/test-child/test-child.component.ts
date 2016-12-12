import { Component } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent {
  isChecked: boolean;
  
  constructor() {
    this.isChecked = false;
  }
  

}