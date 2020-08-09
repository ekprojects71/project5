package com.pizzaordering.pizzaapp.controller;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pizzaordering.pizzaapp.entity.Order;
import com.pizzaordering.pizzaapp.service.OrderService;


@RestController
@RequestMapping("/api/orders")
public class OrderController {
	
	@Autowired
	private OrderService orderService;
	
	//GET requests
	@GetMapping(value = "/{email}")
	public Collection<Order> getOrders(@PathVariable("email") String email) {
		return orderService.getOrders(email);
	}
	
	//POST requests
	@PostMapping
	public Order postOrder(@RequestBody Order order) {
		return orderService.createOrder(order);
	}
	
	//DELETE requests
	@DeleteMapping(value = "/{id}")
	public Optional<Order> deleteOrder(@PathVariable("id") String id) {
		return orderService.deleteOrder(id);
	}
}
