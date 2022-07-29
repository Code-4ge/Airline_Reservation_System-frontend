import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Services/flight/flight.service';

@Component({
  selector: 'app-updateflight',
  templateUrl: './updateflight.component.html',
  styleUrls: ['./updateflight.component.css']
})
export class UpdateflightComponent implements OnInit {

  public flightForm !:FormGroup;
  FlightId : any;

  constructor(private formBuilder : FormBuilder, private flightService : FlightService, private router:Router, private activatedRouter:ActivatedRoute) {
    this.FlightId = this.activatedRouter.snapshot.paramMap.get("flightId");
   }

  ngOnInit(): void {
    this.flightForm=this.formBuilder.group({
      flightName: [""],
      from: [""],
      to: [""],
      date: [""],
      time:[""],
      cost: 0,
    })
    // this.getFlightById()
  }

  // getFlightById(){
  //   console.log("Getting Flight Details");
  //   console.log(this.FlightId);
  //   this.flightService.getFlightById(this.FlightId)
  //   .subscribe({
  //     next:(res)=>{
  //       console.log(res);
  //       // this.flightForm = res;
  //     },
  //     error:(err)=>{console.log(err)}
  //   })
  // }

  UpdateFlight(){
    console.log("Updating Flight Details");
    console.log(this.flightForm.value);
    this.flightService.UpdateFlightDetails(this.FlightId, this.flightForm.value)
    .subscribe({
      next:(res)=>{
        alert("Flight Details updated Sucessfully");
        this.flightForm.reset();
        this.router.navigate(['admindashboard']);
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("flight Details updated Sucessfull");
          this.flightForm.reset();
          this.router.navigate(['admindashboard']);
        }
        else{
          alert("Failed to Update");
          console.log(err)
        }
      }
    });
  }

}
