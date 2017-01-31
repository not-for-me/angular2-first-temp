import { Component, OnInit } from '@angular/core';
import { ProductService } from "../../product/product.service";
import { ProdStatus } from "../../product/product.model";

@Component({
  selector: 'scm-main-dashboard',
  templateUrl: 'main-dashboard.component.html',
  styleUrls: ['main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  statInfo: {wait: number, onSale: number, stop: number};

  constructor(private prodService: ProductService) {
    this.statInfo = {
      wait: 0,
      onSale: 0,
      stop: 0
    };
  }

  ngOnInit() {
    this.prodService.getByStatus(ProdStatus.WAIT_FOR_SALE)
      .map(r => r.length).subscribe(l => this.statInfo.wait = l);

    this.prodService.getByStatus(ProdStatus.ON_SALE)
      .map(r => r.length).subscribe(l => this.statInfo.onSale = l);

    this.prodService.getByStatus(ProdStatus.NOT_FOR_SALE)
      .map(r => r.length).subscribe(l => this.statInfo.stop = l);
  }

}
