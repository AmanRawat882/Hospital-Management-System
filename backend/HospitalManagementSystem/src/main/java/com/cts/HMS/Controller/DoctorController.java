package com.cts.HMS.Controller;

import com.cts.HMS.Model.Doctor;
import com.cts.HMS.Services.DoctorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/doctor")
public class DoctorController {
    @Autowired
    DoctorService doctorService;
    @GetMapping("/all")
    public ResponseEntity<List<Doctor>> getAllDoctor(){
        return new ResponseEntity<List<Doctor>>(doctorService.getDoctorList(), HttpStatus.OK);
    }
    @PostMapping("/create")
    public ResponseEntity<String> addDoctor(@RequestBody Doctor doctor){
        return new ResponseEntity<String>("Successfully Added the doctor with doctor id"+doctorService.addDoctor(doctor),HttpStatus.CREATED);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Doctor> getDoctorDetails(@PathVariable int id){
        return new ResponseEntity<Doctor>(doctorService.getDoctor(id),HttpStatus.OK);
    }
}
