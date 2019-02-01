package com.revature.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	
	@Transactional
	@DeleteMapping("/removeinteractionsbyid/{postid}/{userid}")
	public void deleteInteraction(@PathVariable("postid") String postids, @PathVariable("userid") String userids) {
		int postid = Integer.parseInt(postids);
		int userid = Integer.parseInt(userids);
		dao.deleteByPostidAndUserid(postid, userid);
	}
}
