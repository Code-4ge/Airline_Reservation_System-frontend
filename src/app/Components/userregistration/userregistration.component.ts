import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  public userRegForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private userService : UserService, private router:Router) { }

  ngOnInit(): void {
    this.userRegForm=this.formBuilder.group({
      name: [""],
      email: [""],
      pass: [""],
    });
  }

  userRegistration(){
    console.log("User Registering");
    console.log(this.userRegForm.value);
    const password = this.userRegForm.value.pass;
    if(password.match(/[a-z]/g) && password.match(/[A-Z]/g) && password.match(/[0-9]/g) && password.match(/[^a-zA-Z\d]/g) && password.length >= 8){
      console.log("TRUE");
      this.userService.userRegister(this.userRegForm.value)
      .subscribe({
        next:(res)=>{
          console.log(res);
          alert("Registered Successful");
          // this.authService.Token(res.id);
          this.userRegForm.reset();
          this.router.navigate(['userlogin']);
        },
        error:(err)=>{
          console.log(err);
          alert("Invalid Credentials, Please Enter valid details");
        }
      })
    }
    else{
      alert("Invalid password formate")
    }
  }

}
