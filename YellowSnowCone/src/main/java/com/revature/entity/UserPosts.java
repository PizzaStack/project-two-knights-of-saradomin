package com.revature.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "userposts")
public class UserPosts {

	@Id
	@GeneratedValue
	@Column(name = "postid")
	private int postid;

	@Column(name = "userid", insertable=false, updatable=false)
	private int userid;

	@Column(name = "textcontents")
	private String textcontents;

	@Column(name = "imagelocation")
	private String imagelocation;

	@Column(name = "repostid")
	private int repostid;
	
	@ManyToOne(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
	@JoinColumn(name ="userid")
	private Users user;

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

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "UserPosts [postid=" + postid + ", userid=" + userid + ", textcontents=" + textcontents
				+ ", imagelocation=" + imagelocation + ", repostid=" + repostid + ", user=" + user + "]";
	}

	public UserPosts(int postid, int userid, String textcontents, String imagelocation, int repostid,
			Users user) {
		super();
		this.postid = postid;
		this.userid = userid;
		this.textcontents = textcontents;
		this.imagelocation = imagelocation;
		this.repostid = repostid;
		this.user = user;
	}

	public UserPosts() {
		super();
		// TODO Auto-generated constructor stub
	}

	
}
