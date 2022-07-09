package com.goat.village.GoatVillage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.goat.village.GoatVillage.repo.GoatRepository;
import com.goat.village.model.Cottage;

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
	
	
	public List<Cottage> countRoom() {
		
		System.out.println("hello");
		return goatRepository.findAll();
		
	}


}
