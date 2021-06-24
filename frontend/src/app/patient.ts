import { Doctor } from "./doctor";

export interface Patient {
    id:number;
    name:String;
    complaint:String;
    isAdmitted:boolean;
    appointmentDate:String;
    bill:number;
    Doctor:Doctor
}
