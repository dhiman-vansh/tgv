package com.goat.village.GoatVillage.repo;

import org.springframework.stereotype.Repository;

import com.goat.village.goat.village.model.User;

@Repository
public class GoatRepository {
	public String createrUser(User user) {
		String message ="Success";
		
		return message;
		
	}
	
	
	
	public String loginUser(User user) {
		String message ="Login Succesfull";
		
		return message;
		
	}

}
