import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component } from '@angular/core';
import * as moment from 'node_modules/moment';
import { MomentInput } from 'node_modules/moment';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'count-down';
  public now = moment().format('h:mm:ss A');
}
  
