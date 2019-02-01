package com.revature.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.SharedEntityManagerCreator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.Users;
import com.revature.repository.UsersRepository;

@RestController
@CrossOrigin(value="*", origins="*")
public class UserController {
	@Autowired
	UsersRepository repository;
	
	Logger logger = LogManager.getLogger(UserController.class);
	@Autowired
	EmailController emailController;
	
	
	@GetMapping("/users")
	public List<Users> getAll(){
		//logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return repository.findAll();
	}
	
	@SuppressWarnings("unused")
	@PostMapping("/authenticate")
	@ResponseBody
	public Users login(@RequestBody Users user) {
		logger.info("User = " + user);
		user = repository.findByEmailAndPassword(user.getEmail(), user.getPassword());

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
	
	/*
	@SuppressWarnings("unused")
	@PostMapping("/register")
	@ResponseBody
	public synchronized Users register(@RequestBody Users user) {
		user.setUserid(null);
		logger.info("User = " + user);
		
		
		Users lastUser = repository.findTopByOrderByUseridDesc();
		user.setUserid(lastUser.getUserid()+1);
		user = repository.save(user);
		System.out.println("newUserID = " + user.getUserid());

		if (user != null) {
			//emailController.sendRegistrationEmail();
			logger.info("NewUser = " + user);
			return user;
		}
		else {
			user = null;
			logger.info("NewUser = " + user);
		}
		return user;
	}
	*/

	@SuppressWarnings("unused")
	@PostMapping("/register")
	@ResponseBody
	public synchronized Users register(@RequestBody Users user) {
		/*
		Users lastUser = repository.findTopByOrderByUseridDesc();
		logger.info("lastUser = " + lastUser);
		Users newUser = new Users();
		
		//newUser.setUserid(lastUser.getUserid()+1);
		newUser.setUserid(null);
		//logger.info("newUser.userId = " + newUser.getUserid());
		newUser.setFirstname(user.getFirstname());
		newUser.setLastname(user.getLastname());
		newUser.setEmail(user.getEmail());
		newUser.setPassword(user.getPassword());
		
		if (repository.findByEmailAndPassword(newUser.getEmail(), newUser.getPassword()) == null) {
			System.out.println("newUser was not found!");
		} else {
			System.out.println("newUser was found!");
		}
		*/
		Users newUser = repository.save(user);
		repository.flush();

		if (newUser != null) {
			try {
				emailController.sendEmail(newUser);
			} catch (Exception e) {
				logger.info("Unable To Send Verification Email");
				e.printStackTrace();
				return null;
			}
			logger.info("newUser = " + newUser);
			return newUser;
		}
		else {
			logger.info("user = " + user);
			user = null;
		}
		return user;
	}
	
	@GetMapping("users/{userId}")
	public String redirectToUserView(@RequestParam int userId) {
		return "redirect:/mainview";
	}

	@GetMapping("users/{token}")
	public String verifyUser(@RequestParam String token) {
		return null;
	}
	
}
