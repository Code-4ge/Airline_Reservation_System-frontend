import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightService } from 'src/app/Services/flight/flight.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  public flightCost:any;

  constructor(private flightService : FlightService, private router:Router) { }

  ngOnInit(): void {
    this.getFlightAllCost();
  }

  getFlightAllCost() {
    this.flightService.getAllFlightCost()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.flightCost = res;
      },
      error:(err)=>{console.log(err)}
    })
  }

}
