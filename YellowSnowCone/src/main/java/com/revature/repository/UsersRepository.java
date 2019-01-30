package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.User;

@Repository
public interface UsersRepository extends JpaRepository<User, Integer> {
	List<User> findByfirstname(String firstname);
	List<User> findBylastname(String lastname);
	
	
}
