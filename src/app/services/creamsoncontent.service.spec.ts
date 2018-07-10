import { TestBed, inject } from '@angular/core/testing';

import { CreamsoncontentService } from './creamsoncontent.service';

describe('CreamsoncontentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreamsoncontentService]
    });
  });

  it('should be created', inject([CreamsoncontentService], (service: CreamsoncontentService) => {
    expect(service).toBeTruthy();
  }));
});
