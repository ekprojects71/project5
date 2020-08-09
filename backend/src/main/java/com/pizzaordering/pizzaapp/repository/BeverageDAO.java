package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.pizzaordering.pizzaapp.entity.Beverage;

@Component
public class BeverageDAO {

	@Autowired
	private BeverageRepository repository;
	
	public Collection<Beverage> getBeverages() {
		return repository.findAll();
	}
}
