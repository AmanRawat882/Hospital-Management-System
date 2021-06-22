package com.cts.HMS.Services;

import com.cts.HMS.Exception.RequestResourceNotFountException;
import com.cts.HMS.Model.Doctor;
import com.cts.HMS.repositories.DoctorRepository;
import com.cts.HMS.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class DoctorService {
    @Autowired
    DoctorRepository doctorRepository;
    @Autowired
    PatientRepository patientRepository;
    public Doctor getDoctor(int doctorId){
        Optional<Doctor> doctor=doctorRepository.findById(doctorId);
        if(doctor.isPresent())
            return doctor.get();
        else
            throw new RequestResourceNotFountException("Doctor did not exist");
    }
    public List<Doctor> getDoctorList(){
        return doctorRepository.findAll();
    }
    public int addDoctor(Doctor doctor){
        doctorRepository.save(doctor);
        return doctor.getDoctorId();
    }
}
