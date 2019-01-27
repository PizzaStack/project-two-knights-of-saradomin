package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

/** @SCHEMA:
	create table users (
		userid serial primary key,
		email varchar(75) unique not null,
		password varchar(75) not null,
		firstname varchar(50) not null,
		lastname varchar(50) not null,
		profilepicturepath varchar(200) null
	);
**/

@Entity
@Table(name="users")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid", updatable = false, nullable = false)
	private int userId;
	
	@Column(name = "email", unique = true, nullable = false)
	private String email;
	@Column(name = "password", unique = false, nullable = false)
	private String password;
	@Column(name = "firstname", unique = false, nullable = false)
	private String firstname;
	@Column(name = "lastname", unique = false, nullable = false)
	private String lastname;
	@Column(name = "profilepicturepath", unique = false, nullable = true)
	private String profilePicturePath = null;
	
	public User() {
		super();
	}
	public User(int userId, String email, String password, String firstname, String lastname, String profilePicturePath) {
		super();
		this.userId = userId;
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.profilePicturePath = profilePicturePath;
	}
	
	@Override
	public String toString() {
		return "Users [userId=" + userId + ", " + (email != null ? "email=" + email + ", " : "")
				+ (password != null ? "password=" + password + ", " : "")
				+ (firstname != null ? "firstname=" + firstname + ", " : "")
				+ (lastname != null ? "lastname=" + lastname + ", " : "")
				+ (profilePicturePath != null ? "profilePicturePath=" + profilePicturePath : "") + "]";
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getProfilePicturePath() {
		return profilePicturePath;
	}
	public void setProfilePicturePath(String profilePicturePath) {
		this.profilePicturePath = profilePicturePath;
	}
}
