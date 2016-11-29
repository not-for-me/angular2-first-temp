import { Component } from '@angular/core';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@Component({
  selector: 'mpl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private logger: MySpecialLoggerService) {
    // this.testLoggerLevel();
  }

  printDebugLog() {
    this.logger.debug("test depenency injector tree!");
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
