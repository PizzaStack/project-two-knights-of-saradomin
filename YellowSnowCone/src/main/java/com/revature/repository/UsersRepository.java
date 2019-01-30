package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
	Users findByfirstname(String firstname);
	Users findByUserid(int id);
	Users findByEmailAndPassword(String email, String password);
}
