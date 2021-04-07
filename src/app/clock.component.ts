import { Component, Input } from '@angular/core'

@Component({
    selector: 'Clock',
    template: '<p id="clock">It is {{ now }}</p>'

})
export class ClockComponent {
    @Input() name: string;
}