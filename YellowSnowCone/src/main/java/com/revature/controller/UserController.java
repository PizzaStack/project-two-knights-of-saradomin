package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.UserDAO;
import com.revature.entity.User;
import com.revature.repository.UsersRepository;

@RestController
@CrossOrigin(origins = {"http://localhost:8080", "http://localhost:4200"})
public class UserController {
	@Autowired
	UserDAO userDAO;
	UsersRepository repository;
	Logger logger = LogManager.getLogger(UserController.class);
	
	@GetMapping("/users")
	public List<User> getAll(){
		//logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return userDAO.findAll();
	}
	
	@SuppressWarnings("unused")
	@PostMapping("/authenticate")
	@ResponseBody
	public User login(@RequestBody User user) {
		user = userDAO.findByEmailAndPassword(user.getEmail(), user.getPassword());

		if (user != null) {
			logger.info("loggedInUser = " + user);
		}
		else {
			user = new User(-1, "null", "null", "null", "null", "null");	
			logger.info("loggedInUser = " + user);
		}
		return user;
	}
	
	@GetMapping("users/{userId}")
	public String redirectToUserView(@RequestParam int userId) {
		return "redirect:/mainview";
	}
	
	@PostMapping("/userByName")
	public List<User> getUserByName(
			@RequestBody
			String name) {
		
		List<User> users = new ArrayList<>();
		
		if(name.contains(" ")) {
			List<User> usersByFirstName = repository.findByfirstname(name);
			List<User> usersByLastName = repository.findBylastname(name);
			
			for(User user : usersByFirstName) {
				users.add(user);
			}
			
			for(User user : usersByLastName) {
				users.add(user);
			}
		} else {
			List<User> usersByFirstName = repository.findByfirstname(name);
			
			for(User user : usersByFirstName) {
				users.add(user);
			}
		}
			
		return users;
		
	}
	
}
