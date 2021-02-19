import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from '../../model/task.model';
import { RequestService } from '../../shared/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  task$: Observable<Task[]>;

  constructor(private service: RequestService) { }

  ngOnInit() {
    this.task$ = this.service.getTask().pipe(
      catchError((error) => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    )
  }

  handleError() {

  }

  onEdit() {

  }
}
