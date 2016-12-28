import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LifeCycleTesterComponent } from './life-cycle-tester/life-cycle-tester.component';
import { OnPushTestComponent } from './life-cycle-tester/on-push-test/on-push-test.component';
import { OnPushTest2Component } from './life-cycle-tester/on-push-test/on-push-test-2/on-push-test-2.component';

@NgModule({
  declarations: [
    AppComponent,
    LifeCycleTesterComponent,
    OnPushTestComponent,
    OnPushTest2Component
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
