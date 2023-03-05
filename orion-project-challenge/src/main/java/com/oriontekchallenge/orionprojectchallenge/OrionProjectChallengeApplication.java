package com.oriontekchallenge.orionprojectchallenge;

import com.oriontekchallenge.orionprojectchallenge.client.Client;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@SpringBootApplication
public class OrionProjectChallengeApplication {
	public static void main(String[] args) {
		SpringApplication.run(OrionProjectChallengeApplication.class, args);
	}


}
