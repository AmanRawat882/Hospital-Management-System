package com.cts.HMS.Services;

import com.cts.HMS.Exception.RequestResourceNotFountException;
import com.cts.HMS.Model.Doctor;
import com.cts.HMS.Model.Patients;
import com.cts.HMS.repositories.DoctorRepository;
import com.cts.HMS.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@Transactional
@Service
public class PatientService {
    @Autowired
    PatientRepository patientRepository;
    @Autowired
    DoctorRepository doctorRepository;
    public Patients getPatient(int id){
        Optional<Patients> patient= patientRepository.findById(id);
        if(patient.isPresent())
            return patient.get();
        throw new RequestResourceNotFountException("Patient Not Found ");
    }
    public int addAppointment(Patients patients){
        int doctorId=patients.getDoctor().getDoctorId();
        Optional<Doctor> doctor=doctorRepository.findById(doctorId);
        if(doctor.isPresent()){
            int slots=doctor.get().getSlots();
            if(slots>0){
                doctorRepository.updateSlots(doctorId,slots-1);
                patients.setBill(doctor.get().getFees());
                patientRepository.save(patients);
                return patients.getId();
            }
            else
                throw new RequestResourceNotFountException("Slots Full");
        }
        else
            throw new RequestResourceNotFountException("Invalid Doctor name");

    }
    public List<Patients> getAllPatient(){
        return patientRepository.findAll();
    }
}
