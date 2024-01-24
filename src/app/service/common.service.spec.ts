import { TestBed } from '@angular/core/testing';

import { CommonService } from './common.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
describe('CommonService', () => {
  let service: CommonService;
  let http: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    http = TestBed.inject(HttpClient)
    
    service = TestBed.inject(CommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should pass getApi', () =>{
    service.getApi()
    jest.spyOn(http,'get')
  })
});
