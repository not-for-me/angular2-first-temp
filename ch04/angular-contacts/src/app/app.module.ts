import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LeftMenuBarComponent } from './left-menu-bar/left-menu-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContactListComponent,
    LeftMenuBarComponent
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
