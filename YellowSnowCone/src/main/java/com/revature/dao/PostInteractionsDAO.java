package com.revature.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.PostInteractions;

@Repository
public interface PostInteractionsDAO extends JpaRepository<PostInteractions, Integer>{

}
