import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { authGuard } from './guard/auth.guard';
import { loginBeforeGuard } from './guard/login-before.guard';

const routes: Routes = [
  {
    path:'',component:HomeComponent, canActivate:[loginBeforeGuard]
  },
  {
    path:'login', component:LoginComponent, canActivate:[loginBeforeGuard]
  },
  {
    path:'registration',component:RegistrationComponent, canActivate:[loginBeforeGuard]
  },  
  {
    path:'page',component:Page1Component, canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
