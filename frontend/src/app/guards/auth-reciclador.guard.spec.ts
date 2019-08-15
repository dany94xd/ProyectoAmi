import { TestBed, async, inject } from '@angular/core/testing';

import { AuthRecicladorGuard } from './auth-reciclador.guard';

describe('AuthRecicladorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthRecicladorGuard]
    });
  });

  it('should ...', inject([AuthRecicladorGuard], (guard: AuthRecicladorGuard) => {
    expect(guard).toBeTruthy();
  }));
});
