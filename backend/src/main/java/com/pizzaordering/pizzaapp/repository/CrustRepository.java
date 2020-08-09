package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.pizzaordering.pizzaapp.entity.Crust;

public interface CrustRepository extends MongoRepository<Crust, String> {

}
