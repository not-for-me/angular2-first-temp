import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Categories } from "../../category.model";
import { CategoryService } from "../../category.service";

@Component({
  selector: 'scm-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories$: Observable<Categories> = Observable.empty();
  private pageSize: number;

  constructor(private catService: CategoryService) {}

  ngOnInit() {
    this.categories$ = this.catService.categories$;
  }

}
