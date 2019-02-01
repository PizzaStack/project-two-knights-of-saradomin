package com.revature.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.VerificationToken;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Integer>{
	boolean findByUseridAndVtoken(int userid, String vtoken);
	VerificationToken getByUseridAndVtoken(int userid, String vtoken);
}
