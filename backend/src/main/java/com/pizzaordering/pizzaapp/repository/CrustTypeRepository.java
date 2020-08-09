package com.pizzaordering.pizzaapp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.pizzaordering.pizzaapp.entity.CrustType;


public interface CrustTypeRepository extends MongoRepository<CrustType, String> {

}
