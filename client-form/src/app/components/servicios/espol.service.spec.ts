import { TestBed } from '@angular/core/testing';

import { EspolService } from './espol.service';

describe('EspolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EspolService = TestBed.get(EspolService);
    expect(service).toBeTruthy();
  });
});
