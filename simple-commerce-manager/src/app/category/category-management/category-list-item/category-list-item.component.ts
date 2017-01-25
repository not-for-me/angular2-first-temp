import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../../category.model";

@Component({
  selector: 'scm-cat-list-item',
  templateUrl: 'category-list-item.component.html',
  styleUrls: ['category-list-item.component.css']
})
export class CategoryListItemComponent implements OnInit {
  @Input()
  cat: Category;
  collapaseEditMenu: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
