import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MouseTrackBoxComponent } from './mouse-track-box/mouse-track-box.component';
import { MySpecialLoggerService } from './my-special-logger.service';
import { AnotherLoggerService } from './another-logger.service';
import { LogLevel } from './log-level.enum';
import {LOG_LEVEL_TOKEN } from './app.tokens';
import { TempCmpComponent } from './temp-cmp/temp-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackBoxComponent,
    TempCmpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MySpecialLoggerService, AnotherLoggerService, {provide: LOG_LEVEL_TOKEN, useValue: LogLevel.INFO}],
  bootstrap: [AppComponent]
})
export class AppModule { }
