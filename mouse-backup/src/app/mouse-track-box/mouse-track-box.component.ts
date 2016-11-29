import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges
} from '@angular/core';

import { MySpecialLoggerService } from '../my-special-logger.service';
import { LogLevel } from '../log-level.enum';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'mouse-track-box',
  templateUrl: './mouse-track-box.component.html',
  styleUrls: ['./mouse-track-box.component.css']
})
export class MouseTrackBoxComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  private id: string;
  @Input()
  private logLevel: LogLevel = LogLevel.INFO;
  @Input()
  private printLogLevel: LogLevel = LogLevel.INFO;
  @Input()
  private loggingInterval: number = 500;
  private logger: MySpecialLoggerService

  @ViewChild("trackArea")
  private trackArea: ElementRef;
  @ViewChild("logArea")
  private logArea: ElementRef;
  private click$: Subscription;
  private logs: string[];

  private onMousPosLogged = pos => {
    this.logger.log(this.printLogLevel, `x:${pos[0]} y:${pos[1]}`);
    this.logs = this.logger.getLogHistories();
    const logAreaDivElem = <HTMLDivElement>this.logArea.nativeElement;
    logAreaDivElem.scrollTop = logAreaDivElem.scrollHeight;
  };

  constructor() {
    this.logger = new MySpecialLoggerService(this.logLevel);
  }

  ngOnInit() {
      this.subscribeMovingMousePos(this.loggingInterval);
  }

  ngOnChanges(changes: SimpleChanges) {
    const chngVal = changes['loggingInterval'];
    if (chngVal && chngVal.currentValue) {
      this.changedLoggingInterval(chngVal.currentValue);
    }
  }

  subscribeMovingMousePos(interval: number) {
    this.unSubscribeMovingMousePos();

    this.click$ = Observable.fromEvent(this.trackArea.nativeElement, "mousemove")
      .throttleTime(interval)
      .map((ev: MouseEvent) => [ev.screenX, ev.screenY])
      .subscribe(this.onMousPosLogged);

    console.log(this.id + " new subscribing...");
  }

  unSubscribeMovingMousePos() {
    if (this.click$ === undefined || this.click$.closed) {
      console.log(this.id + " no subscription...");
      return;
    }
    console.log(this.id + " unsubscribing...");
    this.click$.unsubscribe();
  }

  changedLogLevel(logLevel) {
    this.logger.setLevel(logLevel);
  }

  changedPrintLogLevel(logLevel) {
    this.printLogLevel = logLevel;
  }

  changedLoggingInterval(interval: number) {
    this.subscribeMovingMousePos(interval);
  }

  ngOnDestroy() {
    this.unSubscribeMovingMousePos();
  }
}
