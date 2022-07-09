package com.goat.village.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Table(name="Cottage")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cottage {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;

	private int room;
	private Date exp_date;
	
}
