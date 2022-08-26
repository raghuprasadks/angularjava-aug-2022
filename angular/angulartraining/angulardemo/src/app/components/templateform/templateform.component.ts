import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  regusers:any[]=[]
  constructor(private signupService:SignupService) { }

  ngOnInit(): void {
  }

  signUp(data:NgForm):void
  {
    console.log("TemplateformComponent:signUp")
    console.log("TemplateformComponent:data",data.value)
    console.log("TemplateformComponent:data",data.value.email)
    console.log("data.controls.email.value",data.controls['email'].value)
    this.signupService.registeredUser(data.value)
  }

  displayUsers():void{
    this.regusers= this.signupService.getRegisteredUser()
    console.log("TemplateformComponent:displayUsers::",this.regusers)
  }

}
