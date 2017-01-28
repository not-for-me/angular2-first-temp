import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {MinNumValueValidator, MaxNumValueValidator} from './custom-validators';
import { ManagerInfoComponent } from './manager-info/manager-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MinNumValueValidator,
    MaxNumValueValidator,
    ManagerInfoComponent
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
