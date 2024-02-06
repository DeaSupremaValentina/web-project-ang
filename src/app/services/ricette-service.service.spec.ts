import { TestBed } from '@angular/core/testing';

import { RicetteServiceService } from './ricette-service.service';

describe('RicetteServiceService', () => {
  let service: RicetteServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RicetteServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
