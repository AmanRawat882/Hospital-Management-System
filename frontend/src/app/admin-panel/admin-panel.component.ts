import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_service/authentication.service';  

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent  {
email: string;
password: string;
title = 'auth-guard-demo';  
  constructor(private router: Router,private _auth: AuthenticationService, private _router: Router) { 
    if (this._auth.loggedIn) {  
      this._router.navigate(['manage-doc']);  
    }  
  }

  login(): void {  
    if (this.email != 'aman' && this.password != 'aman') {  
      if (this._auth.login(this.email, this.password)) {  
        this._router.navigate(["manage-doc"]);  
      }  
      else  
        alert("Wrong username or password");  
    }  

}
}
