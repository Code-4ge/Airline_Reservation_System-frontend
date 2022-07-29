import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddflightComponent } from './Components/addflight/addflight.component';
import { AdmindashboardComponent } from './Components/admindashboard/admindashboard.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UpdateflightComponent } from './Components/updateflight/updateflight.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { UserregistrationComponent } from './Components/userregistration/userregistration.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ReportComponent } from './Components/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    AddflightComponent,
    AdmindashboardComponent,
    AdminloginComponent,
    HomepageComponent,
    NavbarComponent,
    UpdateflightComponent,
    UserdashboardComponent,
    UserloginComponent,
    UserregistrationComponent,
    AboutComponent,
    ContactComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
