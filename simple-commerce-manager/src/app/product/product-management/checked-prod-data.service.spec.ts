/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CheckedProdDataService } from './checked-prod-data.service';

describe('CheckedProdDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckedProdDataService]
    });
  });

  it('should ...', inject([CheckedProdDataService], (service: CheckedProdDataService) => {
    expect(service).toBeTruthy();
  }));
});
