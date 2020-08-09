package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzaordering.pizzaapp.entity.Crust;

@Component
public class CrustDAO {

	@Autowired
	private CrustRepository crustRepository;
	
	public Collection<Crust> getCrust() {
		return crustRepository.findAll();
	}
}
