package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.Sauce;
import com.pizzaordering.pizzaapp.service.SauceService;

@RestController
@RequestMapping("/api/sauce")
public class SauceController {

	@Autowired
	private SauceService sauceService;
	
	@GetMapping
	public Collection<Sauce> getSauce() {
		return sauceService.getSauce();
	}
}
