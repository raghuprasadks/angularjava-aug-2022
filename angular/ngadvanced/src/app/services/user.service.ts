import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url:string="http://localhost:3000/users"

  constructor(private httpClient:HttpClient) { }

  signUp(data:any):Observable<any>{
    return this.httpClient.post<any>(this.url, data, httpOptions);
  }

}
