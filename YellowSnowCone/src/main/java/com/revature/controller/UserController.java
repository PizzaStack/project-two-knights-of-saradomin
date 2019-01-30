package com.revature.controller;

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

import com.revature.entity.Users;
import com.revature.repository.UsersRepository;

@RestController
@CrossOrigin(origins = { "http://localhost:8080", "http://localhost:4200" })
public class UserController {
	@Autowired
	UsersRepository repository;
	Logger logger = LogManager.getLogger(UserController.class);

	@GetMapping("/users")
	public List<Users> getAll() {
		// logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return repository.findAll();
	}

	@PostMapping("/authenticate")
	@ResponseBody
	public Users login(@RequestBody Users user) {
		logger.info("User = " + user);
		user = repository.findByEmailAndPassword(user.getEmail(), user.getPassword());

		if (user != null) {
			logger.info("loggedInUser = " + user);
			return user;
		} else {
			user = null;
			logger.info("loggedInUser = " + user);
		}
		return user;
	}

	@GetMapping("users/{userId}")
	public String redirectToUserView(@RequestParam int userId) {
		return "redirect:/mainview";
	}

}
