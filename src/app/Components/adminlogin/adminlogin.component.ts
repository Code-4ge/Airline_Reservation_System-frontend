import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminloginService } from 'src/app/Services/adminlogin/adminlogin.service';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  public adminForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private adminLoginService : AdminloginService, private authenticationService : AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.adminForm=this.formBuilder.group({
      email: [""],
      pass: [""],
    });
  }

  adminLogin(){
    console.log("Admin Login");
    console.log(this.adminForm.value);
    const password = this.adminForm.value.pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8 && this.adminForm.value.email!= null){
      console.log("TRUE");
      this.adminLoginService.adminlogin(this.adminForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Login Successful");
          this.authenticationService.setToken(res.id);
          this.adminForm.reset();
          this.router.navigate(['admindashboard']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    }
    else{
      alert("Please enter email or password")
    }
  }

}
