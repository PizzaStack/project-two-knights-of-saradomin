/*
package com.revature.service;

import java.util.Arrays;
import java.util.Collection;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;

import org.springframework.security.core.SpringSecurityMessageSource;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.revature.DTO.UsersDTO;
import com.revature.entity.Users;
import com.revature.repository.UsersRepository;

@Service
public class UserService implements UserServiceInterface {

	@Autowired
	private UsersRepository userRepository;

	@Autowired
	private TokenDAO tokenDAO;

	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	@Transactional
	public Users registerUser(UsersDTO usersDto) {

		Users user = new Users();
		user.setEmail(usersDto.getEmail());
		user.setFirstname(usersDto.getFirstname());
		user.setLastname(usersDto.getLastname());
		String hashedPassword = passwordEncoder.encode(usersDto.getPassword());
		user.setPassword(hashedPassword);
		user.setEnabled(usersDto.isEnabled());

		userRepository.save(user);
		return user;
	}

	@Override
	@Transactional
	public Users findByEmail(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public Users findByUsernameAndPassword(String email, String password) {
		return userRepository.findByEmailAndPassword(email, password);
	}

	@Transactional
	@Override
	public Users loginUser(UsersDTO userDTO) {
		return userRepository.loginUser(userDTO);
	}

	@Transactional
	@Override
	public UserDetails loadUserByUsername(String email){

		Users user = userRepository.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("Invalid username or password.");
		}
		try {
			if (user.isEnabled() != true) {
				throw new UsernameNotFoundException("Please enable your account.");
			}
		} catch (UsernameNotFoundException e) {
			e.printStackTrace();
		}

		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
				user.isEnabled(), true, true, true, mapRolesToAuthorities(user.getRoles()));
	}

	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles) {
		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRolename())).collect(Collectors.toList());
	}

	@Override
	public void createVerificationToken(Users user, String token) {
		VerificationToken newUserToken = new VerificationToken(token, user);
		tokenDAO.save(newUserToken);
	}

	@Override
	@Transactional
	public VerificationToken getVerificationToken(String verificationToken) {
		return userRepository.findByToken(verificationToken);
	}

	@Override
	@Transactional
	public void enableRegisteredUser(User user) {
		userRepository.save(user);
	}

}
*/