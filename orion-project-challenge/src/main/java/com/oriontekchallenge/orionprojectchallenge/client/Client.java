package com.oriontekchallenge.orionprojectchallenge.client;

import com.oriontekchallenge.orionprojectchallenge.address.Address;
import jakarta.persistence.*;
import org.hibernate.annotations.UuidGenerator;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Entity
@Table
public class Client {
    @Id
    @UuidGenerator()
    @GeneratedValue(generator = "UUID")
    private UUID id;
    private String firstName;
    private LocalDate birthDate;
    private String lastName;

    @Column(unique = true)
    private String email;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "fk_client_id")
    private Set<Address> address;


    public Client() {
    }
    public Client(UUID id, String firstName, LocalDate birthDate, String lastName, String email) {
        this.id = id;
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.lastName = lastName;
        this.email = email;
    }


    public Client(String firstName, LocalDate birthDate, String lastName, String email) {
        this.firstName = firstName;
        this.birthDate = birthDate;
        this.lastName = lastName;
        this.email = email;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Address> getAddress() {
        return address;
    }

    public void setAddress(Set<Address> address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Client{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", birthDate=" + birthDate +
                ", lastName='" + lastName + '\'' +
                ", email='" + email + '\'' +
                ", address=" + address +
                '}';
    }
}
