package com.revature.controller;

<<<<<<< HEAD
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
=======
>>>>>>> ccec612d378222e5b07415190037ec4ab9472627
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
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
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

    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserController(BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

	@GetMapping("/users")
	public List<Users> getAll() {
		// logger.info("FINDING ALL USERS");
		System.out.println("FINDING ALL USERS");
		return userRepository.findAll();
	}

	@PostMapping("/authenticate")
	@ResponseBody
	public Users login(@RequestBody Users user) {
		logger.info("User = " + user);
		Users storedUser = userRepository.findByEmail(user.getEmail());
		if (storedUser != null && bCryptPasswordEncoder.matches(user.getPassword(), storedUser.getPassword())) {
			user = storedUser;
			logger.info("loggedInUser (success) = " + user);
			return user;
		} else {
			user = null;
			logger.info("loggedInUser (failure) = " + user);
		}
		return user;
	}

	// TODO: No System.out
	@SuppressWarnings("unused") // Strangely, sometimes get errors without this... #toString()?
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

	// TODO: No System.out
	@SuppressWarnings("unused") // Strangely, sometimes get errors without this... #toString()?
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
				    System.out.println("verificationToken DOES NOT MATCHE Userid");
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

	@GetMapping("users/{userId}")
	public String redirectToUserView(@RequestParam int userId) {
		return "redirect:/mainview";
	}
}
