package com.cts.HMS.repositories;

import com.cts.HMS.Model.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,Integer> {
    @Modifying
    @Query("UPDATE Doctor d SET d.slots = :slots WHERE d.doctorId = :doctorId")
    int updateSlots(@Param("doctorId")int id,@Param("slots")int slots);
}
