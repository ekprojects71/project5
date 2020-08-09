package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.pizzaordering.pizzaapp.entity.Beverage;


public interface BeverageRepository extends MongoRepository<Beverage, String> {
	
}
