import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl= "https://localhost:7039/api/Contact";

  constructor(private http: HttpClient) { }

  sendMessage(value: any) {
    return this.http.post<any>(this.baseUrl + "/addmessage", value)
  }

}
