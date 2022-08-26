import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  regusers:any[]=[]
  constructor() { }

registeredUser(user:any): void{
  console.log("SignupService:registeredUser::",user)
  this.regusers.push(user)
  console.log("SignupService:after push::",this.regusers)
}

getRegisteredUser():any[]{
  return this.regusers
}
}
