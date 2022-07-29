import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddflightComponent } from './Components/addflight/addflight.component';
import { AdmindashboardComponent } from './Components/admindashboard/admindashboard.component';
import { AdminloginComponent } from './Components/adminlogin/adminlogin.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ReportComponent } from './Components/report/report.component';
import { UpdateflightComponent } from './Components/updateflight/updateflight.component';
import { UserdashboardComponent } from './Components/userdashboard/userdashboard.component';
import { UserloginComponent } from './Components/userlogin/userlogin.component';
import { UserregistrationComponent } from './Components/userregistration/userregistration.component';

const routes: Routes = [
  {path: '',component:HomepageComponent},
  {path: 'adminlogin',component:AdminloginComponent},
  {path: 'admindashboard',component:AdmindashboardComponent},
  {path: 'admindashboard/updateflight/:flightId',component:UpdateflightComponent},
  {path: 'userlogin',component:UserloginComponent},
  {path: 'userregistration',component:UserregistrationComponent},
  {path: 'userdashboard',component:UserdashboardComponent},
  {path: 'about',component:AboutComponent},
  {path: 'contact',component:ContactComponent},
  {path: 'admindashboard/report',component:ReportComponent},
  {path: '**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
