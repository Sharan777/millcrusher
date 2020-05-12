import { TestBed } from '@angular/core/testing';

import { TripSheetService } from './trip-sheet.service';

describe('TripSheetService', () => {
  let service: TripSheetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripSheetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
