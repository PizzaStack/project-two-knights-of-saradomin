package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "userposts")
public class UserPosts {

	@Id
	@NotNull
	@GeneratedValue
	@Column(name = "postid")
	private int postid;

	@Column(name = "userid")
	private int userid;

	@Column(name = "textcontents")
	private String textcontents;

	@Column(name = "imagelocation")
	private String imagelocation;

	@Column(name = "repostid")
	private int repostid;

	public UserPosts(int postid, int userid, String textcontents, String imagelocation, int repostid) {
		super();
		this.postid = postid;
		this.userid = userid;
		this.textcontents = textcontents;
		this.imagelocation = imagelocation;
		this.repostid = repostid;
	}

	public UserPosts() {
		super();
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

	public String getTextcontents() {
		return textcontents;
	}

	public void setTextcontents(String textcontents) {
		this.textcontents = textcontents;
	}

	public String getImagelocation() {
		return imagelocation;
	}

	public void setImagelocation(String imagelocation) {
		this.imagelocation = imagelocation;
	}

	public int getRepostid() {
		return repostid;
	}

	public void setRepostid(int repostid) {
		this.repostid = repostid;
	}

	@Override
	public String toString() {
		return "UserPost [postid = " + postid + ", userid = " + userid + ", textcontents = " + textcontents
				+ ", imagelocation = " + imagelocation + ", repostid = " + repostid + "]";
	}
}
