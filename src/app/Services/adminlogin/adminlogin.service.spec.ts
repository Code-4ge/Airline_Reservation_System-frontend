/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminloginService } from './adminlogin.service';

describe('Service: Adminlogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminloginService]
    });
  });

  it('should ...', inject([AdminloginService], (service: AdminloginService) => {
    expect(service).toBeTruthy();
  }));
});
