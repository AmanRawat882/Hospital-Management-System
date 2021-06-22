package com.cts.HMS.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Doctor")
@Entity
public class Doctor {
    @Id
    @SequenceGenerator(name = "doctorSeq",initialValue = 1000,allocationSize = 1,sequenceName = "DOCTOR_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "doctorSeq")
    private int doctorId;
    @Column
    private String name;
    @Column
    private String speciality;
    @Column
    private double fees;
    @Column
    private int slots=100;
}
