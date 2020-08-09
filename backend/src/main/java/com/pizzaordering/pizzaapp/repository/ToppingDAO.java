package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.pizzaordering.pizzaapp.entity.Topping;

@Component
public class ToppingDAO {

	@Autowired
	private ToppingRepository toppingRepository;
	
	public Collection<Topping> getTopping() {
		return toppingRepository.findAll();
	}
}
