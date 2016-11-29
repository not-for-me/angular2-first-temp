import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';
import {LOG_LEVEL_TOKEN } from './app.tokens';
import * as moment from 'moment';
import { LoggerService } from './logger-service'

@Injectable()
export class MySpecialLoggerService implements LoggerService {
  readonly MAX_HISTORY_CNT: number;
  readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";
  logLevel: LogLevel;
  logs: string[];

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    this.MAX_HISTORY_CNT = 100;
    this.logLevel = logLevel;
    this.logs = [];
  }

  setLevel(logLevel: LogLevel) {
    this.logLevel = logLevel;
  }

  debug(msg: string) {
    this.log(LogLevel.DEBUG, msg);
  }

  info(msg: string) {
    this.log(LogLevel.INFO, msg);
  }

  warn(msg: string) {
    this.log(LogLevel.WARN, msg);
  }

  error(msg: string) {
    this.log(LogLevel.ERROR, msg);
  }

  log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
      this.recordLogHistory(logMsg);
    }
  }

  private recordLogHistory(log: string) {
    if (this.logs.length === this.MAX_HISTORY_CNT) {
      this.logs.shift();
    }
    this.logs.push(log);
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    const curTimestamp = moment().format(this.TIME_FORMATTER);
    return `[${LogLevel[logLevel]}] ${curTimestamp} - ${msg}`;
  }

  private isProperLogLevel(logLevel: LogLevel): boolean {
    switch (this.logLevel) {
      case LogLevel.ERROR:
        return logLevel === LogLevel.ERROR;
      case LogLevel.WARN:
        return logLevel >= LogLevel.WARN;
      case LogLevel.INFO:
        return logLevel >= LogLevel.INFO;
      case LogLevel.DEBUG:
      default:
        return true;
    }
  }
}