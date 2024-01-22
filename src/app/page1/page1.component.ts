import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component {
  constructor() {
    console.log("Page1Component:Contructed");
  }
  ngOnDestroy() {
    console.log("Page1Component:ngOnDestroy");
  }
}
