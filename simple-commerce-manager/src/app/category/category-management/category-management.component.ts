import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../category.service";
import { Categories } from "../category.model";
import { ToastsManager } from "ng2-toastr";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'scm-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.css']
})
export class CategoryManagementComponent implements OnInit {
  isCollapsed: boolean = true;
  categories$: Observable<Categories> = Observable.empty();
  private pageSize: number;

  constructor(private catService: CategoryService) {
  }

  ngOnInit() {
    this.categories$ = this.catService.categories$;
  }
}
