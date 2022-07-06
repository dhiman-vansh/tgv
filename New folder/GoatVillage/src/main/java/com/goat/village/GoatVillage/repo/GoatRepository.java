package com.goat.village.GoatVillage.repo;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.goat.village.goat.village.model.User;

public interface GoatRepository extends CrudRepository<User, Integer> {


	/*
	 * public String createrUser() { String message = "Success";
	 * 
	 * return message;
	 * 
	 * }
	 */

	/*
	 * public java.lang.Integer[] countRoom() { Date sdate = new Date(); int i=0;
	 * 
	 * Calendar cal = new GregorianCalendar(); cal.add(Calendar.DAY_OF_MONTH, +7);
	 * Date sevenDaysAfter = cal.getTime(); while( i<6) { System.out.println(); i++;
	 * }
	 * 
	 * Integer[] count = new Integer[7];
	 * 
	 * return count;
	 * 
	 * }
	 */
	public List<User> findAll();

}
