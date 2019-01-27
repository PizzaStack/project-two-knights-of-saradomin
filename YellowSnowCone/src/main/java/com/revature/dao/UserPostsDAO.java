package com.revature.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.UserPosts;

@Repository
public interface UserPostsDAO extends JpaRepository<UserPosts, Integer> {

	List<UserPosts> findByUserId(int userid);

}
