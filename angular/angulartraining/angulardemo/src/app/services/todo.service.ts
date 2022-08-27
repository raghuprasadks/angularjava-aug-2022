import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Todos } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string="http://jsonplaceholder.typicode.com/todos"

  constructor(private httpClient:HttpClient) { }

  getTodos(){
    console.log("TodoService:getTodos")
    return this.httpClient.get<Todos[]>(this.url)
  }

  addTodo(data:Todos):Observable<Todos>{
    console.log("TodoService:addTodo")
    return this.httpClient.post<Todos>(this.url,data,httpOptions)
  }
}
