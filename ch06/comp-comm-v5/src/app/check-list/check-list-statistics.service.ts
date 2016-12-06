import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CheckListStatisticsService {
  private totalCnt: number;
  private curCnt: number;
  changedCntState: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.totalCnt = 0;
    this.curCnt = 0;
  }

  increaseCurCnt() {
    this.curCnt++;
    this.changedCntState.emit({});
  }

  decreaseCurCnt() {
    if (this.curCnt > 0) {
      this.curCnt--;
      this.changedCntState.emit({});
    }
  }

  set totalCheckListCnt(totalCnt: number) {
    this.totalCnt = totalCnt;
    this.changedCntState.emit({});
  }

  getCheckedItemRatioText() {
    const roundedRatio = Math.round((this.curCnt / this.totalCnt) * 100);
    return `${roundedRatio}%`;
  }
}
