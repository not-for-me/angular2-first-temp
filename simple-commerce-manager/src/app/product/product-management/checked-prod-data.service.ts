import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CheckedProdDataService {
  // checkedIds$: EventEmitter<number[]> = new EventEmitter();
  checkedProductIds: number[];

  constructor() {
  }

  initProdIds() {
    this.checkedProductIds = [];
    // this.checkedIds$.next(this.checkedProductIds);
  }

  addProdId(id:number) {
    this.checkedProductIds.push(id);
    console.log(`cur checked: ${this.checkedProductIds}`);

    // this.checkedIds$.next(this.checkedProductIds);
  }

  removeProdId(id: number) {
    this.checkedProductIds.splice(this.checkedProductIds.indexOf(id), 1);
    console.log(`cur checked: ${this.checkedProductIds}`);

    // this.checkedIds$.next(this.checkedProductIds);
  }
}
