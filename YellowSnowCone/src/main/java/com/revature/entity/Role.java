package com.revature.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int roleId;	
	@Column(name = "role")
	private String roleName;

	public Role() {
		super();
	}
	public Role(int roleId, String roleName) {
		super();
		this.roleId = roleId;
		this.roleName = roleName;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRolename(String roleName) {
		this.roleName = roleName;
	}
	
	@Override
	public String toString() {
		return "Role [roleId=" + roleId + ", " + (roleName != null ? "roleName=" + roleName : "") + "]";
	}
}