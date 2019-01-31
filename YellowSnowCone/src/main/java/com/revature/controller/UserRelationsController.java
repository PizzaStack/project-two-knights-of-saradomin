package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.UserRelations;
import com.revature.repository.UserRelationsRepository;
import com.revature.repository.UsersRepository;

@RestController
public class UserRelationsController {
	@Autowired
	UsersRepository usersRepository;

	@Autowired
	UserRelationsRepository userRelationsRepository;

	@PostMapping("/relationsById")
	public List<UserRelations> getAllById(@RequestBody int id) {

		List<UserRelations> userRelationsList = userRelationsRepository.findAll();

		List<UserRelations> userRelationsList2 = new ArrayList<>();

		for (UserRelations userRelations : userRelationsList) {
			if (userRelations.getUserid1() == id || userRelations.getUserid2() == id) {
				userRelationsList2.add(userRelations);
			}
		}

		return userRelationsList2;
	}

	@PostMapping("/addFriend")
	public void addFriend(@RequestBody UserRelations userRelation) {
		System.out.println(userRelation);
		userRelationsRepository.save(userRelation);
	}
}