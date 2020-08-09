package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pizzaordering.pizzaapp.entity.Topping;

public interface ToppingRepository extends MongoRepository<Topping, String> {

}
