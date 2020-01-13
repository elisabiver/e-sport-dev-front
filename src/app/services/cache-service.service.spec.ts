import { TestBed } from '@angular/core/testing';

import { CacheServiceService } from './cache-service.service';

describe('CacheServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CacheServiceService = TestBed.get(CacheServiceService);
    expect(service).toBeTruthy();
  });
});
