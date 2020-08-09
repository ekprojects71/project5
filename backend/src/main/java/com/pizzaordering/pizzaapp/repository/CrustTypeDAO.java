package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzaordering.pizzaapp.entity.CrustType;

@Component
public class CrustTypeDAO {
	
	@Autowired
	private CrustTypeRepository crustTypeRepository;
	
	public Collection<CrustType> getCrustType() {
		return crustTypeRepository.findAll();
	}
}
