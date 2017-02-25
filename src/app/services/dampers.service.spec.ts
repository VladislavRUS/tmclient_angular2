import { TestBed, inject } from '@angular/core/testing';

import { DampersService } from './dampers.service';

describe('DampersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DampersService]
    });
  });

  it('should ...', inject([DampersService], (service: DampersService) => {
    expect(service).toBeTruthy();
  }));
});
