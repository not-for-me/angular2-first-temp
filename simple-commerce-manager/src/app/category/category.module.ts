import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryManagementComponent } from './category-management/category-management.component';
import { CategoryListItemComponent } from './category-management/category-list-item/category-list-item.component';
import { CategoryService } from './category.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { CategoryDetailComponent } from './category-management/category-detail/category-detail.component';
import { CategoryRoutingModule } from "./category-routing.module";
import { CategoryListComponent } from './category-management/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CategoryRoutingModule
  ],
  exports: [CategoryManagementComponent],
  declarations: [CategoryManagementComponent, CategoryListItemComponent, CategoryDetailComponent, CategoryListComponent],
  providers: [CategoryService]
})
export class CategoryModule { }
