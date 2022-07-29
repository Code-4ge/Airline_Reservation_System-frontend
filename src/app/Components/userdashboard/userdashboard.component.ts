import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/Authentication/authentication.service';
import { FlightService } from 'src/app/Services/flight/flight.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrls: ['./userdashboard.component.css']
})
export class UserdashboardComponent implements OnInit {

  public bookingForm !:FormGroup;
  public F_details : any;

  public UF_details : any;

  constructor(private formBuilder : FormBuilder, private flightService : FlightService, private authentication : AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    this.bookingForm=this.formBuilder.group({
      bookedBy: [""],
      userId: [""],
      totalSeat: [""],
      flightName: [""],
      from: [""],
      to: [""],
      date: [""],
      time: [""],
      cost: Number
    });
    this.getFlightAllDetails();
    this.getUserFlightDetails();
  }

  getFlightAllDetails() {
    this.flightService.getAllFlight()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.F_details = res;
      },
      error:(err)=>{console.log(err)}
    })
  }

  getUserFlightDetails(){
    this.flightService.getUserFlight(this.authentication.getToken())
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.UF_details = res;
      },
      error:(err)=>{console.log(err)}
    })
  }

  BookFlight(flight:any){
    this.bookingForm.setValue({
      bookedBy: this.bookingForm.value.bookedBy,
      totalSeat: this.bookingForm.value.totalSeat,
      userId : this.authentication.getToken(),
      flightName: flight.flightName,
      from: flight.from,
      to: flight.to,
      date: flight.date,
      time: flight.time,
      cost: flight.cost,
    });
    console.log(this.bookingForm.value)
    this.flightService.BookFlight(this.bookingForm.value)
    .subscribe({
      next:(res)=>{
        alert("Thank you, " + res.bookedBy + " for booking " + res.flightName + " flight for " + res.totalSeat + " persons\nCost : " + parseInt(res.cost)*parseInt(res.totalSeat));
        this.bookingForm.reset();
        this.getUserFlightDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Thank you to book flight");
          this.bookingForm.reset();
          this.getUserFlightDetails();
        }
        else{
          alert("Failed to Book Flight");
          console.log(err)
        }
      }
    });
  }

  CancelFlight(bookedId: any)
  {
    console.log(bookedId);
    this.flightService.CancelFlight(bookedId)
    .subscribe({
      next:(res)=>{
        alert("Your Booking is cancelled succesfully and you will get refund " + parseInt(res.cost)/2 );
        this.getUserFlightDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Flight Canceled");
          this.getUserFlightDetails();
        }
        else{
          alert("Failed to Cancel Flight");
          console.log(err)
        }
      }
    });
  }

}
