import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl= "https://localhost:7039/api/User";

  constructor(private http: HttpClient) { }

  userlogin(value: any) {
    return this.http.post<any>(this.baseUrl + "/login", value)
  }

  userRegister(value: any) {
    return this.http.post<any>(this.baseUrl + "/register", value)
  }

}
