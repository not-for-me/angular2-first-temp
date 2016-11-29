import { Component } from '@angular/core';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title = 'Service Examle (Mouse Position Logger)';
  private inheritBoxTitle = 'Inheritance';
  private independentBoxTitle = 'Independence';
  private logger: MySpecialLoggerService;
  private logLevel = LogLevel.INFO;
  private printLogLevel: LogLevel = LogLevel.INFO
  private loggingInterval: number = 100;

  constructor() {
    this.logger = new MySpecialLoggerService(this.logLevel);
    this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log("==========Default(Info) Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    this.logger.setLevel(LogLevel.DEBUG);
    console.log("==========Debug Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    this.logger.setLevel(LogLevel.WARN);
    console.log("==========WARN Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    this.logger.setLevel(LogLevel.ERROR);
    console.log("==========Error Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");
  }

}
