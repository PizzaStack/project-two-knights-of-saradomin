package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.Users;
import com.revature.repository.UsersRepository;

@RestController
public class UsersController {
	@Autowired
	UsersRepository repository;
	
	@GetMapping("/users")
	public List<Users> getAll() {
		return repository.findAll();
	}
	
	@GetMapping("/users/{firstname}")
	public Users findByfirstname(@PathVariable("firstname") String firstname) {
		return repository.findByfirstname(firstname);
	}
}
