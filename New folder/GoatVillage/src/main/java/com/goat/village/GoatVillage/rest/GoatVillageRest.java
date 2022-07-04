package com.goat.village.GoatVillage.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.goat.village.GoatVillage.service.GoatServiceClass;
import com.goat.village.goat.village.model.User;
import com.goat.village.goat.village.request.UserResponse;
import com.goat.village.goat.village.request.Userrequest;
@RestController
//@RequestMapping(value="/api")
public class GoatVillageRest {
	@Autowired
	GoatServiceClass goatServiceClass;
	
	
	@PostMapping(path= "/user", consumes = "application/json", produces = "application/json")
	public UserResponse createUser(@RequestBody Userrequest userRequest){
		User user =new User();
		if(userRequest!=null) {
			
			user.setFname(userRequest.getFname());
			user.setLname(userRequest.getLname());
			user.setEmail(userRequest.getEmail());
			user.setPhnno(userRequest.getPhnno());
		}
		return goatServiceClass.createUser(user);
	}

	@PostMapping(path= "/login", consumes = "application/json", produces = "application/json")
	public UserResponse loginUser(@RequestBody User userRequest){
		User user =new User();
		if(userRequest!=null) {
			
			user.setUsername(userRequest.getUsername());
			user.setPassword(userRequest.getPassword());
			
		}
		return goatServiceClass.loginUser(user);
	}
}
