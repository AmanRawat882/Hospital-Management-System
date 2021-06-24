import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { ManageDoctor } from '../manage-doctor';
import { ManageDoctorService } from '../manage-doctor.service';
import { AuthenticationService } from '../_service/authentication.service';  
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({  
  selector: 'app-home',  
  templateUrl: './manage-doctor.component.html',  
  styleUrls: ['./manage-doctor.component.css']  
})  
export class ManageDoctorComponent implements OnInit { 
 
  public show: boolean = false;
public buttonName: any = true;
  constructor(private router: Router, private authenticationService: AuthenticationService,private manageDoctorService:ManageDoctorService) { }  
  ngOnInit() {  
  }  
    
  logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  
  

toggle() {
    this.show = !this.show;
    if(this.show)
        this.buttonName = false;
    else
        this.buttonName = true;
}
doctorform = new FormGroup({
  name: new FormControl(''),
  speciality: new FormControl(''),
  fees: new FormControl('')});

onSubmit() {
  console.warn(this.doctorform.value);
  this.addDoctors();
}
addDoctors()
{
  this.doctorform.value.doctorId='';
    this.doctorform.value.slots='';
  this.manageDoctorService.addDoctors(this.doctorform.value)
      .subscribe(data => {
        console.log(data);
      })      
}

}
