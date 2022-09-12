import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  @ViewChild('regForm') regForm: NgForm | undefined;
  name:string=''
  email:string=''
  password:string=''
  msg:string=''
  isSubmitted=false

  constructor() { }

  ngOnInit(): void {
  }
  register(regForm:NgForm){
    console.log(regForm.value)
    if(regForm.valid)
    {
      this.isSubmitted=true
      this.msg='Registration successful'
    }

  }

}
