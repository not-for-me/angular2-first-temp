import {Component} from '@angular/core';

@Component({
    selector: 'cc-check-list',
    templateUrl: `
    <h4>항목 체크</h4>
    <span *ngFor="let item of checkList; let i = index">
      <label for="chk-{{i + 1}}">{{item}}</label>
      <input type="checkbox" id="chk-{{i + 1}}" [(ngModel)]="checkedResult[i]" />
    </span>
    <button>결과 출력</button>
    <cc-check-list-result></cc-check-list-result>
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
    checkList: string[];
    checkedResult: boolean[] = [];

    constructor() {
        this.checkList = [
            'check list one',
            'check list two',
            'check list three',
            'check list four'
        ];
        this.checkList.forEach(() => this.checkedResult.push(false));
    }
}
