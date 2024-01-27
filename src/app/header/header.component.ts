import { Component } from '@angular/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public commnService:CommonService, private router:Router) {}
  doLogout(){
    localStorage.removeItem('isLogin')
    this.commnService.setLoginFlag(false)
    this.router.navigateByUrl('/')
  }
}
