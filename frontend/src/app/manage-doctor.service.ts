import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ManageDoctor } from './manage-doctor';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ManageDoctorService {
  private apiUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public addDoctors(managedoctor:ManageDoctor):Observable<any>{
    const body=JSON.stringify(managedoctor);
    const headers = { 'content-type': 'application/json'}  
    console.log(body);
    return this.http.post<any>(this.apiUrl+'/api/doctor/create',body,{'headers':headers});
  }
}
