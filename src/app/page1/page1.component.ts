import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit{
  errorMsg: any;
  constructor(public commnService:CommonService) {
    console.log("Page1Component:Contructed");
  }
  ngOnInit(): void {
    this.loadContain()
  }
  loadData:any;
  loadContain() {
    this.commnService.getApi().subscribe({
      next:data =>{
        this.loadData = data
      },
      error:(error:any) =>{
        this.errorMsg = error
      },
      complete: ()=>{
        console.log();
      }
    })
  }
  ngOnDestroy() {
    console.log("Page1Component:ngOnDestroy");
  }
}
