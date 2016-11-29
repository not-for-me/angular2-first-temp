import { LogLevel } from './log-level.enum';

export interface LoggerService {
    setLevel(logLevel: LogLevel);

    debug(msg: string);

    info(msg: string);

    warn(msg: string);

    error(msg: string);

    log(logLevel: LogLevel, msg: string);
}
