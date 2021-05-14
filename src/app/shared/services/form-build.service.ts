import { FormBuilder  ,FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { Task } from './../../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class FormBuildService {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  formBuild() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.maxLength(500)],
      date: [null, Validators.required],
      status: [ null ]
    });
  }

  populateForm(data: Task) {
    this.form.patchValue({
      id: data.id,
      title: data.title,
      date: data.date,
      description: data.description,
    });
  }
}
