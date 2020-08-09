package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.CrustType;
import com.pizzaordering.pizzaapp.service.CrustTypeService;

@RestController
@RequestMapping("/api/crust-type")
public class CrustTypeController {
	
	@Autowired
	private CrustTypeService crustTypeService;

	
	@GetMapping
	public Collection<CrustType> getCrustType() {
		return crustTypeService.getCrustType();
	}
}
