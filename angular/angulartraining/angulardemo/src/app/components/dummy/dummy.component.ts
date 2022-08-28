import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent implements OnInit {

  constructor(private httpClient:HttpClient) { }

  status:boolean = false;
  ngOnInit(): void {
/**
    this.httpClient.get('https://jsonplaceholder.typicode.com/todos1').subscribe(
      res=>{
        console.log('reponse ')
        console.log(res)
      },
      error=>{
        console.log("error")
        console.log(error)
        console.log(error.message)
      },
      ()=>{
        console.log('completed')
      }
    )
    */

    this.httpClient.get('https://jsonplaceholder.typicode.com/todos').subscribe(
      next=>console.log(next),error=>console.log(error),()=>console.log('completed')
    )
  }
 
}
