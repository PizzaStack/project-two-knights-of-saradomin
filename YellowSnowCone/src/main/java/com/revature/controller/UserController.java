package com.revature.controller;

import java.util.List;
import java.util.UUID;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

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

	@Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

	@GetMapping("/users")
	public List<Users> getAll() {
		return userRepository.findAll();
	}

	@PostMapping("/authenticate")
	@ResponseBody
	public Users login(@RequestBody Users user) {
		logger.info("User = " + user);
		Users storedUser = userRepository.findByEmail(user.getEmail());
		if (storedUser != null && bCryptPasswordEncoder.matches(user.getPassword(), storedUser.getPassword())) {
			user = storedUser;
			logger.info("loggedInUser (authenticate-success) = " + user);
			return user;
		} else {
			user = null;
			logger.info("loggedInUser (authenticate-failure) = " + user);
		}
		return user;
	}

	@PostMapping("/register")
	@ResponseBody
	public synchronized Users register(@RequestBody Users user) {
		if (userRepository.existsByEmail(user.getEmail())) {
			System.out.println("Duplicate Email");
			return null;
		}
		Users newUser = userRepository.save(user);
		userRepository.flush();

		if (newUser != null) {
			try {
		        String vtoken = UUID.randomUUID().toString();
		        VerificationToken verificationToken = new VerificationToken(newUser.getUserid(), vtoken);
		        newUser.setVerificationToken(verificationToken);
		        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		        newUser = userRepository.save(newUser);
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
	
	@PostMapping("validate/{id}/{vtoken}")
	public Users verifyUser(@PathVariable String id, @PathVariable String vtoken) {
		Users user = null;
		int userid = Integer.parseInt(id);
		if (userRepository.existsById(userid)){
			System.out.println("User Was Found");
		    user = userRepository.findByUserid(userid);
		    if (tokenRepository.existsById(userid)) {
		    	System.out.println("Verification Token Was Found");
			    VerificationToken verificationToken = tokenRepository.findByUserid(userid);
			    if (verificationToken.getVtoken().equals(vtoken)) {
				    System.out.println("verificationToken MATCHES Userid");
				    user.setEnabled(true);
				    user = userRepository.save(user);
				    userRepository.flush();
				    return user;
			    } else {
				    System.out.println("verificationToken DOES NOT MATCH Userid");
			    }
			    user = null;
		    }
		} else {
			System.out.println("no userid or verification token found!");
			if (user != null) System.out.println("user: " + user);
			if (vtoken != null) System.out.println("vtoken: " + vtoken);
			user = null;
		}
		return user;
	}
	
	@PostMapping("/updateInfo")
	@ResponseBody
	public Users updateInfo(@RequestBody Users user) {
		logger.info("User = " + user);
		Users storedUser = userRepository.findByEmail(user.getEmail());
		if (storedUser != null) {
			System.out.println("user: " + user);
			System.out.println("storedUser: " + storedUser);
			storedUser.setFirstname(user.getFirstname());
			storedUser.setLastname(user.getLastname());
			storedUser.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			System.out.println("new user info: " + storedUser);
			return userRepository.save(storedUser);
		} else {
			user = null;
			logger.info("loggedInUser (update-failure) = " + user);
		}
		return user;
	}
}
