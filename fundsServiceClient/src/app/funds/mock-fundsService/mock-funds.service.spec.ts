import { TestBed, inject } from '@angular/core/testing';

import { MockFundsService } from './mock-funds.service';

describe('MockFundsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockFundsService]
    });
  });

  it('should be created', inject([MockFundsService], (service: MockFundsService) => {
    expect(service).toBeTruthy();
  }));
});
