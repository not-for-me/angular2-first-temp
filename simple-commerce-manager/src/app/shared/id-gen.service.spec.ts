/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IdGenService } from './id-gen.service';

describe('IdGenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IdGenService]
    });
  });

  it('should ...', inject([IdGenService], (service: IdGenService) => {
    expect(service).toBeTruthy();
  }));
});
