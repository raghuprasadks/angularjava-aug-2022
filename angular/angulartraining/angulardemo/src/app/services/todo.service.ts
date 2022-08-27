import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Todos } from '../models/Todos';

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

}
