import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-jest-cbe';
  numb1:number = 3;
  numb2:number = 6;
  calculate(){
    return this.numb1 + this.numb2
  }
}
