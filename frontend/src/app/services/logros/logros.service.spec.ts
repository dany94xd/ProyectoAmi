import { TestBed } from '@angular/core/testing';

import { LogrosService } from './logros.service';

describe('LogrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogrosService = TestBed.get(LogrosService);
    expect(service).toBeTruthy();
  });
});
