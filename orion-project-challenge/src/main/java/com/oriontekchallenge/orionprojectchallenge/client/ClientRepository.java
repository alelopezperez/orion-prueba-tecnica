package com.oriontekchallenge.orionprojectchallenge.client;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ClientRepository extends JpaRepository<Client, UUID> {

    @Query("SELECT s FROM Client s WHERE s.email = ?1")
    Optional<Client> findByClientEmail(String email);
}
