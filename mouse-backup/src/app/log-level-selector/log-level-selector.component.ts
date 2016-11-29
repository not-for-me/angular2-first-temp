import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LogLevel, LOG_LEVELS } from '../log-level.enum';

@Component({
  selector: 'log-level-selector',
  templateUrl: './log-level-selector.component.html',
  styleUrls: ['./log-level-selector.component.css']
})
export class LogLevelSelectorComponent {
  @Input()
  private id: string;
  @Input()
  private logLevel: LogLevel = LogLevel.INFO;
  @Input()
  private printLogLevel: LogLevel = LogLevel.INFO
  @Input()
  private loggingInterval: number = 200;

  @Output()
  private changeLogLevel: EventEmitter<LogLevel> = new EventEmitter<LogLevel>();
  @Output()
  private changePrintLogLevel: EventEmitter<LogLevel> = new EventEmitter<LogLevel>();
  @Output()
  private changeLoggingInterval: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  getLogLevels() {
    return LOG_LEVELS;
  }

  changedLogLevel({target: evtTarget}) {
    this.changeLogLevel.emit(Number.parseInt(evtTarget.value));
  }

  changedPrintLogLevel({target: evtTarget}) {
     this.changePrintLogLevel.emit(Number.parseInt(evtTarget.value));
  }

  changedLoggingInterval({target: evtTarget}) {
    this.changeLoggingInterval.emit(Number.parseInt(evtTarget.value));
  }
}