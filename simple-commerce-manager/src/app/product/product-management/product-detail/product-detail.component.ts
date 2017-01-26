import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FirebaseApp } from 'angularfire2';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/generate';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
import { Product } from "../../product.model";
import { Categories } from "../../../category/category.model";
import { ProductService } from "../../product.service";
import { CategoryService } from "../../../category/category.service";

@Component({
  selector: 'scm-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title;
  product: Product;
  categories$: Observable<Categories>;
  isCreateMode: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              private catService: CategoryService,
              private toastr: ToastsManager) {
  }

  ngOnInit() {

    this.route.queryParams.subscribe(q => {
      this.isCreateMode = q && q['action'] === 'create';
      this.title = this.isCreateMode ? '신규  상품 등록' : '상품 수정';
    });

    this.route.data.subscribe((data: {product: Product}) => {
      console.dir(data.product);
      this.product = data.product;
    });

    this.categories$ = this.catService.categories$
      .map(cats => cats.filter(c => c.isUse));
  }

  onSubmit() {
    this.update();
  }

  update() {
    this.productService.update(this.product)
      .then(() => {
        this.toastr.success('상품 수정 완료', '[상품관리]');
        this.router.navigate(['/product-list']);
      }, e => {
        console.log(e);
        this.toastr.error('상품 수정 실패', '[상품관리]');
      });
  }

  goPrev() {
    console.dir(this.route.snapshot);

    const curId = this.product.id;
    this.productService.getById(curId-1)
      .subscribe(prevProd => {
        console.dir(prevProd);
        this.router.navigate(['product-list','product', {my: '123', dat:'abc'}], {queryParams: {key: prevProd.$key}});
      });
    // const prevProdKey = this.route.snapshot.queryParams['key'];
  }
}
