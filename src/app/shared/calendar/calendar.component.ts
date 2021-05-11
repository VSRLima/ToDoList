import { Input, ViewEncapsulation } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { count } from 'rxjs/operators';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
  @Output() dateEvent = new EventEmitter<string>();
  @Input() item: any;
  constructor (
    public service: RequestService
  ) {

  }

  customDate(args: any): void {
    console.log(this.item);
    var count: number = 1;
    this.item.forEach((el) => {
      if (moment(el.date).format('YYYY/MM/DD') == moment(args.date).format('YYYY/MM/DD')) {
        count = count + count;
        console.log(count);
        if (count <= 2) {
          let span: HTMLElement;
          span = document.createElement('span');
          span.setAttribute('class','highlight-day');
          args.element.appendChild(span);
        }
      }
    })


  }

  onValueChange(args: any): void {
    this.dateEvent.emit(args);
  }

}
