package com.goat.village.GoatVillage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goat.village.GoatVillage.repo.GoatRepository;
import com.goat.village.goat.village.model.User;
import com.goat.village.goat.village.request.UserResponse;

@Service
public class GoatServiceClass {
	
	@Autowired
	GoatRepository goatRepository;
	/*
	 * public UserResponse createUser(User user) { UserResponse response=new
	 * UserResponse(); response.setMessage(goatRepository.createrUser(user));
	 * 
	 * 
	 * return response; }
	 */
	
	
	public List<User> countRoom() {
		
		System.out.println("hello");
		return goatRepository.findAll();
		
	}


}
