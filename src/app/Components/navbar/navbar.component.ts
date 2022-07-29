import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedin:boolean = false;

  constructor(private authenticationService : AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedin = !this.authenticationService.isLoggedIn();
  }

  Logout(){
    this.authenticationService.logout();
  }

}
