import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { MAX_SEARCH_USER_LIMIT } from './app.tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, { provide: MAX_SEARCH_USER_LIMIT, useValue: 5 }],
  bootstrap: [AppComponent]
})
export class AppModule { }
