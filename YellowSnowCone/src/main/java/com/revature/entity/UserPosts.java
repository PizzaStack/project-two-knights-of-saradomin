package com.revature.entity;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "userposts")
public class UserPosts {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "postid", insertable = false, updatable = false)
	private int postid;

	@Column(name = "userid", insertable = false, updatable = false)
	private int userid;

	@Column(name = "textcontents")
	private String textcontents;

	@Column(name = "imagelocation")
	private String imagelocation;

	@Column(name = "repostid")
	private int repostid;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "userid")
	private Users user;

	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(name = "postid")
	private List<PostInteractions> postinteractions;

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

	public List<PostInteractions> getPostinteractions() {
		return postinteractions;
	}

	public void setPostinteractions(List<PostInteractions> postinteractions) {
		this.postinteractions = postinteractions;
	}

	@Override
	public String toString() {
		return "UserPosts [postid=" + postid + ", userid=" + userid + ", textcontents=" + textcontents
				+ ", imagelocation=" + imagelocation + ", repostid=" + repostid + ", user=" + user
				+ ", postinteractions=" + postinteractions + "]";
	}

	public UserPosts(int postid, int userid, String textcontents, String imagelocation, int repostid, Users user, List<PostInteractions> postinteractions) {
		super();
		this.postid = postid;
		this.userid = userid;
		this.textcontents = textcontents;
		this.imagelocation = imagelocation;
		this.repostid = repostid;
		this.user = user;
		this.postinteractions = postinteractions;
	}

	public UserPosts() {
		super();
	}
}