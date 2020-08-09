package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.Crust;
import com.pizzaordering.pizzaapp.repository.CrustDAO;

@Service
public class CrustService {

	@Autowired
	private CrustDAO crustDAO;
	
	public Collection<Crust> getCrust() {
		return crustDAO.getCrust();
	}
}
