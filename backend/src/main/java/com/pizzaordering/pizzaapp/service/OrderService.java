package com.pizzaordering.pizzaapp.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pizzaordering.pizzaapp.entity.Order;
import com.pizzaordering.pizzaapp.repository.OrderDAO;

@Service
public class OrderService {
	
	@Autowired
	public OrderDAO orderDAO;
	
	
	//get orders by email
	public Collection<Order> getOrders(String email) {
		return orderDAO.getOrder(email);
	}
	
	//post order to DB
	public Order createOrder(Order order) {
		return orderDAO.createOrder(order);
	}
	
	//delete order from DB
	public Optional<Order> deleteOrder(String id) {
		return orderDAO.deleteOrder(id);
	}
}
