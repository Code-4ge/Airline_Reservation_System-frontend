import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {

  public userForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private userService : UserService, private authenticatoin : AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.userForm=this.formBuilder.group({
      email: [""],
      pass: [""],
    });
  }

  userLogin(){
    console.log("User Login");
    console.log(this.userForm.value);
    const password = this.userForm.value.pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8 && password.length >= 8 && this.userForm.value.email!= null){
      console.log("TRUE");
      this.userService.userlogin(this.userForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
        this.authenticatoin.setToken(res.id);
          this.userForm.reset();
          this.router.navigate(['userdashboard']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    }
    else{
      alert("Please enter valid email or password")
    }
  }

}
