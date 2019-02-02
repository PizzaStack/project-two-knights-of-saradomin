package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "postinteractions")
public class PostInteractions {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "interactionid")
	private int interactionid;

	@NotNull
	@Column(name = "postid")
	private int postid;

	@NotNull
	@Column(name = "userid")
	private int userid;

	@NotNull
	@Column(name = "type")
	private short type;

	public PostInteractions(int interactionid, int postid, int userid, short type) {
		super();
		this.interactionid = interactionid;
		this.postid = postid;
		this.userid = userid;
		this.type = type;
	}

	public PostInteractions() {
		super();
	}

	public int getInteractionid() {
		return interactionid;
	}

	public void setInteractionid(int interactionid) {
		this.interactionid = interactionid;
	}

	public int getPostid() {
		return postid;
	}

	public void setPostid(int postid) {
		this.postid = postid;
	}

	public int getUserid() {
		return userid;
	}

	public void setUserid(int userid) {
		this.userid = userid;
	}

	public short getType() {
		return type;
	}

	public void setType(short type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "PostInteractions [interactionid = " + interactionid + ", postid = " + postid + ", userid = " + userid
				+ ", type = " + type + "]";
	}
}