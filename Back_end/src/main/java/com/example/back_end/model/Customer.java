package com.example.back_end.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
public class Customer {

    @Id
    @GeneratedValue
    private int id;

    private String customerName;

    @JsonBackReference
    @OneToMany(mappedBy = "customer")
    private List<Saving> savingList;

}
