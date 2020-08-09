package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.Cheese;
import com.pizzaordering.pizzaapp.repository.CheeseDAO;

@Service
public class CheeseService {

	@Autowired
	private CheeseDAO cheeseDAO;
	
	public Collection<Cheese> getCheese() {
		return cheeseDAO.getCheese();
	}
}
