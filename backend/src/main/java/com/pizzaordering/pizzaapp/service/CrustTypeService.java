package com.pizzaordering.pizzaapp.service;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.CrustType;
import com.pizzaordering.pizzaapp.repository.CrustTypeDAO;

@Service
public class CrustTypeService {
	
	@Autowired
	private CrustTypeDAO crustTypeDAO;
	
	public Collection<CrustType> getCrustType() {
		return crustTypeDAO.getCrustType();
	}

}
