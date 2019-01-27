package com.revature.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.Errors;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.dao.PostInteractionsDAO;
import com.revature.entity.PostInteractions;

@RestController
public class PostInteractionsController {

	@Autowired
	PostInteractionsDAO dao;

	@PostMapping("/postinteraction")
	public PostInteractions addInteraction(@RequestBody @Valid PostInteractions pi, Errors errors) {
		if (errors.hasErrors())
			return null;

		dao.save(pi);
		return pi;
	}
}
