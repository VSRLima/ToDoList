import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap,  } from 'rxjs/operators';
import { Location } from '@angular/common';

import { Task } from '../../model/task.model';
import { RequestService } from '../../shared/request.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  task$: Observable<Task[]>;
  form: FormGroup;

  constructor(
    private service: RequestService,
    private formBuilder: FormBuilder,
    private location: Location
    ) { }

  ngOnInit() {
    this.task$ = this.service.getTask().pipe(
      catchError((error) => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    )

    this.form = this.formBuilder.group({
      id: [null],
      title: [ null , Validators.required],
      description: [null, Validators.maxLength(500)]
    })
  }

  handleError() {

  }

  onEdit(id) {
    this.service.getTaskById(id).subscribe(
      data => {
        this.populateForm(data);
      }
    );
  }

  populateForm(data) {
    this.form.patchValue({
      id: data.id,
      title: data.title,
      description: data.description
    })
  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      tap(console.log)
    ).subscribe(
      success => {
        console.log('sucesso')
        window.location.reload();
      },
      error => {
        console.error('erro');
      },
    )
  }

  resetForm() {
    this.form.reset();
  }

  //colocar uma modal para confirmar a deleção do card
  onDelete(id) {
    this.service.deleteTask(id).subscribe(
      success => {
        console.log('task deleted');
        window.location.reload();
      },
      error => {
        console.log('error')
      }
    );

  }
}
