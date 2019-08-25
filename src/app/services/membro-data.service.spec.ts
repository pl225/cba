import { TestBed } from '@angular/core/testing';

import { MembroDataService } from './membro-data.service';

describe('MembroserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MembroDataService = TestBed.get(MembroDataService);
    expect(service).toBeTruthy();
  });
});
