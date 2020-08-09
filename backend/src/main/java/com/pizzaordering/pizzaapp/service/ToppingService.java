package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.Topping;
import com.pizzaordering.pizzaapp.repository.ToppingDAO;

@Service
public class ToppingService {

	@Autowired
	private ToppingDAO toppingDAO;
	
	public Collection<Topping> getTopping() {
		return toppingDAO.getTopping();
	}
}
