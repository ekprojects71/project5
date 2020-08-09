package com.pizzaordering.pizzaapp.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.pizzaordering.pizzaapp.entity.Order;

@Component
public class OrderDAO {

	@Autowired
	private OrderRepository orderRepository;
	
	
	//get order by email
	public Collection<Order> getOrder(String email) {
		return orderRepository.findOrdersByEmail(email);
	}
	
	//create new order
	public Order createOrder(Order order) {
		return orderRepository.insert(order);
	}
	
	//delete existing order by id (cancel)
	public Optional<Order> deleteOrder(String id) {
		Optional<Order> order = orderRepository.findById(id);
		order.ifPresent(o -> orderRepository.delete(o));
		
		return order;
	}
}
