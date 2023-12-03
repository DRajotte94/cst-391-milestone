import { TestBed } from '@angular/core/testing';

import { SpellServiceService } from './spell-service.service';

describe('SpellServiceService', () => {
  let service: SpellServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpellServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
