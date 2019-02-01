package com.revature.controller;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.jpa.SharedEntityManagerCreator;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.revature.entity.Users;
import com.revature.entity.VerificationToken;
import com.revature.repository.UsersRepository;
import com.revature.repository.VerificationTokenRepository;

@RestController
@CrossOrigin(value="*", origins="*")
public class UserController {
	@Autowired
	UsersRepository userRepository;
	@Autowired
	VerificationTokenRepository tokenRepository;
	
	Logger logger = LogManager.getLogger(UserController.class);
	@Autowired
	EmailController emailController;
	
	
	@GetMapping("/users")
	public List<Users> getAll(){
		//logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return userRepository.findAll();
	}
	
	@SuppressWarnings("unused")
	@PostMapping("/authenticate")
	@ResponseBody
	public Users login(@RequestBody Users user) {
		logger.info("User = " + user);
		user = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
		
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

	@SuppressWarnings("unused")
	@PostMapping("/register")
	@ResponseBody
	public synchronized Users register(@RequestBody Users user) {
		Users newUser = userRepository.save(user);
		userRepository.flush();

		if (newUser != null) {
			try {
		        String vtoken = UUID.randomUUID().toString();
		        VerificationToken verificationToken = new VerificationToken(newUser.getUserid(), vtoken);
		        newUser.setVerificationToken(verificationToken);
		        newUser = userRepository.save(newUser);
		        //tokenRepository.save(verificationToken);
		        System.out.println("verificationToken Persisted");
				emailController.sendEmail(newUser, verificationToken);
			} catch (Exception e) {
				logger.info("Unable To Send Verification Email");
				e.printStackTrace();
				userRepository.deleteById(newUser.getUserid());
				return null;
			}
			logger.info("newUser = " + newUser);
			return newUser;
		}
		else {
			logger.info("user = " + user);
			user = null;
			System.out.println("verificationToken Not Persisted");
		}
		return user;
	}

	@GetMapping("welcomeview/{id}/{token}")
	public void verifyUser(@RequestParam int userid, @RequestParam String vtoken) {
		if (tokenRepository.findByUseridAndVtoken(userid, vtoken)){
		   Users user = userRepository.findByUserid(userid);
		   user.setEnabled(true);
		   VerificationToken verificationToken = tokenRepository.getByUseridAndVtoken(user.getUserid(), vtoken);
		} else {
			
		}
		//return new ModelAndView("redirect:" + "http://localhost:8080/welcomeview/success");
	}
}
