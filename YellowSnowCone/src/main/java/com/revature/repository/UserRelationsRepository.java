package com.revature.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.revature.entity.UserRelations;

public interface UserRelationsRepository extends JpaRepository<UserRelations, Integer> {

}