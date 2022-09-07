package com.operative.jpacrudmysql.repository;

import com.operative.jpacrudmysql.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TutorialRepository extends JpaRepository<Tutorial,Long> {
}
