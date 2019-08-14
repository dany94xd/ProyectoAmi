import { TestBed } from '@angular/core/testing';

import { IngresomatriculaService } from './ingresomatricula.service';

describe('IngresomatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IngresomatriculaService = TestBed.get(IngresomatriculaService);
    expect(service).toBeTruthy();
  });
});
