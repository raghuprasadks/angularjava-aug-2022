package com.operative.springbootdemo.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
    @RequestMapping(value="/",method= RequestMethod.GET)
    public String Welcome(){
        return "Welcome to Hello Controller";
    }
    //@RequestMapping(value="/greetings",method= RequestMethod.GET)
    @GetMapping("/greetings")
    public String Greetings(){
        return "Hello";
    }
}
