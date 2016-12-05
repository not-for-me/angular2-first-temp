import {Component, Input, Output, EventEmitter} from '@angular/core';
import {ItemEvent} from "../item-event";

interface CheckedItem {
    idx: number;
    content: string;
}

@Component({
    selector: 'cc-check-list-result',
    template: `
    <h4>체크한 항목 수: {{checkedCnt}}</h4>
    <h4>체크한 항목:</h4>
    <ul>
      <li *ngFor="let item of _checkedData; let idx = index">
        {{item.content}} <button (click)="onRemove(idx)">X</button>
      </li> 
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
    _checkedData: CheckedItem[];
    checkedCnt: number;
    @Output() onSelectedToRemoveItem = new EventEmitter<number>();

    constructor() {
        this._checkedData = [];
    }

    @Input()
    set itemEvent(curItemEvent: ItemEvent) {
        if (curItemEvent) {
            if (curItemEvent.isChecked) {
                this._checkedData.push(curItemEvent);
            } else {
                this._checkedData = this._checkedData.filter(val => val.idx !== curItemEvent.idx);
            }
            this.checkedCnt = this._checkedData.length;
        }
    }

    onRemove(idx) {
        this._checkedData = this._checkedData.filter((val, _idx) => _idx !== idx);
        this.onSelectedToRemoveItem.emit(this._checkedData[idx].idx);
    }
}
