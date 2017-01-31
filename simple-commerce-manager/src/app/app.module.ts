import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from 'angularfire2';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

import { AppMainModule } from "./app-main/app-main.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { CouponModule } from "./coupon/coupon.module";
import { SharedModule } from "./shared/shared.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { firebaseConfig } from "../firebase.config";

// TODO 버전업 확인후 상수로 변경
export function options(): ToastOptions {
  return {
    animate: 'flyRight',
    enableHTML: true
  };
}

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
    ToastModule.forRoot(options()),

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
