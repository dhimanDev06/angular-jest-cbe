import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

  getApi(){
    let url = 'https://dummy.restapiexample.com/api/v1/employees'
    return this.http.get(url)
  }
}
