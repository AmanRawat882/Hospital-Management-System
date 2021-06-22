import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BookingComponent } from './booking/booking.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'booking',component:BookingComponent},
  {path:'admin-panel',component:AdminPanelComponent},
{path:'contact-us',component:ContactUsComponent},
{path:'about-us',component:AboutUsComponent},
{path:'doctors',component:DoctorsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
