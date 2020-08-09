package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.Sauce;
import com.pizzaordering.pizzaapp.repository.SauceDAO;

@Service
public class SauceService {

	@Autowired
	private SauceDAO sauceDAO;
	
	public Collection<Sauce> getSauce() {
		return sauceDAO.getSauce();
	}
}
