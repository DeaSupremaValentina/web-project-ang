import { TestBed } from '@angular/core/testing';

import { ChiSiamoService } from './chi-siamo.service';

describe('ChiSiamoService', () => {
  let service: ChiSiamoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiSiamoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
