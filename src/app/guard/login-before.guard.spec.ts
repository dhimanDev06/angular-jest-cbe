import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { loginBeforeGuard } from './login-before.guard';

describe('loginBeforeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => loginBeforeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
