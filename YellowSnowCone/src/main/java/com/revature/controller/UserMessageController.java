package com.revature.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.entity.UserMessage;
import com.revature.repository.UserMessageRepository;
import com.revature.repository.UsersRepository;

@RestController
public class UserMessageController {
	@Autowired
	UsersRepository userRepository;
	@Autowired
	UserMessageRepository messageRepository;

	@GetMapping("/messages")
	public List<UserMessage> getAll() {
		return messageRepository.findAll();
	}

	@PostMapping("/messagesById")
	public List<UserMessage> getAllById(@RequestBody int id) {

		List<UserMessage> messageList = messageRepository.findAll();

		List<UserMessage> messageList2 = new ArrayList<>();

		for (UserMessage userMessage : messageList) {
			if (userMessage.getUserid1() == id || userMessage.getUserid2() == id) {
				messageList2.add(userMessage);
			}
		}
		return messageList2;
	}

	@PostMapping("/addMessage")
	public void addMessage(@RequestBody UserMessage userMessage) {
		System.out.println(userMessage);
		messageRepository.save(userMessage);
	}

}