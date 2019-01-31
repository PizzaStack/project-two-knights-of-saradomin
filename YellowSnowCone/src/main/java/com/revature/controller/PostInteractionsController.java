package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.PostInteractions;
import com.revature.repository.PostInteractionsRepository;

@RestController
public class PostInteractionsController {

	@Autowired
	PostInteractionsRepository dao;

	@PostMapping("/addinteraction")
	public void addInteraction(@RequestBody PostInteractions pi) {
		if (pi != null) {
			dao.save(pi);
		}
	}

	@GetMapping("/getinteraction")
	public List<PostInteractions> getAll() {
		return dao.findAll();
	}

	@PostMapping("/getinteractionsbyid")
	public List<PostInteractions> findByUserId(@RequestBody int userid) {
		return dao.findByUserid(userid);
	}
}
