package com.pizzaordering.pizzaapp.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "crust-type")
public class CrustType {

	//properties
	@Id
	private String id;
	
	private String type;
	private double priceMultiplier;
	
	
	//default constructor
	public CrustType() { }


	//Getters and Setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public double getPriceMultiplier() {
		return priceMultiplier;
	}

	public void setPriceMultiplier(double priceMultiplier) {
		this.priceMultiplier = priceMultiplier;
	}
	
}
