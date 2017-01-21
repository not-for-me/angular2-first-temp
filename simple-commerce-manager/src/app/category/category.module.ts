import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [CategoryManagementComponent],
  declarations: [CategoryManagementComponent]
})
export class CategoryModule { }
