import { TestBed } from '@angular/core/testing';

import { AuthInterceptorProvider } from './auth-interceptor.service';

describe('AuthInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthInterceptorProvider = TestBed.get(AuthInterceptorProvider);
    expect(service).toBeTruthy();
  });
});
