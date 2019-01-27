package com.revature.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.revature.entity.UserPosts;

@Repository
public interface UserPostsRepository extends JpaRepository<UserPosts, Integer> {
	List<UserPosts> findByUserid(int userid);
}
