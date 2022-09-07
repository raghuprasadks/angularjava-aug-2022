package com.operative.jpacrudmysql.controller;

import com.operative.jpacrudmysql.model.Tutorial;
import com.operative.jpacrudmysql.repository.TutorialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TutorialController {
    @Autowired
    TutorialRepository tutorialRepository;
    @PostMapping("/tutorials")
    public ResponseEntity<Tutorial> CreateTutorial(@RequestBody Tutorial tutorial){
        System.out.println("TutorialController:CreateTutorial");
        try {
            Tutorial _tutorial = this.tutorialRepository.save(tutorial);
            return new ResponseEntity<>(_tutorial, HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
        }
        //return _tutorial;
    }


}
