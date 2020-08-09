package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.Cheese;
import com.pizzaordering.pizzaapp.service.CheeseService;

@RestController
@RequestMapping("/api/cheese")
public class CheeseController {

	@Autowired
	private CheeseService cheeseService;
	
	@GetMapping
	public Collection<Cheese> getCheese() {
		return cheeseService.getCheese();
	}
}
