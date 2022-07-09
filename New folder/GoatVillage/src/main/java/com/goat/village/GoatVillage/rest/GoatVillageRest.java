package com.goat.village.GoatVillage.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goat.village.GoatVillage.repo.GoatRepository;
import com.goat.village.model.Cottage;
@RestController
//@RequestMapping(value="/api")
public class GoatVillageRest {
	
	/*
	 * @Autowired GoatServiceClass goatServiceClass;
	 */
	 
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
	public List<Cottage> countRoom(){
		return goatRepository.findAll();
	}
}
