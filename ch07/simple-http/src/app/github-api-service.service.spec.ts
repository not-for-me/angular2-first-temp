/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GithubApiServiceService } from './github-api-service.service';

describe('GithubApiServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubApiServiceService]
    });
  });

  it('should ...', inject([GithubApiServiceService], (service: GithubApiServiceService) => {
    expect(service).toBeTruthy();
  }));
});
