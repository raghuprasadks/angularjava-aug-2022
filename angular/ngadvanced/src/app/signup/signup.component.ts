import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupGroup:FormGroup|any

  message:string="";
  /**
   * 
   * @param formBuilder 
   * Method 1 - Injecting from builder to the constructor
   */

  constructor(private formBuilder:FormBuilder,private user:UserService) { 
    this.signupGroup =formBuilder.group({
      name:['test'],
      email:[],
      mobile:[],
      password:[]

    })
  }

  ngOnInit(): void {
  }



  signUp(signupGroup:FormGroup){
    console.log("Sign up ")
    console.log(signupGroup.value)
    this.user.signUp(signupGroup.value).subscribe((data)=>{
      console.log("sign up successful")
      this.message="Sign up Successful"

    })
  }

}
