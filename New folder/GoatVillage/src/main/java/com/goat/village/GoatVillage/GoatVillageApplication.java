package com.goat.village.GoatVillage;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.goat.village.model")
public class GoatVillageApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoatVillageApplication.class, args);
	}

}
