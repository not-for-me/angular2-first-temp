import { Injectable } from '@angular/core';

import { LogLevel } from './log-level.enum';

import * as moment from 'moment';

@Injectable()
export class MySpecialLoggerService {
	private readonly MAX_HISTORY_CNT: number;
	private readonly TIME_FORMATTER: string = "YYYY-MM-DD HH:mm:ss.SSS";
	private logLevel: LogLevel;
	private logs: string[];

	constructor(logLevel: LogLevel) {
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

	getLogHistories() {
		return this.logs;
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
