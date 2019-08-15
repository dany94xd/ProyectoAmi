import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRecolectorGuard } from './auth-recolector.guard';

describe('AuthRecolectorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRecolectorGuard]
    });
  });

  it('should ...', inject([AuthRecolectorGuard], (guard: AuthRecolectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
