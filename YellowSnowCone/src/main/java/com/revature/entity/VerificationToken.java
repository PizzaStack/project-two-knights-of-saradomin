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

	/* token is a keyword in postgres. Changing 'token to 'vtoken' 
	   for now, in case it's the reason persistence is not working */
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
	
	@Override
	public String toString() {
		return "VerificationToken [userid=" + userid + ", "
				+ (vtoken != null ? "vtoken=" + vtoken + ", " : "")
				+ "]";
	}
}