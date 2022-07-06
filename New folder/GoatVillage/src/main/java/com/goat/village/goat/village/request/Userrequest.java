package com.goat.village.goat.village.request;

import java.util.Date;

import lombok.Data;

@Data
public class Userrequest {
	private String fname;
	private String Lname;
	private String email;
	private int phnno;
	private Date sdate;
	private Date edate;

}
