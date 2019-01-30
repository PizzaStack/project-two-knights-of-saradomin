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
	public List<UserMessage> getAll(){
		return messageRepository.findAll();
	}
	
	@PostMapping("/messagesById")
	public List<UserMessage> getAllById(
			@RequestBody
			int id) {
		
		List<UserMessage> messageList = (List<UserMessage>) messageRepository.findAll();
		
		List<UserMessage> messageList2 = new ArrayList<>();
		
		for(UserMessage userMessage : messageList) {
			if(userMessage.getUserid1() == id || userMessage.getUserid2() == id) {
				messageList2.add(userMessage);
			}
		}
		
		return messageList2;
	}
	
	
	
	@PostMapping("/addMessage")
	public void addMessage(
			@RequestBody
			UserMessage userMessage
			) {
			System.out.println(userMessage);
			messageRepository.save(userMessage);
	}
	
//	@PostMapping("/addMessage")
//	public void addMessage(
//			@RequestBody
//			String userMessage
//			) {
//		int userId1 = 0;
//		int userId2 = 0;
//		String textContents = "";
//		String userMessageTrimmed = "";
//		
//		userId1 = Integer.parseInt(userMessage.substring(0,userMessage.indexOf(";")));
//		userMessageTrimmed = userMessage.substring(userMessage.indexOf(";") + 1,userMessage.length());
//		userId2 = Integer.parseInt(userMessageTrimmed.substring(0,userMessageTrimmed.indexOf(";")));
//		textContents = userMessageTrimmed.substring(userMessageTrimmed.indexOf(";") + 1,userMessageTrimmed.length());
//		System.out.println(userId1 + " " + userId2 + " " + textContents);
//
//	}
	
	
}
