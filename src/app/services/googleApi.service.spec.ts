/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleApiService } from './googleApi.service';

describe('Service: GoogleApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleApiService]
    });
  });

  it('should ...', inject([GoogleApiService], (service: GoogleApiService) => {
    expect(service).toBeTruthy();
  }));
});
