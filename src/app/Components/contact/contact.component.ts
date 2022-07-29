import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/Services/contact/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm !:FormGroup;

  constructor(private formBuilder : FormBuilder, private contactServicce : ContactService, private router:Router) { }

  ngOnInit(): void {
    this.contactForm=this.formBuilder.group({
      name: [""],
      email: [""],
      msg: [""],
    });
  }

  sendMessage(){
    console.log("Sending Message");
    console.log(this.contactForm.value);
    this.contactServicce.sendMessage(this.contactForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res);
        alert("Message sent Successful");
      },
      error:(err)=>{
        console.log(err);
        alert("Failed to send Message");
      }
    });
  }

}
