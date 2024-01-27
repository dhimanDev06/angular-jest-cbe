import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(public commnService:CommonService, private router:Router) {
  }
  user: any = {
    email: "",
    password: ""
  };
  doLogin(){
    const isLogin = this.commnService.loginCheck(this.user);
    if(isLogin){
      this.router.navigateByUrl('/page')
    }
    console.log('user',this.user,isLogin)
  }
  reset(){
    this.user = {
      email: "",
      password: ""
    };
  }
}
