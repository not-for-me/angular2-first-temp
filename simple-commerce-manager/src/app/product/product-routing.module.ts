import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductManagementComponent } from "./product-management/product-management.component";
import { ProductListComponent } from "./product-management/product-list/product-list.component";
import { ProductDetailComponent } from "./product-management/product-detail/product-detail.component";
import { ProductListResolverService } from "./product-management/product-list/product-list-resolver.service";
import { ProductDetailResolverService } from "./product-management/product-detail/product-detail-resolver.service";


const routes: Routes = [
  {
    path: '',
    component: ProductManagementComponent,
    children: [
      {path: '', pathMatch: 'full', resolve: {listData: ProductListResolverService}, component: ProductListComponent},
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

