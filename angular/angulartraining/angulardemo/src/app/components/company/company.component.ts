import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from 'src/app/models/Company';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  company:Company={
    code:0,
    name:'',
    location:''
  }

  
  @Output() addCompanyEvent = new EventEmitter<Company>();

  constructor() { }

  ngOnInit(): void {
  }


  addCompany(company:NgForm){
    console.log('data ',company.value)    
    this.addCompanyEvent.emit(company.value)
  }

}
