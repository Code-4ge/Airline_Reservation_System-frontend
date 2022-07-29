import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {

  baseUrl= "https://localhost:7039/api/Admin";

  constructor(private http: HttpClient) { }

  adminlogin(value: any) {
    console.log(value)
    return this.http.post<any>(this.baseUrl + "/login", value)
  }

}
