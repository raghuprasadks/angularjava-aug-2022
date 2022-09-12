package com.operative.entitymanagerdemo.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.Date;
@Entity
public class TutorialsDetails {

    public TutorialsDetails() {
    }
    public TutorialsDetails(String createdBy) {
        this.createdOn = new Date();
        this.createdBy = createdBy;
    }
    public Long getDetailId() {
        return detailId;
    }

    public void setDetailId(Long detailId) {
        this.detailId = detailId;
    }

    public Date getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public Tutorials getTutorials() {
        return tutorials;
    }

    public void setTutorials(Tutorials tutorials) {
        this.tutorials = tutorials;
    }

    @Id
    private Long detailId;
    private Date createdOn;
    private String createdBy;
    @OneToOne
    @JoinColumn(name="id")
    private Tutorials tutorials;

}
