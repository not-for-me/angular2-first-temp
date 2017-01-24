import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductManagementComponent } from './product-management/product-management.component';
import { ProductListComponent } from './product-management/product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductRoutingModule } from "./product-routing.module";
import { ProductDetailResolverService } from "./product-detail/product-detail-resolver.service";
import { ProductService } from './product.service';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,

    ProductRoutingModule
  ],
  exports: [ProductManagementComponent],
  declarations: [ProductManagementComponent, ProductListComponent, ProductDetailComponent],
  providers: [ProductDetailResolverService, ProductService]
})
export class ProductModule { }
