package com.revature.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.UserDAO;
import com.revature.entity.User;
import com.revature.entity.Users;
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
			return user;
		}
		else {
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
