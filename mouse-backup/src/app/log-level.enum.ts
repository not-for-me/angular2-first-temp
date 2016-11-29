export enum LogLevel {
     DEBUG, INFO, WARN, ERROR
}

function getLogLevelNames(): string[] {
    var keys = Object.keys(LogLevel);
    return keys.slice(keys.length / 2);
}

export const LOG_LEVELS: string[] = getLogLevelNames();