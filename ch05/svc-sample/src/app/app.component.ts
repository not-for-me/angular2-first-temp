import { Component } from '@angular/core';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Service Test";
  
  constructor(public logger: MySpecialLoggerService) {
    this.testLoggerLevel();
  }

  testLoggerLevel() {
    console.log("==========Default(Info) Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    MySpecialLoggerService.setLevel(LogLevel.DEBUG);
    console.log("==========Debug Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    MySpecialLoggerService.setLevel(LogLevel.WARN);
    console.log("==========WARN Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");

    MySpecialLoggerService.setLevel(LogLevel.ERROR);
    console.log("==========Error Log Level==========");
    this.logger.debug("test logging... in debug ");
    this.logger.info("test logging... in info ");
    this.logger.warn("test logging... in warn ");
    this.logger.error("test logging... in error ");
  }
}
