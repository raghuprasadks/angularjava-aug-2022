import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  isOnline:boolean =true
  status:string=''
  myPromise:any;
  constructor() { }

  ngOnInit(): void {

  }

  getStatus():string{
    this.status = 'off line'
    if (this.isOnline)
        this.status = 'on line'
    return this.status
  }


  getStatusWithPromise(){
    console.log('getStatusWithPromise')
    this.myPromise = new Promise<boolean>((resolve,reject)=>{
      setTimeout(()=>{
        console.log("Received status value")
        //this.isOnline=true;
        //resolve(this.isOnline)

        this.isOnline=false;
        resolve(this.isOnline)

      },5000)
    })
  }

  

}
