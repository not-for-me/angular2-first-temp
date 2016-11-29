import {
  Component, Input, SimpleChanges, OnInit, OnDestroy, OnChanges, DoCheck,
  AfterViewInit, AfterViewChecked, AfterContentChecked, AfterContentInit,
} from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';
@Component({
  selector: 'mpl-temp-cmp',
  templateUrl: './temp-cmp.component.html',
  styleUrls: ['./temp-cmp.component.css'],
  // providers: [MySpecialLoggerService, { provide: LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG }]
})
export class TempCmpComponent implements OnInit, OnDestroy, OnChanges, DoCheck,
  AfterViewInit, AfterContentInit, AfterViewChecked, AfterContentChecked {
  @Input('testBind') testBindingVal;

  constructor(myLogger: MySpecialLoggerService) {
    console.log("construction...");
  }

  ngOnInit() {
    console.log("on Init");
    console.log("has testBind: " + this.testBindingVal);
  }

  ngOnDestroy() {
    console.log("on Destroy");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("on Changes");
  }

  ngDoCheck() {
    console.log("on do check...");
  }

  ngAfterViewInit() {
    console.log("after view init");

  }

  ngAfterContentInit() {
    console.log("after content init");
  }

  ngAfterViewChecked() {
    console.log("after view checked");
  }

  ngAfterContentChecked() {
    console.log("after content checked");
  }
}
