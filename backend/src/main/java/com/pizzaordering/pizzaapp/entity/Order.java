package com.pizzaordering.pizzaapp.entity;

import java.util.Objects;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

@Document(collection = "orders")
public class Order {

	//properties
	@Id
	private String id;
	
	private String email;
	private String phoneNumber;
	private String streetAddress;
	private String city;
	private String state;
	private String zipcode;
	
	private CrustType crustType;
	private Crust crust;
	private Sauce sauce;
	private Cheese cheese;
	private Topping [] toppings;
	private Beverage [] beverages;
	
	private double orderTotal = 0;
	
	
	//compute total method
	private void computeTotal() {
			double toppingTotal = 0;
			if(toppings.length > 0) {
				for(Topping topping : toppings) {
					toppingTotal += topping.getPrice() * crust.getToppingMultiplier();
				}
			}
			
			double beverageTotal = 0;
			if(beverages.length > 0) {
				for(Beverage beverage : beverages) {
					beverageTotal += beverage.getPrice();
				}
			}
			
			orderTotal += (crust.getPrice() * crustType.getPriceMultiplier());
			orderTotal += sauce.getPrice();
			orderTotal += cheese.getPrice();
			orderTotal += toppingTotal;
			orderTotal += beverageTotal;
	}

	
	//constructors
	public Order() { }
	
	@JsonCreator
	public Order(@JsonProperty("email") String email, 
				@JsonProperty("phoneNumber") String phoneNumber,
				@JsonProperty("streetAddress") String streetAddress,
				@JsonProperty("city") String city,
				@JsonProperty("state") String state,
				@JsonProperty("zipcode") String zipcode,
				@JsonProperty("crustType") CrustType crustType,
				@JsonProperty("crust") Crust crust,
				@JsonProperty("sauce") Sauce sauce,
				@JsonProperty("cheese") Cheese cheese,
				@JsonProperty("toppings") Topping [] toppings,
				@JsonProperty("beverages") Beverage [] beverages) 
	{
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.streetAddress = streetAddress;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.crustType = crustType;
		this.crust = crust;
		this.sauce = sauce;
		this.cheese = cheese;
		this.toppings = toppings;
		this.beverages = beverages;
		
		computeTotal();
	}
	
	
	//Getters and Setters
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public String getStreetAddress() {
		return streetAddress;
	}


	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}


	public String getCity() {
		return city;
	}


	public void setCity(String city) {
		this.city = city;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public String getZipcode() {
		return zipcode;
	}


	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}


	public CrustType getCrustType() {
		return crustType;
	}


	public void setCrustType(CrustType crustType) {
		this.crustType = crustType;
	}


	public Crust getCrust() {
		return crust;
	}


	public void setCrust(Crust crust) {
		this.crust = crust;
	}


	public Sauce getSauce() {
		return sauce;
	}


	public void setSauce(Sauce sauce) {
		this.sauce = sauce;
	}


	public Cheese getCheese() {
		return cheese;
	}


	public void setCheese(Cheese cheese) {
		this.cheese = cheese;
	}


	public Topping[] getToppings() {
		return toppings;
	}


	public void setToppings(Topping[] toppings) {
		this.toppings = toppings;
	}


	public Beverage[] getBeverages() {
		return beverages;
	}


	public void setBeverages(Beverage[] beverages) {
		this.beverages = beverages;
	}


	public double getOrderTotal() {
		return orderTotal;
	}


	public void setOrderTotal(double orderTotal) {
		this.orderTotal = orderTotal;
	}


	//hashCode() and equals()
	@Override
	public int hashCode() {
		return Objects.hash(id);
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Order other = (Order) obj;
		return Objects.equals(id, other.id);
	}
	
}
