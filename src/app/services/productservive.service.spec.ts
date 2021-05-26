import { TestBed } from '@angular/core/testing';

import { ProductserviveService } from './productservive.service';

describe('ProductserviveService', () => {
  let service: ProductserviveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductserviveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
