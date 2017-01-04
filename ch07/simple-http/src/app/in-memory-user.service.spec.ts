/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InMemoryUserService } from './in-memory-user.service';

describe('InMemoryUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryUserService]
    });
  });

  it('should ...', inject([InMemoryUserService], (service: InMemoryUserService) => {
    expect(service).toBeTruthy();
  }));
});
