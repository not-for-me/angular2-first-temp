import { Component, OnInit, OnDestroy, Host, Optional,  HostListener, HostBinding } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LoggerService } from '../logger-service';

import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
    selector: 'mpl-mouse-track-box',
    templateUrl: './mouse-track-box.component.html',
    styleUrls: ['./mouse-track-box.component.css'],
    providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG} ],
})
export class MouseTrackBoxComponent implements OnInit, OnDestroy {
    logLevel: LogLevel;
    mousePosLogLevel: LogLevel = LogLevel.INFO;
    loggingInterval: number = 1000;
    logger: LoggerService;

    moveSubject: Subject<MouseEvent> = new Subject<MouseEvent>();
    move$: Observable<MouseEvent> = this.moveSubject.asObservable();

    constructor(@Host() @Optional() mySpecialLogger: MySpecialLoggerService, anotherLogger: AnotherLoggerService) {
        if (mySpecialLogger) {
            this.logger = mySpecialLogger;
        } else {
            this.logger = anotherLogger;
        }
    }

    ngOnInit() {
        this.move$
            .throttleTime(this.loggingInterval)
            .map(evt => [evt.clientX, evt.clientY])
            .subscribe(pos => this.logger.log(this.mousePosLogLevel, `x:${pos[0]} y:${pos[1]}`));
    }

    ngOnDestroy() {
    }

    captureMousePos($event: MouseEvent) {
        this.moveSubject.next($event);
    }

    _backColor = '#000';
   @HostBinding('style.background-color')
   get myBackColor() {
       return this._backColor;
   } 

    @HostListener('click', ['$event'])
    justPrintLog($event) {
        console.dir($event);
        this.logger.warn("hello");
        this._backColor = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
    }
}