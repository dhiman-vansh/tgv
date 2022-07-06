package com.goat.village.GoatVillage.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.goat.village.GoatVillage.repo.GoatRepository;
import com.goat.village.GoatVillage.service.GoatServiceClass;
import com.goat.village.goat.village.model.User;
import com.goat.village.goat.village.request.UserResponse;
import com.goat.village.goat.village.request.Userrequest;
@RestController
//@RequestMapping(value="/api")
public class GoatVillageRest {
	
	  @Autowired 
	  GoatServiceClass goatServiceClass;
	 
	@Autowired
	GoatRepository goatRepository;
	
	/*
	 * @PostMapping(path= "/user", consumes = "application/json", produces =
	 * "application/json") public UserResponse createUser(@RequestBody Userrequest
	 * userRequest){ User user =new User(); if(userRequest!=null) {
	 * 
	 * user.setFname(userRequest.getFname()); user.setLname(userRequest.getLname());
	 * user.setEmail(userRequest.getEmail()); user.setPhnno(userRequest.getPhnno());
	 * } return goatServiceClass.createUser(user); }
	 */

	//@PostMapping(path= "/login", consumes = "application/json", produces = "application/json")
	@GetMapping(path="/count")
	public List<User> countRoom(){
		return goatServiceClass.countRoom();
	}
}
