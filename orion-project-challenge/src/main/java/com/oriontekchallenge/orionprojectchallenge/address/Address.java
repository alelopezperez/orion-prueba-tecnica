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

    public Address() {
    }

    public Address(UUID id, String street, String zipCode, String city, String country) {
        this.id = id;
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }

    @Override
    public String toString() {
        return "Address{" +
                "id=" + id +
                ", street='" + street + '\'' +
                ", zipCode='" + zipCode + '\'' +
                ", city='" + city + '\'' +
                ", country='" + country + '\'' +
                '}';
    }

    public Address(String street, String zipCode, String city, String country) {
        this.street = street;
        this.zipCode = zipCode;
        this.city = city;
        this.country = country;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }
}
