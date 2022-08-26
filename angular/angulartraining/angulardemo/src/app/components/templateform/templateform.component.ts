import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signUp(data:NgForm):void
  {
    console.log("TemplateformComponent:signUp")
    console.log("TemplateformComponent:data",data.value)
    console.log("TemplateformComponent:data",data.value.email)
    console.log("data.controls.email.value",data.controls['email'].value)
  }

}
