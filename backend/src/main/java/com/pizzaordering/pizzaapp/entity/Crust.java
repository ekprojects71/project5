package com.pizzaordering.pizzaapp.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "crusts")
public class Crust {

	//properties
	@Id
	private String id;
	
	private String size;
	private double price;
	private float toppingMultiplier;
	
	
	//default constructor
	Crust() { }

	
	//Getters and Setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public float getToppingMultiplier() {
		return toppingMultiplier;
	}

	public void setToppingMultiplier(float toppingMultiplier) {
		this.toppingMultiplier = toppingMultiplier;
	};
	
}
