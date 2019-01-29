package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import com.revature.entity.UserPosts;
import com.revature.repository.UserPostsRepository;

@RestController
public class UserPostsController {
	
	@Autowired
	UserPostsRepository dao;
	
	@GetMapping("/allposts")
	public List<UserPosts> getAll() {
		return dao.findAll();
	}
	
	@PostMapping("/userposts")
	public List<UserPosts> findByUserId(@RequestBody int userid) {
		return dao.findByUserid(userid);
	}
	
	@PostMapping("/userposts/add")
	public void addPost(@RequestBody UserPosts userposts) {
		if (userposts != null && !dao.existsById(userposts.getPostid()))
			System.out.println(userposts);
			dao.save(userposts);
		
	}
	
}
