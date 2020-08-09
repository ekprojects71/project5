package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.Crust;
import com.pizzaordering.pizzaapp.service.CrustService;

@RestController
@RequestMapping("/api/crust")
public class CrustController {
	
	@Autowired
	private CrustService crustService;
	
	@GetMapping
	public Collection<Crust> getCrust() {
		return crustService.getCrust();
	}

}
