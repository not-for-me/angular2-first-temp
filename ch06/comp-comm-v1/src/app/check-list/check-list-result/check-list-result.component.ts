import {Component} from '@angular/core';

@Component({
    selector: 'cc-check-list-result',
    template: `
    <h4>체크한 항목 수: {{checkedCnt}}</h4>
    <h4>체크한 항목:</h4>
    <ul>
      <li *ngFor="let item of checkedResult">{{item}}</li>
    </ul>
  `,
    styles: [`
    :host {
      display: block;
      border: 1px solid dimgray; 
      width: 380px;
      margin: 10px;
      padding: 10px;
    }

    ul {
      margin-top: 5px;
    }
  `]
})
export class CheckListResultComponent {
    checkedCnt: number;
    checkedResult: string[];

    constructor() {
        this.initResult();
    }

    private initResult() {
        this.checkedCnt = 0;
        this.checkedResult = [];
    }
}
