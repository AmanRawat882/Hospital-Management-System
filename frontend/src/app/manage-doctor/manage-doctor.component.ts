import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthenticationService } from '../_service/authentication.service';  
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DoctorService } from '../doctor.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({  
  selector: 'app-home',  
  templateUrl: './manage-doctor.component.html',  
  styleUrls: ['./manage-doctor.component.css']  
})  
export class ManageDoctorComponent implements OnInit { 
 
  public show: boolean = false;
public buttonName: any = true;
  constructor(private router: Router, private authenticationService: AuthenticationService,private manageDoctorService:DoctorService) { }  
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
  this.doctorform.value.doctorId=0;
    this.doctorform.value.slots=100;
    console.log(this.doctorform.value);
  this.manageDoctorService.addDoctors(this.doctorform.value)
      .subscribe((response:number)=>(alert('Doctor Added successfully with ID'+response)),
      (error:HttpErrorResponse)=>(alert(error.message)));    
}

}
