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
  formError: any = {
    email: false,
    password: false
  };
  isSubmit:boolean = false
  
  doLogin(data:any){
    if(!data.value.email){
      this.formError.email = true
    }
    if(!data.value.password){
      this.formError.password = true
    }
    this.isSubmit = true
    console.log("doLogin ----->", data.value,this.formError,this.user,this.isSubmit );
    const isLogin = this.commnService.loginCheck(data.value);
    if(isLogin){
      this.router.navigateByUrl('/page')
    }
    console.log('user',this.user,isLogin)
  }
  reset(){
    this.isSubmit = false
    this.user = {
      email: "",
      password: ""
    };
    this.formError = {
      email: false,
      password: false
    }
  }
}
