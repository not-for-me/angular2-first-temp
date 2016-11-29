import { Injectable, Inject } from '@angular/core';
import { LogLevel } from './log-level.enum';
import { LOG_LEVEL_TOKEN } from './app.tokens';

@Injectable()
export class MySpecialLoggerService {

  private static LOG_LEVEL: LogLevel;

  constructor(@Inject(LOG_LEVEL_TOKEN) logLevel: LogLevel) {
    MySpecialLoggerService.LOG_LEVEL = logLevel;
  }

  static setLevel(logLevel: LogLevel) {
    MySpecialLoggerService.LOG_LEVEL = logLevel;
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

  private log(logLevel: LogLevel, msg: string) {
    const logMsg = this.getFormattedLogMsg(logLevel, msg);
    if (this.isProperLogLevel(logLevel)) {
      console.log(logMsg);
    }
  }

  private getFormattedLogMsg(logLevel: LogLevel, msg: string) {
    return `[${LogLevel[logLevel]}] - ${msg}`;
  }

  private isProperLogLevel(logLevel: LogLevel): boolean {
    switch(MySpecialLoggerService.LOG_LEVEL) {
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
