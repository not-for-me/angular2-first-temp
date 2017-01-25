/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CouponService } from './coupon.service';

describe('CouponService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponService]
    });
  });

  it('should ...', inject([CouponService], (service: CouponService) => {
    expect(service).toBeTruthy();
  }));
});
