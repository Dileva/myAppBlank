import { TestBed } from '@angular/core/testing';

import { CreateDBService } from './create-db.service';

describe('CreateDBService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateDBService = TestBed.get(CreateDBService);
    expect(service).toBeTruthy();
  });
});
