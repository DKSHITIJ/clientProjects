import { TestBed, inject } from '@angular/core/testing';

import { FundsServiceService } from './funds-service.service';

describe('FundsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FundsServiceService]
    });
  });

  it('should be created', inject([FundsServiceService], (service: FundsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
