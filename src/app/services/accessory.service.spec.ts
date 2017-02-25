import { TestBed, inject } from '@angular/core/testing';

import { AccessoryService } from './accessory.service';

describe('AccessoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AccessoryService]
    });
  });

  it('should ...', inject([AccessoryService], (service: AccessoryService) => {
    expect(service).toBeTruthy();
  }));
});
