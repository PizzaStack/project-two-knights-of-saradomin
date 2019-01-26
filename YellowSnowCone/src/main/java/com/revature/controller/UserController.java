package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.UserDAO;
import com.revature.entity.User;

@RestController
public class UserController {
	@Autowired
	UserDAO userDAO;
	
	@GetMapping("/users")
	public List<User> getAll(){
		return userDAO.findAll();
	}
	
	@PostMapping("/login")
	public boolean login() {
		return true;
	}
	/*
	@PostMapping("/add")
	public Artist add(@RequestBody Artist a) {
		artistDAO.save(a);
		return a;
	}
	
	@GetMapping("/artists/{name}")
	public Artist findByName(@PathVariable("name") String name) {
		return artistDAO.findByName(name);
	}
	
	@DeleteMapping("/artists/{id}")
	public void deleteById(@PathVariable("id") int id) {
		artistDAO.deleteById(id);
	}
	
	@GetMapping("/artists/{min}/{max}")
	public List<Artist> getBetweenIds(@PathVariable("min") int min, @PathVariable("max") int max){
		return artistDAO.findByIdBetween(min, max);
	}
	*/
}
