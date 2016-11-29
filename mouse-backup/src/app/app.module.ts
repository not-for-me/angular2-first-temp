import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MouseTrackBoxComponent } from './mouse-track-box/mouse-track-box.component';
import { LogLevelSelectorComponent } from './log-level-selector/log-level-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    MouseTrackBoxComponent,
    LogLevelSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
