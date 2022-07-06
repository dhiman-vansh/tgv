package com.goat.village.goat.village.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Cottage")
public class Cottage {
	private int room;
	private Date exp_date;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

}
