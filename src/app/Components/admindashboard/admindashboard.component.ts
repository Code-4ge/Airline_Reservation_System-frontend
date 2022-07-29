import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/Services/flight/flight.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {

  public flightForm !:FormGroup;
  public F_details:any;

  constructor(private formBuilder : FormBuilder, private flightService : FlightService, private router:Router) { }

  ngOnInit(): void {
    this.flightForm=this.formBuilder.group({
      flightName: [""],
      from: [""],
      to: [""],
      date: [""],
      time:[""],
      cost: 0,
    })
    this.getFlightAllDetails();
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

  AddFlight(){
    console.log("Add Flight Details");
    console.log(this.flightForm.value);
    this.flightService.AddFlightDetails(this.flightForm.value)
    .subscribe({
      next:(res)=>{
        alert("Flight Details Added Sucessfully");
        this.flightForm.reset();
        this.getFlightAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Flight Details Added Sucessfull");
          this.flightForm.reset();
          this.getFlightAllDetails();
        }
        else{
          alert("Failed to Update");
          console.log(err)
        }
      }
    });
  }

  deleteFlight(flightId:string){
    this.flightService.deleteFlightById(flightId)
    .subscribe({
      next:(res)=>{
        alert("Deleted Sucessfully");
        this.getFlightAllDetails();
        console.log(res);
      },
      error:(err)=>{
        if(err.status == 200)
        {
          alert("Deleted Sucessfully");
          this.getFlightAllDetails();
        }
        else{
          alert("Failed Delete")
          console.log(err)
        }

      }
    })
  }

}
