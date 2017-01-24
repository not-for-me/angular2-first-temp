import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from "./product-management/product-management.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductDetailResolverService } from "./product-detail/product-detail-resolver.service";


const routes: Routes = [
  {
    path: 'product-list', children: [
    {path: '', pathMatch: 'full', component: ProductManagementComponent},
    {path: 'product', resolve: {product: ProductDetailResolverService}, component: ProductDetailComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {
}

