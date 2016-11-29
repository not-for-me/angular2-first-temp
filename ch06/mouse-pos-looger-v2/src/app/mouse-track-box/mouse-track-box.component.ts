import { Component, OnInit, OnDestroy, Host, Optional, ViewEncapsulation, HostListener, HostBinding } from '@angular/core';
import { MySpecialLoggerService } from '../my-special-logger.service';
import { AnotherLoggerService } from '../another-logger.service';
import { LoggerService } from '../logger-service';

import { LogLevel } from '../log-level.enum';
import { LOG_LEVEL_TOKEN } from '../app.tokens';

@Component({
    selector: 'mpl-mouse-track-box',
    templateUrl: './mouse-track-box.component.html',
    styleUrls: ['./mouse-track-box.component.css'],
    // providers: [MySpecialLoggerService, {provide:LOG_LEVEL_TOKEN, useValue: LogLevel.DEBUG} ]
    encapsulation: ViewEncapsulation.Emulated
})
export class MouseTrackBoxComponent implements OnInit, OnDestroy {
    logLevel: LogLevel;
    mousePosLogLevel: LogLevel = LogLevel.INFO;
    loggingInterval: number = 500;
    logger: LoggerService;

    throttleFlag: boolean = false;
    intervalId: number;

    @HostBinding('attr.check')
    myString;

    constructor(@Host() @Optional() mySpecialLogger: MySpecialLoggerService, anotherLogger: AnotherLoggerService) {
        if (mySpecialLogger) {
            this.logger = mySpecialLogger;
        } else {
            this.logger = anotherLogger;
        }
    }

    ngOnInit() {
        this.intervalId = this.initInterval(this.loggingInterval);
    }

    ngOnDestroy() {
        this.stopInterval(this.intervalId);
    }

    captureMousePos($event: MouseEvent) {
        if (this.throttleFlag) {
            const pos = [$event.screenX, $event.screenY];
            this.logger.log(this.mousePosLogLevel, `x:${pos[0]} y:${pos[1]}`);

            this.intervalId = this.initInterval(this.loggingInterval, this.intervalId);
        }
    }

    @HostListener('click', ['$event'])
    justPrintLog($event) {
        console.dir($event);
        this.logger.warn("hello " + this.myString);
    }

    private startSetInterval(interval: number): number {
        const intervalId = window.setInterval(() => this.throttleFlag = true, interval);
        this.logger.debug(`start interval: ${intervalId}`);
        return intervalId;
    }

    private stopInterval(intervalId: number) {
        this.logger.debug(`clear interval: ${intervalId}`);
        clearInterval(intervalId);
    }

    private initInterval(interval: number, intervalId?: number) {
        this.logger.debug(`init interval: ${interval}`);
        if (intervalId !== undefined) {
            this.stopInterval(intervalId);
        }

        this.throttleFlag = false;
        return this.startSetInterval(interval);
    }
}