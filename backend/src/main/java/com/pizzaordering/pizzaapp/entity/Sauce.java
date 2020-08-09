package com.pizzaordering.pizzaapp.entity;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sauce")
public class Sauce {

	//properties
	@Id
	private String id;
	
	private String amount;
	private double price;
	
	//default constructor
	public Sauce() { }

	
	//Getters and Setters
	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getAmount() {
		return amount;
	}

	public void setAmount(String amount) {
		this.amount = amount;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	};
	
}
