import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductModule } from "./product/product.module";
import { CategoryModule } from "./category/category.module";
import { PromotionModule } from "./promotion/promotion.module";
import { CouponModule } from "./coupon/coupon.module";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    MainDashboardComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProductModule,
    CategoryModule,
    PromotionModule,
    CouponModule
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
