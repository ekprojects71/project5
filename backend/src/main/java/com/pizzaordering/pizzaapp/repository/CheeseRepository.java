package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.pizzaordering.pizzaapp.entity.Cheese;


public interface CheeseRepository extends MongoRepository<Cheese, String> {

}
