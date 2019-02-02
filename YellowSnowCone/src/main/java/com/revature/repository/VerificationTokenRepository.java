package com.revature.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.VerificationToken;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Integer>{
	VerificationToken findByUserid(int userid);
	VerificationToken findByVtoken(String vtoken);
	boolean existsByUserid(int userid);
	boolean existsByVtoken(String vtoken);
}
