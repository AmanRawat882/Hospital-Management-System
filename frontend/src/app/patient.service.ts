import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl=environment.apiBaseUrl;
  constructor(private http:HttpClient) { }
  public addAppointment(patient:Patient):Observable<any>{
    return this.http.post(this.apiUrl+'/api/patient/create',patient,
    {responseType: 'text'});
  }
}
