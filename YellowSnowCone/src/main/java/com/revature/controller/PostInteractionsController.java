package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
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
	public PostInteractions addInteraction(@RequestBody PostInteractions pi, Errors errors) {
		if (errors.hasErrors())
			return null;

		dao.save(pi);
		return pi;
	}

	@GetMapping("/getinteraction")
	public List<PostInteractions> getAll() {
		return dao.findAll();
	}

	@PostMapping("/getinteractionbyid")
	public List<PostInteractions> findByUserId(@RequestBody int userid) {
		return dao.findByUserid(userid);
	}
}
