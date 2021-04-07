import { Component } from '@angular/core';
import { clearInterval } from 'node:timers';
import { take } from 'rxjs/operators'; 
import * as moment from 'node_modules/moment';
import { interval, Subscription } from 'rxjs';
import { ClockComponent } from './clock.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: '<p id="clock">It is {{ now }}</p>'
})
export class AppComponent {
  title = 'count-down';
  public now = moment().format('h:mm:ss A');
}

 class ClockComponent{
  constructor() {
const timer = interval(1000);
 
const now =  ( now + timer.pipe);
 
const subscribe = now.subscribe(x => console.log(x));