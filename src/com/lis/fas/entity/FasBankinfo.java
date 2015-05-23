package com.lis.fas.entity;

// Generated 2015-5-16 11:45:34 by Hibernate Tools 3.4.0.CR1

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

/**
 * FasBankinfo generated by hbm2java
 */
public class FasBankinfo implements java.io.Serializable {

	private Integer id;
	private String bankinfoName;
	private String bankinfoNumber;
	private int empId;
	private Date updateDate;
	private Date createDate;
	private char delStatus;
	private Set fasAccountinfos = new HashSet(0);
	private Set fasCheckinfos = new HashSet(0);

	public FasBankinfo() {
	}

	public FasBankinfo(String bankinfoName, String bankinfoNumber, int empId,
			Date createDate, char delStatus) {
		this.bankinfoName = bankinfoName;
		this.bankinfoNumber = bankinfoNumber;
		this.empId = empId;
		this.createDate = createDate;
		this.delStatus = delStatus;
	}

	public FasBankinfo(String bankinfoName, String bankinfoNumber, int empId,
			Date updateDate, Date createDate, char delStatus,
			Set fasAccountinfos, Set fasCheckinfos) {
		this.bankinfoName = bankinfoName;
		this.bankinfoNumber = bankinfoNumber;
		this.empId = empId;
		this.updateDate = updateDate;
		this.createDate = createDate;
		this.delStatus = delStatus;
		this.fasAccountinfos = fasAccountinfos;
		this.fasCheckinfos = fasCheckinfos;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBankinfoName() {
		return this.bankinfoName;
	}

	public void setBankinfoName(String bankinfoName) {
		this.bankinfoName = bankinfoName;
	}

	public String getBankinfoNumber() {
		return this.bankinfoNumber;
	}

	public void setBankinfoNumber(String bankinfoNumber) {
		this.bankinfoNumber = bankinfoNumber;
	}

	public int getEmpId() {
		return this.empId;
	}

	public void setEmpId(int empId) {
		this.empId = empId;
	}

	public Date getUpdateDate() {
		return this.updateDate;
	}

	public void setUpdateDate(Date updateDate) {
		this.updateDate = updateDate;
	}

	public Date getCreateDate() {
		return this.createDate;
	}

	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}

	public char getDelStatus() {
		return this.delStatus;
	}

	public void setDelStatus(char delStatus) {
		this.delStatus = delStatus;
	}

	public Set getFasAccountinfos() {
		return this.fasAccountinfos;
	}

	public void setFasAccountinfos(Set fasAccountinfos) {
		this.fasAccountinfos = fasAccountinfos;
	}

	public Set getFasCheckinfos() {
		return this.fasCheckinfos;
	}

	public void setFasCheckinfos(Set fasCheckinfos) {
		this.fasCheckinfos = fasCheckinfos;
	}

}