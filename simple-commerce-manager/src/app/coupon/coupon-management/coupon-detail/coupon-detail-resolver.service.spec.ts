/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CouponDetailResolverService } from './coupon-detail-resolver.service';

describe('CouponDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponDetailResolverService]
    });
  });

  it('should ...', inject([CouponDetailResolverService], (service: CouponDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
