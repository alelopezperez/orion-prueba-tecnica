package com.oriontekchallenge.orionprojectchallenge.client;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@Configuration
public class ClientConfig {

    @Bean
    CommandLineRunner commandLineRunner(ClientRepository repository){
        return args -> {
//            Client ale = new Client(
//                    "Ale",
//                    LocalDate.now(),
//                    "Lopez",
//                    "ale@gmail.com"
//            );
//
//            repository.save(ale);
        };
    }
}
