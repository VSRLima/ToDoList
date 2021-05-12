import { Task } from './../../model/task.model';
import { Input, ViewEncapsulation } from '@angular/core';
import { Component, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
import { RequestService } from '../services/request.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent {
  @Output() dateEvent = new EventEmitter<string>();
  @Input() tasks: Task[];
  constructor (
    public service: RequestService
  ) {}

  customDate(args: any): void {
    var count: number = 1;
    this.tasks.forEach((el) => {
      if ((moment(el.date).format('YYYY/MM/DD') == moment(args.date).format('YYYY/MM/DD')) && (el.status == false)) {
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
