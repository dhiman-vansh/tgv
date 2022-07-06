package com.goat.village.goat.village.request;

import java.util.ArrayList;
import java.util.List;

import lombok.Data;

@Data
public class UserResponse {
	public Integer count;
	public String message;
	public List cottageCount;

}
