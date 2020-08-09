package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzaordering.pizzaapp.entity.Sauce;

@Component
public class SauceDAO {

	@Autowired
	private SauceRepository sauceRepository;
	
	public Collection<Sauce> getSauce() {
		return sauceRepository.findAll();
	}
}
