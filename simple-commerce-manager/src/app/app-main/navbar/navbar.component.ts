import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/product.service";
import { Router } from "@angular/router";
import { Product } from "../../product/product.model";

@Component({
  selector: 'scm-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.css']
})
export class NavbarComponent implements OnInit {
  appTitle = '상품관리 시스템';

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit() {
  }

  searchProduct(prodId: number) {
    this.productService
      .getById(+prodId)
      .subscribe((prod: Product) => {
          if (prod) {
            this.router.navigate(['product-list', 'product'], {queryParams: {key: prod.$key}});
          }
          else {
            alert(`조회 실패`);
          }
        },
        e => alert(`조회 실패`)
      );
  }

}
