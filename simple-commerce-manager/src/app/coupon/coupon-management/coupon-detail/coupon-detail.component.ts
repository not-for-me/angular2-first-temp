import { Component, OnInit } from '@angular/core';
import { CouponService } from "../../coupon.service";
import { ToastsManager } from "ng2-toastr";
import { Coupon } from "../../coupon.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ScmSharedUtil } from "../../../shared/shared-util";
import { NgbDateStruct, NgbDateParserFormatter } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'scm-coupon-detail',
  templateUrl: './coupon-detail.component.html',
  styleUrls: ['./coupon-detail.component.css']
})
export class CouponDetailComponent implements OnInit {
  title: string;
  isCreateMode: boolean;
  coupon: Coupon;

  couponDuration: NgbDateStruct[] = [];
  minDate: NgbDateStruct;
  startDate: NgbDateStruct;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private couponService: CouponService,
              private ngbParser: NgbDateParserFormatter,
              private toastr: ToastsManager) {
    this.minDate = ngbParser.parse(ScmSharedUtil.getCurrentDate()) ;
    this.startDate = this.minDate;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(q => {
      this.isCreateMode = q && q['action'] === 'create';
      this.title = this.isCreateMode ? '신규 쿠폰 등록' : '쿠폰 수정';
    });

    this.route.data.subscribe((data: {coupon: Coupon}) => {
      console.dir(data.coupon);
      this.coupon = data.coupon;
      this._convertDateToStr(this.coupon);
    });
  }

  onSubmit() {
    this.update();
  }

  update() {
    this.couponService.update(this.coupon)
      .then(() => {
        this.toastr.success('쿠폰 수정 완료', '[쿠폰관리]');
        this.router.navigate(['/coupon-list']);
      }, e => {
        console.log(e);
        this.toastr.error('쿠폰 수정 실패', '[쿠폰관리]');
      });
  }

  convertDateToStr(dateTarget: string, date: NgbDateStruct) {
    debugger;
    const formatted = this.ngbParser.format(date);
    this.coupon[dateTarget] = formatted;
  }

  private _convertDateToStr({startDate: startDt, endDate: endDt}) {
    this.couponDuration[0] = this.ngbParser.parse(startDt);
    this.couponDuration[1] = this.ngbParser.parse(endDt);
  }

}
