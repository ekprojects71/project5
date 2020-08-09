package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.Topping;
import com.pizzaordering.pizzaapp.service.ToppingService;

@RestController
@RequestMapping("/api/toppings")
public class ToppingController {

	@Autowired
	private ToppingService toppingService;
	
	@GetMapping
	public Collection<Topping> getTopping() {
		return toppingService.getTopping();
	}
	
}
