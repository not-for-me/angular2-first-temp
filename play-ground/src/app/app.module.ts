import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// import { TestChildComponent } from './test-child/test-child.component';
// import { TestGrandChildComponent } from './test-child/test-grand-child/test-grand-child.component';
// import { TestAppDirective } from './test-app.directive';

@NgModule({
  declarations: [
    AppComponent,
    // TestChildComponent,
    // TestGrandChildComponent,
    // TestAppDirective
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
