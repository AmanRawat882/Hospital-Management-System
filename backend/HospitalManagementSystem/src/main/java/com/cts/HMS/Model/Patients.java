package com.cts.HMS.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Patients")
@Entity
public class Patients {
    @Id
    @SequenceGenerator(name = "patientSeq",initialValue = 1000,allocationSize = 1,sequenceName = "PATIENTS_SEQ")
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "patientSeq")
    private int id;
    @Column
    private String name;
    @Column
    private String complaint;
    @Column
    private boolean isAdmitted;
    @Column
    private String appointmentDate;
    @Column
    private double bill;
    @ManyToOne
    @JoinColumn(name = "doctorId")
    private Doctor doctor;
}
