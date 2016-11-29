import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'ci-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
  checkList;
  checkResult;

  constructor() {
    this.checkList = [
      { label: 'check list one', code: 'one' },
      { label: 'check list two', code: 'two' },
      { label: 'check list three', code: 'three' },
      { label: 'check list four', code: 'four' }
    ];
    this.checkResult = [];
    this.checkList.forEach(() => this.checkResult.push(false));
  }

  ngOnInit() {
  }
}
