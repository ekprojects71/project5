package com.pizzaordering.pizzaapp.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import com.pizzaordering.pizzaapp.entity.Order;


public interface OrderRepository extends MongoRepository<Order, String> {

	//queries
	@Query("{ 'email' : ?0 }")
	List<Order> findOrdersByEmail(String email);
}
