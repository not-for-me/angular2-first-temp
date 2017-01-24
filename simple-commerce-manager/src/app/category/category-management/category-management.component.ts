import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CategoryService } from "../category.service";
import { Categories } from "../category.model";
import { ToastsManager } from "ng2-toastr";

@Component({
  selector: 'scm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  @ViewChild('catName')
  catNameInputElem: ElementRef;
  categories: Categories = [];

  constructor(private catService: CategoryService,
              private toastr: ToastsManager) {
  }

  ngOnInit() {
    this.catService.getCategories(10, 1)
      .subscribe(cats => {
        console.log('categories..');
        this.categories = cats;
      });
  }

  createCategory(catName) {
    this.catService.create(catName)
      .subscribe(() => {
        this.toastr.success('카테고리 등록 완료', '[카테고리 관리]');
      }, e => {
        console.log(e);
        this.toastr.error('카테고리 등록 실패', '[카테고리 관리]');
      })
  }
}
