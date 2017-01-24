import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./app-main/page-not-found/page-not-found.component";
import { MainDashboardComponent } from "./app-main/main-dashboard/main-dashboard.component";
import { ProductManagementComponent } from "./product/product-management/product-management.component";
import { CategoryManagementComponent } from "./category/category-management/category-management.component";
import { CouponManagementComponent } from "./coupon/coupon-management/coupon-management.component";

const routes: Routes = [
  {path: 'total-summary', component: MainDashboardComponent},
  {path: 'category-list', component: CategoryManagementComponent},
  {path: 'coupon-list', component: CouponManagementComponent},
  {path: '', redirectTo: '/total-summary', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
