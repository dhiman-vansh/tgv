package com.goat.village.goat.village.model;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class User {
	private String username;
	private String emailId;
	private String password;
	private Integer dob;
	private String fname;
	private String Lname;
	private String email;
	private int phnno;

}
