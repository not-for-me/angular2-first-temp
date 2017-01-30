import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { CheckedProdDataService } from "../checked-prod-data.service";

@Component({
  selector: 'scm-coupon-register-modal',
  templateUrl: 'coupon-register-modal.component.html',
  styleUrls: ['coupon-register-modal.component.css']
})
export class CouponRegisterModalComponent implements OnInit {
  checkedProdIds: number[];

  constructor(
    private prodDataService: CheckedProdDataService,
    public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.checkedProdIds = this.prodDataService.checkedProductIds;
  }

}
