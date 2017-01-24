import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [CategoryManagementComponent],
  declarations: [CategoryManagementComponent, CategoryComponent],
  providers: [CategoryService]
})
export class CategoryModule { }
