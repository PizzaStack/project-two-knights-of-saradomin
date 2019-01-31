package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class Users {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "userid", updatable = false, nullable = false)
	private Integer userid;
	private String email;
	private String password;
	private String firstname;
	private String lastname;
	private String profilepicturepath;
	private boolean enabled;
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
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
	public String getProfilepicturepath() {
		return profilepicturepath;
	}
	public void setProfilepicturepath(String profilepicturepath) {
		this.profilepicturepath = profilepicturepath;
	}
	public boolean getEnabled() {
		return enabled;
	}
	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	@Override
	public String toString() {
		return "Users [userid=" + userid + ", email=" + email + ", password=" + password + ", firstname=" + firstname
				+ ", lastname=" + lastname + ", profilepicturepath=" + profilepicturepath + ", enabled=" + enabled + "]";
	}
	public Users(int userid, String email, String password, String firstname, String lastname,
			String profilepicturepath, boolean enabled) {
		super();
		this.userid = userid;
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.profilepicturepath = profilepicturepath;
		this.enabled = enabled;
	}
	/*
	public Users(String email, String password, String firstname, String lastname,
			String profilepicturepath, boolean enabled) {
		super();
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.profilepicturepath = profilepicturepath;
		this.enabled = enabled;
	}
	*/
	public Users() {
		super();
	}
	
}
