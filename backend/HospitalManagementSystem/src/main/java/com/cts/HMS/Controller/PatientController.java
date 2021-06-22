package com.cts.HMS.Controller;

import com.cts.HMS.Model.Patients;
import com.cts.HMS.Services.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patient")
public class PatientController {
    @Autowired
    PatientService patientService;
    @GetMapping("/all")
    public ResponseEntity<List<Patients>> showPatientList(){
        return new ResponseEntity<List<Patients>>(patientService.getAllPatient(), HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Patients> getPatient(@PathVariable Integer id){
        return new ResponseEntity<>(patientService.getPatient(id),HttpStatus.ACCEPTED);
    }
    @PostMapping("/create")
    public ResponseEntity<String> addAppointment(@RequestBody Patients patient){
        return new ResponseEntity<String>("Your Appointment has been successfully booked with appointment id"+patientService.addAppointment(patient),HttpStatus.CREATED);
    }
}
