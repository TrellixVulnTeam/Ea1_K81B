import { TestBed } from '@angular/core/testing';

import { PersonasService } from './persona.service';

describe('PersonarService', () => {
  let service: PersonasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
