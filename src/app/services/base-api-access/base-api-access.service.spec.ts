/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BaseApiAccessService } from './base-api-access.service';

describe('BaseApiAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BaseApiAccessService]
    });
  });

  it('should ...', inject([BaseApiAccessService], (service: BaseApiAccessService) => {
    expect(service).toBeTruthy();
  }));
});
