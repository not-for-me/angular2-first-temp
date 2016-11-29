import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ci-check-result',
  templateUrl: './check-result.component.html',
  styleUrls: ['./check-result.component.css']
})
export class CheckResultComponent implements OnInit {
  checkedCnt: number = 0;
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
