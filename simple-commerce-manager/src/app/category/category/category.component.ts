import { Component, OnInit, Input } from '@angular/core';
import { Category } from "../category.model";

@Component({
  selector: 'scm-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @Input()
  cat: Category;

  constructor() { }

  ngOnInit() {
  }

}
