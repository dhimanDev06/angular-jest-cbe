import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  counter:number = 0;
  constructor() {
    console.log("HomeComponent:Contructed");
  }
  ngOnDestroy() {
    console.log("HomeComponent:ngOnDestroy ", this.counter);
    this.counter = 0
  }
  increse(){
    this.counter = this.counter + 1
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
}
