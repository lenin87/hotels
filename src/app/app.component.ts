import { Component } from '@angular/core';
import { DirectiveAst, typeSourceSpan } from '@angular/compiler';
import { directiveCreate } from '@angular/core/src/render3/instructions';
import { MyserviceService } from './myservice.service';
import {Http} from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todayDate;
  constructor(private myservice: MyserviceService){}
  ngOnInit(){
    this.todayDate= this.myservice.showTodayDate();

    console.log(this.todayDate);
  }
  title = 'Lenin';
  months=["Jan","Feb","Mar","Apr","May","jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  isValid=true;
  clickFun(event){
    alert("clikced");
  }
  changemonth(event){
    console.log(event);
    alert(event);
  }
  todate = new Date();
 
}
