import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Task } from '../../model/task.model';
import { RequestService } from '../../shared/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  task$: Observable<Task[]>;
  form: FormGroup

  constructor(
    private service: RequestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.task$ = this.service.getTask().pipe(
      catchError((error) => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    )

    const task = this.route.snapshot.data['task'];

    this.form = this.formBuilder.group({
      id: [ task.id ],
      title: [task.title, Validators.required],
      description: [task.description, Validators.maxLength(500)]
    })
  }

  handleError() {

  }

  onEdit() {

  }
}
