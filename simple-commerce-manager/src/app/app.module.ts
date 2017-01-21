import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppMainModule } from "./app-main/app-main.module";
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { PromotionModule } from "./promotion/promotion.module";
import { CouponModule } from "./coupon/coupon.module";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppMainModule,
    ProductModule,
    CategoryModule,
    PromotionModule,
    CouponModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
