package com.operative.jpacrudmysql.repository;

import com.operative.jpacrudmysql.model.Tutorial;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TutorialRepository extends JpaRepository<Tutorial,Long> {
    List<Tutorial> findByTitleContaining(String title);
    List<Tutorial> findByPublished(boolean b);
}
