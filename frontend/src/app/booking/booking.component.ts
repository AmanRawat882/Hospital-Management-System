import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent{
  doctors!:Doctor[];
  patientId!: number;
  constructor(private fb:FormBuilder,private doctorService:DoctorService,private patientService:PatientService){}
  profileForm = new FormGroup({
    name: new FormControl(''),
    complaint: new FormControl(''),
    appointmentDate:new FormControl(''),
    doctor: new FormControl({
    id:new FormControl(null),
    name: new FormControl('')
  }),
  isAdmitted:new FormControl(''),
  });
  onSubmit() {
    this.profileForm.value.id='';
    this.profileForm.value.bill='';
    console.warn(this.profileForm.value);
    this.addAppointment(this.profileForm.value);
  }
  
  public getDoctors():void{
    this.doctorService.getDoctors().subscribe(
      (respose: Doctor[])=>{this.doctors=respose;}
    );
  }
  public addAppointment(formValue:Patient):void{
    this.patientService.addAppointment(formValue).
    subscribe((response:number)=>{this.patientId=response;},
    (error:HttpErrorResponse)=>{alert(error.message);});
  }
  
  ngOnInit(): void {
    this.getDoctors();
  }
}