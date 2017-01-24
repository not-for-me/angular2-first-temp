/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FirebaseIdGeneratorService } from './firebase-id-generator.service';

describe('FirebaseIdGeneratorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FirebaseIdGeneratorService]
    });
  });

  it('should ...', inject([FirebaseIdGeneratorService], (service: FirebaseIdGeneratorService) => {
    expect(service).toBeTruthy();
  }));
});
