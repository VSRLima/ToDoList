import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent  {
  @Output() dateEvent = new EventEmitter<string>();
  constructor() { }

  onLoad(args: any) {
    let span: HTMLElement;
    span = document.createElement('span');
    span.setAttribute('class','e-icons highlight')
  }

  onValueChange(args: any): void {
    this.dateEvent.emit(args);
  }

}
