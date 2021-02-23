import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestService } from 'src/app/shared/request.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.less']
})
export class EditTaskComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: RequestService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.maxLength(500)]
    })
  }

}
