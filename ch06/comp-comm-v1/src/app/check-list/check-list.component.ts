import { Component } from '@angular/core';

@Component({
  selector: 'cc-check-list',
  templateUrl: `
    <h4>항목 체크</h4>
    <span *ngFor="let item of checkList; let i = index">
      <label for="chk-{{i + 1}}">{{item}}</label>
      <input type="checkbox" id="chk-{{i + 1}}" [(ngModel)]="checkedResult[i]" />
    </span>
    <button (click)="showResult()">결과 출력</button>
    <cc-check-list-result *ngIf="isPrintedResult"></cc-check-list-result>
  `,
  styles: [`
    :host {
      display: block;
      border: 1px solid dimgray; 
      width: 580px;
      margin: 10px;
      padding: 10px;
    }
    span {
        margin-right: 20px;
    }
  `]
})
export class CheckListComponent {
  static RESULT_SHOWING_TIME = 5000;
  private checkList: string[];
  private checkedList: string[];
  private checkedResult: boolean[];
  private isPrintedResult: boolean;

  constructor() {
    this.checkList = [
      'check list one',
      'check list two',
      'check list three',
      'check list four'
    ];
    this.checkedList = [];
    this.checkedResult = [];
    this.checkList.forEach(() => this.checkedResult.push(false));
    this.isPrintedResult = false;
  }

  collectResult() {
    console.log('current result');
    this.checkedResult.forEach((val, idx) => {
      console.log(`${idx} value: ${val}`);
      this.checkedList.push(this.checkList[idx]);
    });
  }

  showResult() {
    this.collectResult();

    this.displayResult();

    setTimeout(() => this.hideResult(), CheckListComponent.RESULT_SHOWING_TIME);
  }

  displayResult() {
    this.isPrintedResult = true;
  }

  hideResult() {
    this.isPrintedResult = false;
  }

}
