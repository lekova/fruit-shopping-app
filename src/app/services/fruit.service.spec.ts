import { TestBed, inject } from '@angular/core/testing';

import { FruitService } from './fruit.service';

describe('FruitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FruitService]
    });
  });

  it('should ...', inject([FruitService], (service: FruitService) => {
    expect(service).toBeTruthy();
  }));
});
