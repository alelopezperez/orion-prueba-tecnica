package com.oriontekchallenge.orionprojectchallenge.address;

import com.oriontekchallenge.orionprojectchallenge.client.Client;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.util.UUID;

@Entity
@Table
public class Address {
    @Id
    @UuidGenerator()
    @GeneratedValue(generator = "UUID")
    private UUID id;

    private String street;

    private String zipCode;


    private String city;

    private String country;
}
