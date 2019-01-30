package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.PostInteractions;

@Repository
public interface PostInteractionsRepository extends JpaRepository<PostInteractions, Integer>{

	List<PostInteractions> findByUserid(int userid);

}
