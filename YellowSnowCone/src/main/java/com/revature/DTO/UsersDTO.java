/*
package com.revature.DTO;

import javax.persistence.Column;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class UsersDTO {
	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String email;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String password;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String firstname;

	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String lastname;
	
	@NotNull(message = "is required")
	@Size(min = 1, message = "is required")
	private String profilePicturePath;
	
	@NotNull(message = "is required")
	@Column(name="enabled")
	private boolean enabled;


	public String getEmail() {
		return email;
	}

	public void setEmail(String username) {
		this.email = username;
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

	public void setFirstName(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastName(String lastname) {
		this.lastname = lastname;
	}
	
	public String getProfilePicturePath() {
		return profilePicturePath;
	}

	public void setProfilePicturePath(String profilePicturePath) {
		this.profilePicturePath = profilePicturePath;
	}

	public boolean isEnabled() {
		return enabled;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}

}
*/