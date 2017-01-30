import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

import { AppMainModule } from "./app-main/app-main.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { CouponModule } from "./coupon/coupon.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { firebaseConfig } from "../firebase.config";
import { IdGenService } from "./shared/id-gen.service";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    /* Angular Modules*/
    BrowserModule,
    FormsModule,
    HttpModule,

    /* 3rd Modules */
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    ToastModule,

    /* App Modules */
    AppMainModule,
    SharedModule,
    ProductModule,
    CategoryModule,
    CouponModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
