package com.revature.controller;

import java.util.List;

import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.UserDAO;
import com.revature.entity.User;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"})
public class UserController {
	@Autowired
	UserDAO userDAO;
	Logger logger = LogManager.getLogger(UserController.class);
	
	@GetMapping("/users")
	public List<User> getAll(){
		//logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return userDAO.findAll();
	}
	
	@PostMapping("/authenticate")
	@ResponseBody
	public User login(@RequestBody User user) {
		user = userDAO.findByEmailAndPassword(user.getEmail(), user.getPassword());
		if (user != null) {
			//logger.info("loggedInUser = " + user);
			return user;
		}
		else {
			user = new User(-1, "null", "null", "null", "null", "null");	
			logger.info("loggedInUser = " + user);
			return user;
		}
	}
	
	/*
	@RequestMapping(value = "/authenticate", method = RequestMethod.POST, 
			 consumes = "application/json")
	@ResponseBody
	public User getUser(@RequestBody String email, @RequestBody String password) {
		//here request body contains User POJO object's payload (JSON object)

		//You are getting username from JSON, 
		//so you need to update your call to findOne method
		User result = userDAO.findByEmail(email);
		System.out.println("RESULT: " + result);
		return result;
	}
	*/
	  
	/*
	@PostMapping("/login/{email}/{password}")
	public boolean login(@PathVariable("email") String email, @PathVariable("password") String password) {
		User user = userDAO.findByEmail(email);
		if (user != null) {
			if (user.getPassword() == password) {
				System.out.println("User Should Be Logged In.");
				return true;
			}
			return false;
		} else {
			System.out.println("Error. User Not Found!");
			return false;
		}
	}
	*/
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
