import { Injectable } from '@angular/core';

@Injectable()
export class CheckedProdDataService {
  checkedProductKeys: string[] = [];
  frozen: boolean = false;

  constructor() {
  }

  initProdKeys() {
    if (!this.frozen) {
      this.checkedProductKeys = [];
    }

    this.frozen = false;
  }

  addProdKey(key: string) {
    this.checkedProductKeys.push(key);
    console.log(`cur checked: ${this.checkedProductKeys}`);
  }

  removeProdKey(key: string) {
    this.checkedProductKeys.splice(this.checkedProductKeys.indexOf(key), 1);
    console.log(`cur checked: ${this.checkedProductKeys}`);
  }
}
