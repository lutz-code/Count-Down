import { Component } from '@angular/core';

import * as moment from 'node_modules/moment';
import { interval } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  christmas = new Date('12/25/2021');
  
  title = 'count-down';
  public now = moment(this.christmas).endOf("date").diff(moment().format());
  
  
}

 class ClockComponent{
  constructor() {
const timer = interval(1000);}}
 
 
