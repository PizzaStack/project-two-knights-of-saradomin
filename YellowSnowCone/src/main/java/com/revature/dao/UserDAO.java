package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.User;

@Repository
public interface UserDAO extends JpaRepository<User, Integer>{
	User findByUserId(int id);
	User findByEmailAndPassword(String email, String password);
}
