/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MySpinnerService } from './my-spinner.service';

describe('MySpinnerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MySpinnerService]
    });
  });

  it('should ...', inject([MySpinnerService], (service: MySpinnerService) => {
    expect(service).toBeTruthy();
  }));
});
