/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CouponListResolverService } from './coupon-list-resolver.service';

describe('CouponListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CouponListResolverService]
    });
  });

  it('should ...', inject([CouponListResolverService], (service: CouponListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
