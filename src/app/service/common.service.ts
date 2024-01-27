import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(
    private http: HttpClient
  ) { }
  public isLogin  = new Subject<boolean>();
  setLoginFlag(data:any) {
    this.isLogin.next(data);
  }
  getApi() {
    let url = 'https://jsonplaceholder.typicode.com/comments'
    return this.http.get(url)
  }
  registrationSubmit(data: any) {
    let storedData = localStorage.getItem('UserList') ? localStorage.getItem('UserList') : null;
    console.log('data', data);

    let userList = []
    if (storedData) {
      let storedDataList = JSON.parse(storedData)
      if ((storedDataList.filter((a: any) => a.email === data.email)).length > 0) {
        return false
      } else {
        let storedDataList: any = JSON.parse(storedData)
        storedDataList.push(data)
        userList = storedDataList;
      }
    } else {
      userList = [{ ...data }]
    }
    localStorage.setItem('UserList', JSON.stringify(userList))
    return true
  }
  loginCheck(data: any) {
    let storedData = localStorage.getItem('UserList') ? localStorage.getItem('UserList') : null;
    console.log('data', data);
    if (storedData) {
      let storedDataList = JSON.parse(storedData)
      const loginUser = storedDataList.filter((a: any) => a.email === data.email && a.password === data.password)
      if (loginUser.length == 1) {
        localStorage.setItem('isLogin', JSON.stringify(loginUser[0]))
        this.setLoginFlag(true)
        return true
      } else {
        return false
      }
    }
    return false
  }

  getLoginStatus(){
    let isLoginData = localStorage.getItem('isLogin') ? localStorage.getItem('isLogin') : null;
    if(isLoginData){
      return true
    }
    return false
  }
}
