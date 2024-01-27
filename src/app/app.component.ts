import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from './service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest-cbe';
  numb1:number = 3;
  numb2:number = 6;
  showHeader:boolean = false
  constructor(public commnService:CommonService, private router:Router) {
    this.showHeader = this.commnService.getLoginStatus()
    this.commnService.isLogin.subscribe(res=>{
      this.showHeader = res
    })
  }
  calculate(){
    return this.numb1 + this.numb2
  }
}
