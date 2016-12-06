import { Injectable } from '@angular/core';

@Injectable()
export class CheckListStatisticsService {
  totalCheckListCnt: number;
  curCheckedItemCnt: number;

  constructor() { 
    this.totalCheckListCnt = 0;
    this.curCheckedItemCnt = 0;
  }

  getCheckedItemRatioText() {
    const roundedRatio = Math.round((this.curCheckedItemCnt / this.totalCheckListCnt) * 100);
    return `${roundedRatio}%`;
  }
}
