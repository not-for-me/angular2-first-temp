import { Component, OnInit, Inject, ViewChild, ElementRef, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Product } from "../product.model";
import { ProductService } from "../product.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { FirebaseApp } from 'angularfire2';

import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/generate';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/switchMap';
import { CategoryService } from "../../category/category.service";

@Component({
  selector: 'scm-product-detail',
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title;
  product: Product;
  isCreateMode: boolean;
  // @ViewChild('imgFile')
  // imgInput: ElementRef;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private productService: ProductService,
              private catService: CategoryService,
              private toastr: ToastsManager,
              // @Inject(FirebaseApp) private firebase: any
  ) {
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
  }

  editProduct() {
    // const imgInputElem = <HTMLInputElement> this.imgInput.nativeElement;
    // const fileNamePrefix = imgInputElem.value;
    // const files = imgInputElem.files;

    // const fileToLoad = files[0];
    // let promise = new Promise((res, rej) => {
    //   let fileName = fileToLoad.name;
    //   let uploadTask = this.firebase.storage().ref(`/images/${fileName}`).put(fileToLoad);
    //
    //   uploadTask.on('state_changed', function (snapshot) {
    //   }, function (error) {
    //     rej(error);
    //   }, function () {
    //     const downloadURL = uploadTask.snapshot.downloadURL;
    //     res(downloadURL);
    //   });
    // });

    // Observable.fromPromise(promise)
    //   .switchMap( (url: string) => {
    //     console.log('result: ' + url);
    //     this.product.imgUrl = url;
    //     return this.productService.modifyProduct(this.product)
    //   })

    this.productService.modifyProduct(this.product)
      .then(() => {
        this.toastr.success('상품 수정 완료', '[상품관리]');
        this.router.navigate(['/product-list']);
      }, e => {
        console.log(e);
        this.toastr.error('상품 수정 실패', '[상품관리]');
      });
  }

}
