import { Component, Input } from '@angular/core'

import { interval } from 'rxjs';
import * as moment from 'moment';

@Component({
    selector: 'Clock',
    template: '<p id="clock">It is {{ now }}</p>'

})
export class ClockComponent {
    
    const timer = interval(1000); 

    timer.subscribe(x => console.log('Next: ', x)
}



 