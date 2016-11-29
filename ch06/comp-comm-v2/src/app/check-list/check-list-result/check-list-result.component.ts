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
        const buttonElem = document.querySelector('button');
        buttonElem.addEventListener('click', () => this.collectCheckedResult());
    }

    private initResult() {
        this.checkedCnt = 0;
        this.checkedResult = [];
    }

    private collectCheckedResult() {
        this.initResult();

        const spanElems = document.querySelectorAll('span');
        for (let i = 0; i < spanElems.length; i++) {
            const spanElem = spanElems.item(i);

            const checkboxElem = spanElem.querySelector('input');
            if (checkboxElem.checked) {
                this.checkedResult.push(spanElem.querySelector('label').innerText);
            }
        }
        this.checkedCnt = this.checkedResult.length;
    }
}
