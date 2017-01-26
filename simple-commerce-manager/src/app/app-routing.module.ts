import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from "./app-main/page-not-found/page-not-found.component";
import { MainDashboardComponent } from "./app-main/main-dashboard/main-dashboard.component";
import { CategoryManagementComponent } from "./category/category-management/category-management.component";

const routes: Routes = [
  {path: 'total-summary', component: MainDashboardComponent},
  {path: 'product-list', loadChildren: './product/product.module#ProductModule'},
  {path: 'category-list', loadChildren: './category/category.module#CategoryModule'},
  {path: 'coupon-list', loadChildren: './coupon/coupon.module#CouponModule'},
  {path: '', redirectTo: '/total-summary', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
