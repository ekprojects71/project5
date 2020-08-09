package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.pizzaordering.pizzaapp.entity.Beverage;
import com.pizzaordering.pizzaapp.repository.BeverageDAO;


@Service
public class BeverageService {
	
	@Autowired
	private BeverageDAO beverageDAO;

	public Collection<Beverage> getBeverages() {
		return beverageDAO.getBeverages();
	};
}
