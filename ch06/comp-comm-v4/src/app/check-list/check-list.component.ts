import { Component } from '@angular/core';
import { ItemEvent } from "./item-event";
import { CheckListStatisticsService } from './check-list-statistics.service';

@Component({
    selector: 'cc-check-list',
    templateUrl: `
    <h4>항목 체크</h4>
    <div class="row">
      <label>항목 증감</label>
      <button type="button" (click)="onChangeCnt('+')">+</button>
      <button type="button" (click)="onChangeCnt('-')">-</button>
    </div>
    <div class="row">
      <span *ngFor="let item of checkList; let i = index">
        <label for="chk-{{i + 1}}">{{item}}</label>
        <input type="checkbox" id="chk-{{i + 1}}" (click)="onChecked($event, i)" [(ngModel)]="checkedResult[i]" />
      </span>
    </div>
    <cc-check-list-result [itemEvent]="curItemEvent"
        (onSelectedToRemoveItem)="removeCheckedItem($event)"></cc-check-list-result>
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
        display: inline-block;
    }
    .row {
        margin: 10px 0;
    }
  `]
})
export class CheckListComponent {
    checkItemCnt: number = 4;
    checkList: string[];
    curItemEvent: ItemEvent;
    checkedResult: boolean[] = [];

    constructor(public checkListStatisticsService: CheckListStatisticsService) {
        this.makeCheckList();
        this.checkList.forEach(() => this.checkedResult.push(false));
    }

        // TODO 리팩토링: 서비스에서 주입
    onChangeCnt(op: string) {
        switch (op) {
            case '+':
                this.checkItemCnt++;
                this.checkedResult.push(false);
                break;
            case '-':
                this.checkItemCnt--;
                this.checkedResult.pop();
                break;
        }
        this.makeCheckList();
    }

    onChecked($event, idx: number) {
        this.curItemEvent = { idx: idx, content: this.checkList[idx], isChecked: $event.target.checked };

        if (this.curItemEvent.isChecked) {
            this.checkListStatisticsService.increaseCurCnt();
        } else {
            this.checkListStatisticsService.decreaseCurCnt();
        }
    }

    removeCheckedItem(idx) {
        this.checkedResult[idx] = false;
        this.checkListStatisticsService.decreaseCurCnt();
    }

    private makeCheckList() {
        this.checkList = [];
        for (let i = 1; i <= this.checkItemCnt; i++) {
            this.checkList.push(`check list ${i}`);
        }
        this.checkListStatisticsService.totalCheckListCnt = this.checkItemCnt;
    }
}
