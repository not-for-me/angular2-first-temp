import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class CheckedProdDataService {
  checkedProductKeys: string[] = [];
  frozen: boolean = false;
  hasKey$: Observable<boolean>;
  private hasKeySubject: Subject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.hasKey$ = this.hasKeySubject.asObservable();
  }

  initProdKeys() {
    if (!this.frozen) {
      this.checkedProductKeys = [];
    }

    this.frozen = false;
    this.notifyExistence();
  }

  addProdKey(key: string) {
    this.checkedProductKeys.push(key);
    console.log(`cur checked: ${this.checkedProductKeys}`);
    this.notifyExistence();
  }

  removeProdKey(key: string) {
    this.checkedProductKeys.splice(this.checkedProductKeys.indexOf(key), 1);
    console.log(`cur checked: ${this.checkedProductKeys}`);
    this.notifyExistence();
  }

  notifyExistence() {
    const hasKey = this.checkedProductKeys.length > 0;
    this.hasKeySubject.next(hasKey);
  }

  keys$() {
    return Observable.from(this.checkedProductKeys);
  }
}
