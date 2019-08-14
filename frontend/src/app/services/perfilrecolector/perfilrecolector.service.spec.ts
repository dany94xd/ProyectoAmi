import { TestBed } from '@angular/core/testing';

import { PerfilrecolectorService } from './perfilrecolector.service';

describe('PerfilrecolectorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PerfilrecolectorService = TestBed.get(PerfilrecolectorService);
    expect(service).toBeTruthy();
  });
});
