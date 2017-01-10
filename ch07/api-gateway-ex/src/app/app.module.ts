import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule, MdToolbarModule, MdListModule, MdCardModule, MdDialogModule, MdSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { UserListComponent, UserListService, UserDetailComponent, UserDetailService } from './user-list';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlexLayoutModule.forRoot(),
    MaterialModule.forRoot(),
    MdToolbarModule,
    MdListModule,
    MdCardModule,
    MdDialogModule,
    MdSnackBarModule
  ],
  providers: [UserListService, UserDetailService],
  bootstrap: [AppComponent],
  entryComponents: [UserDetailComponent]
})
export class AppModule { }
