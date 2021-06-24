import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public getDoctors():Observable<any>{
    return this.http.get<any>(this.apiUrl+'/api/doctor/all');
  }
  public addDoctors(managedoctor:Doctor):Observable<any>{
    return this.http.post(this.apiUrl+'/api/patient/create',managedoctor,
    {responseType: 'text'});
  }
}
