package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pizzaordering.pizzaapp.entity.Sauce;

public interface SauceRepository extends MongoRepository<Sauce, String> {

}
