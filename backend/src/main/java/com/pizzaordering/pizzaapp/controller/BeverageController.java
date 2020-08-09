package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.pizzaordering.pizzaapp.entity.Beverage;
import com.pizzaordering.pizzaapp.service.BeverageService;


@RestController
@RequestMapping("/api/beverages")
public class BeverageController {
	
	@Autowired
	private BeverageService beverageService;
	
	@GetMapping
	public Collection<Beverage> getBeverages() {
		return beverageService.getBeverages();
	}
}
