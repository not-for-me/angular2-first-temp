import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductManagementComponent } from './product-management/product-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ProductManagementComponent],
  declarations: [ProductManagementComponent]
})
export class ProductModule { }
