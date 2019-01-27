package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entity.UserMessage;
import com.revature.entity.Users;

public interface UserMessageRepository extends JpaRepository<UserMessage, Integer>{

}
