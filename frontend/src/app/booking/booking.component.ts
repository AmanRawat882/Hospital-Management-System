import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent{
  profileForm = new FormGroup({
    fullName: new FormControl(''),
    complaint: new FormControl(''),
    appointmentDate:new FormControl(''),
    bill: new FormControl(''),
    doctor: new FormControl({
    nameofdoc: new FormControl(''),
    speciality: new FormControl(''),
    fees:new FormControl(''),
    slots:new FormControl('')
  }),
  admitted:new FormControl(''),
  });
  onSubmit() {
    console.warn(this.profileForm.value);
  }
}