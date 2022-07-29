import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {


  baseUrl= "https://localhost:7039/api/Flight";
  bookingUrl= "https://localhost:7039/api/Booking";

  constructor(private http: HttpClient) { }

  AddFlightDetails(flightDetails: any) {
    return this.http.post<any>(this.baseUrl + "/addflight", flightDetails)
  }

  UpdateFlightDetails(flightId:any, flightDetails: any) {
    return this.http.put<any>(this.baseUrl + "/updateflight/" + flightId, flightDetails)
  }

  getAllFlight() {
    return this.http.get<any>(this.baseUrl)
  }

  deleteFlightById(flightId: string) {
    return this.http.delete<any>(this.baseUrl + "/deleteflight/" + flightId)
  }

  getFlightById(FlightId: any) {
    return this.http.get<any>(this.baseUrl + "/" + FlightId)
  }

  BookFlight(value: any) {
    return this.http.post<any>(this.bookingUrl + "/bookflight", value)
  }

  CancelFlight(bookedId: any) {
    return this.http.delete<any>(this.bookingUrl + "/deletebookedflight/" + bookedId)
  }

  getUserFlight(userToken:any) {
    return this.http.get<any>(this.bookingUrl + "/" + userToken)
  }

  getAllFlightCost() {
    return this.http.get<any>(this.baseUrl + "/totalcost")
  }

}
