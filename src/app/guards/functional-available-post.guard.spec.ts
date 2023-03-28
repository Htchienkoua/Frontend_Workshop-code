import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { functionalAvailablePostGuard } from './functional-available-post.guard';

describe('functionalAvailablePostGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => functionalAvailablePostGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
