import { Component, OnInit } from '@angular/core';  
import { Router } from '@angular/router';  
import { AuthenticationService } from '../_service/authentication.service';  
@Component({  
  selector: 'app-home',  
  templateUrl: './manage-doctor.component.html',  
  styleUrls: ['./manage-doctor.component.css']  
})  
export class ManageDoctorComponent implements OnInit {  
  constructor(private router: Router, private authenticationService: AuthenticationService) { }  
  ngOnInit() {  
  }  
    
  logout() {  
    this.authenticationService.logout();  
    this.router.navigate(['']);  
  }  
} 
