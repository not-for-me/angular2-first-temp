import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LOG_LEVEL_TOKEN } from './app.tokens';

import { MySpecialLoggerService } from './my-special-logger.service';
import { LogLevel } from './log-level.enum';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MySpecialLoggerService, { provide: LOG_LEVEL_TOKEN , useValue: LogLevel.INFO }],
  bootstrap: [AppComponent]
})
export class AppModule { }
