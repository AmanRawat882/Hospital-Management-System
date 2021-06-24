import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../doctor';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})

export class DoctorsComponent implements OnInit {
  public doctors!: Doctor[];
  constructor(private doctorService:DoctorService) { }
  
  public getDoctors():void{
    this.doctorService.getDoctors().subscribe(
      (respose: Doctor[])=>{this.doctors=respose;},
    (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }

  ngOnInit(): void {
    this.getDoctors();
  }

}
