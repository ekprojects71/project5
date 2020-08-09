package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzaordering.pizzaapp.entity.Cheese;

@Component
public class CheeseDAO {

	@Autowired
	private CheeseRepository cheeseRepository;
	
	public Collection<Cheese> getCheese() {
		return cheeseRepository.findAll();
	}
}
