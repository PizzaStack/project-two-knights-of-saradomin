package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "usermessage")
public class UserMessage {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "messageid", updatable = false, nullable = false)
	private int messageid;
	private String textcontents;
	@Column(name = "userid1", insertable = false, updatable = false)
	private int userid1;
	@Column(name = "userid2", insertable = false, updatable = false)
	private int userid2;
	private int status;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid1")
	private Users user1;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid2")
	private Users user2;

	public int getMessageid() {
		return messageid;
	}

	public void setMessageid(int messageid) {
		this.messageid = messageid;
	}

	public String getTextcontents() {
		return textcontents;
	}

	public void setTextcontents(String textcontents) {
		this.textcontents = textcontents;
	}

	public int getUserid1() {
		return userid1;
	}

	public void setUserid1(int userid1) {
		this.userid1 = userid1;
	}

	public int getUserid2() {
		return userid2;
	}

	public void setUserid2(int userid2) {
		this.userid2 = userid2;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public Users getUser1() {
		return user1;
	}

	public void setUser1(Users user1) {
		this.user1 = user1;
	}

	public Users getUser2() {
		return user2;
	}

	public void setUser2(Users user2) {
		this.user2 = user2;
	}

	@Override
	public String toString() {
		return "UserMessage [messageid=" + messageid + ", textcontents=" + textcontents + ", userid1=" + userid1
				+ ", userid2=" + userid2 + ", status=" + status + ", user1=" + user1 + ", user2=" + user2 + "]";
	}

	public UserMessage(int messageid, String textcontents, int userid1, int userid2, int status, Users user1,
			Users user2) {
		super();
		this.messageid = messageid;
		this.textcontents = textcontents;
		this.userid1 = userid1;
		this.userid2 = userid2;
		this.status = status;
		this.user1 = user1;
		this.user2 = user2;
	}

	public UserMessage() {
		super();
	}
}