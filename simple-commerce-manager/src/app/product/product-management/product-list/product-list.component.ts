import { Component, OnInit, Inject } from '@angular/core';
import { Product, ProdStatus, Products } from "../../product.model";
import { ProductService } from "../../product.service";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/empty';
import { ActivatedRoute, Router } from "@angular/router";
import { PROD_LIST_PAGE_SIZE } from "../../product.tokens";

@Component({
  selector: 'scm-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
  totalItemCnt: number;
  pageSize: number;
  pageNo: number = 1;
  products: Products = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService,
              @Inject(PROD_LIST_PAGE_SIZE) pageSize) {
    this.pageSize = pageSize;
  }

  ngOnInit() {
    this.route.data.subscribe((data: {listData: {cnt: number, list: Products}}) => {
      this.totalItemCnt = data.listData.cnt;
      this.products = data.listData.list;
    });
  }

  pageNoChanged(pageNo) {
    this.pageNo = pageNo;
    this.getPagedList();
  }

  pageSizeChanged(pageSize) {
    this.pageSize = +pageSize;
    this.getPagedList();
  }

  private getPagedList() {
    this.productService.getListByDesc(this.pageNo, this.pageSize, this.totalItemCnt)
      .map((list: Products) => list.sort((p1, p2) => p2.id - p1.id))
      .subscribe(list => this.products = list);
  }

  checkAllItem() {
  }

  checkItem(id: number) {

  }

}
