import { Component, OnInit, Inject, Input, Output, EventEmitter } from '@angular/core';
import { Coupons, Coupon } from "../../coupon.model";
import { COUPON_LIST_PAGE_SIZE } from "../../coupon.tokens";
import { CouponService } from "../../coupon.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'scm-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent implements OnInit {
  @Input() isRegister: boolean = false;
  @Output() onSelected: EventEmitter<Coupon> = new EventEmitter();

  title;
  totalItemCnt: number;
  pageSize: number;
  pageNo: number = 1;
  coupons: Coupons;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private couponService: CouponService,
              @Inject(COUPON_LIST_PAGE_SIZE) pageSize) {
    this.pageSize = pageSize;
  }

  ngOnInit() {
    this.title = this.isRegister ? '상품 쿠폰 등록' : '쿠폰 목록';
    this.route.data.subscribe((data: {listData: {cnt: number, list: Coupons}}) => {
      this.totalItemCnt = data.listData.cnt;
      this.coupons = data.listData.list;
    });
  }

  pageNoChanged(pageNo) {
    this.pageNo = pageNo;
    this.couponService.getListByDesc(this.pageNo, this.pageSize, this.totalItemCnt)
      .map((list: Coupons) => list.sort((p1, p2) => p2.id - p1.id))
      .subscribe(list => this.coupons = list);
  }

  selectCoupon(coupon: Coupon) {
    this.onSelected.emit(coupon);
  }

}
