import { TestBed } from '@angular/core/testing';

import { FactsService } from './facts.service';

describe('FactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactsService = TestBed.get(FactsService);
    expect(service).toBeTruthy();
  });
});
