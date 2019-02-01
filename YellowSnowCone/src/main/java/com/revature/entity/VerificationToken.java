package com.revature.entity;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.Transient;


@Entity
@Table(name = "verificationtokens")
public class VerificationToken {
	//private static final int EXPIRATION = 60 * 24;
	//@Autowired
	//UsersRepository userRepository;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "tokenid", updatable=false, nullable = false)
	private int tokenid;
	
	@Column(name = "userid", insertable=false, updatable=false)
	private int userid;

	@Column(name="token")
	private String token;

	@Transient
	private Date createdDate;
	
	//@Column(name="expiration_date", insertable=false, updatable=false)
	//@Column(name = "expiration_date", columnDefinition = "TIMESTAMP WITHOUT TIME ZONE")
	//@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "expiration_date")
	private Timestamp expirationDate;
	
	@OneToOne(targetEntity = Users.class)
	@JoinColumn(name = "userid")
	private Users user;

	public VerificationToken() {
		super();
	}

	public VerificationToken(int userid, String token, Timestamp expiration_date, Users user) {
		this.userid = userid;
		this.token = token;
		this.user = user;
		Calendar calendar = Calendar.getInstance();
		this.createdDate = new Date(calendar.getTime().getTime());
		int expiration = 60 * 24;
		this.expirationDate = new Timestamp(calculateExpiryDate(expiration).getTime());
		System.out.println("EXPIRATION: " + this.expirationDate);
	}

	public int getTokenid() {
		return tokenid;
	}

	public void setTokenid(int tokenid) {
		this.tokenid = tokenid;
	}

	public String getToken() {
		return token;
	}

	public void setToken(final String token) {
		this.token = token;
	}

	public Users getUser() {
		return user;
	}

	public void setUser(final Users user) {
		this.user = user;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getExpirationDate() {
		return expirationDate;
	}

	public void setExpirationDate(Date expiryDate) {
		this.expirationDate = new Timestamp(expiryDate.getTime());
	}

	private Date calculateExpiryDate(int expiryTimeInMinutes) {
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(new Timestamp(calendar.getTime().getTime()));
		calendar.add(Calendar.MINUTE, expiryTimeInMinutes);
		return new Date(calendar.getTime().getTime());
	}

	@Override
	public String toString() {
		return "VerificationToken [tokenid=" + tokenid + ", userid=" + userid + ", "
				+ (token != null ? "token=" + token + ", " : "")
				+ (expirationDate != null ? "expirationDate=" + expirationDate + ", " : "")
				+ (user != null ? "user=" + user : "") + "]";
	}
}