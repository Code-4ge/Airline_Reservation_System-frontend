import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router : Router) { }

  isLoggedIn(){
    return !!sessionStorage.getItem("SessionToken");
  }

  logout(){
    if(this.isLoggedIn())
    {
      sessionStorage.removeItem("SessionToken");
      this.router.navigate(['']);
    }
  }

  setToken(token:any){
    sessionStorage.setItem("SessionToken", token);
  }

  getToken(){
    return sessionStorage.getItem("SessionToken");
  }

}
