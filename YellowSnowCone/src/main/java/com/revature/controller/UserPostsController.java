package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.UserMessage;
import com.revature.entity.UserPosts;
import com.revature.repository.UserPostsRepository;

@RestController
public class UserPostsController {
	
	@Autowired
	UserPostsRepository dao;
	
	@GetMapping("/userposts")
	public List<UserPosts> getAll() {
		return dao.findAll();
	}
	
	@GetMapping("/userposts/{userid}")
	public List<UserPosts> findByUserId(@PathVariable("userid") int userid) {
		return dao.findByUserid(userid);
	}
	
	@PostMapping("/userpost/add/{userid}")
	public List<UserPosts> getAllById(
			@RequestBody
			int id) {
		List<UserPosts> userpost = (List<UserPosts>) dao.findAll();
		return userpost;
		
	}
	
}
