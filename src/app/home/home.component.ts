import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counter:number = 0;
  constructor(
    public commnService:CommonService
  ) {
    console.log("HomeComponent:Contructed");
  }
  ngOnInit(): void {
    this.callApi()
  }
  ngOnDestroy() {
    console.log("HomeComponent:ngOnDestroy ", this.counter);
    this.counter = 0
  }
  increse(){
    this.counter = this.counter + 1;
  }

  numb1:number = 1
  numb2:number = 5
  subtraction(){
    if(this.numb1 > this.numb2){
      return this.numb1 - this.numb2
    }else{
      return this.numb2 - this.numb1
    }
  }

  serviceData:any;
  errorMsg:any;
  callApi(){
    this.commnService.getApi().subscribe({
      next:data =>{
        this.serviceData = data
      },
      error:(error:any) =>{
        this.errorMsg = error
      },
      complete: ()=>{
        console.log();
      }
    })

  }
  errorExcp(){
    throw new Error('This is a Angular error')
  }
}
