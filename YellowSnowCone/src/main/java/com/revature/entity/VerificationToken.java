package com.revature.entity;

import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "verificationtokens")
public class VerificationToken {
	@Id
	@Column(name = "userid", updatable = false)
	private int userid;

	@Column(name = "vtoken")
	private String vtoken;
	
	
	public VerificationToken() {
		super();
	}
	public VerificationToken(int userid, String vtoken) {
		super();
		this.userid = userid;
		this.vtoken = vtoken;
		System.out.println("VerificationToken: " + this);
	}
	
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}

	public String getVtoken() {
		return vtoken;
	}
	public void setVtoken(String vtoken) {
		if (vtoken == null) {
			this.vtoken = UUID.randomUUID().toString();
		} else {
			this.vtoken = vtoken;
		}
	}

	/*
	public Users getUser() {
		return user;
	}
	public void setUser(Users user) {
		this.user = user;
	}
	*/
	
	@Override
	public String toString() {
		return "VerificationToken [userid=" + userid + ", "
				+ (vtoken != null ? "vtoken=" + vtoken + ", " : "")
				+ "]";
	}
}