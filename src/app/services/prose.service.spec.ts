import { TestBed, inject } from '@angular/core/testing';

import { ProseService } from './prose.service';

describe('ProseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProseService]
    });
  });

  it('should be created', inject([ProseService], (service: ProseService) => {
    expect(service).toBeTruthy();
  }));
});
