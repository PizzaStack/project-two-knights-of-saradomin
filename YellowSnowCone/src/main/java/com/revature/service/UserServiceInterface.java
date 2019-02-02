/*
package com.revature.service;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.revature.DTO.UsersDTO;
import com.revature.entity.Users;

@Service
public interface UserServiceInterface extends UserDetailsService {
	public Users registerUser(UsersDTO userDto);

	public Users findByUsername(String username);

	public Users loginUser(UsersDTO userDTO);

	public Users findByUsernameAndPassword(String username, String password);

	public void createVerificationToken(Users user, String token);

	public VerificationToken getVerificationToken(String verificationToken);

	public void enableRegisteredUser(Users user);
}
*/