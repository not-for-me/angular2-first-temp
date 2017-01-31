import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { CheckedProdDataService } from "../../checked-prod-data.service";
import { Router } from "@angular/router";

import { Observable  } from 'rxjs/Observable';

@Component({
  selector: 'scm-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {
  noneKey$: Observable<boolean>;
  @Output() onclickedBtn: EventEmitter<string> = new EventEmitter();

  constructor(private router: Router, private cps: CheckedProdDataService) {
  }

  ngOnInit() {
    this.mapNoneKeyObservable();
  }

  onClicked(btnEvent: string) {
    console.log(`clicked: ${btnEvent}`);
    this.onclickedBtn.emit(btnEvent);
  }

  private mapNoneKeyObservable() {
    this.noneKey$ = this.cps.hasKey$.map(hasKey => !hasKey);
  }

}
