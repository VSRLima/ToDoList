import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, tap,  } from 'rxjs/operators';

import { Task } from '../../model/task.model';
import { RequestService } from '../../shared/services/request.service';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  tasks: Task[] = [];
  form: FormGroup;
  todayDate=  new Date();
  receber: Observable<any>;
  showNoTask: boolean = false;
  bsModalRef: BsModalRef;


  constructor(
    private service: RequestService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private modalService: BsModalService
    ) { }

  ngOnInit() {
    this.service.getTask().pipe(
      catchError((error) => {
        console.error(error);
        this.handleError();
        return EMPTY;
      })
    ).subscribe(
      dados => {
        this.tasks = dados;
      }
    )

    this.form = this.formBuilder.group({
      id: [null],
      title: [ null , Validators.required],
      description: [null, Validators.maxLength(500)],
      date: [ null, Validators.required ]
    })
  }

  dateVerify(date) {
    if(this.todayDate == date ) {
      return true;
    } else {
      return false;
    }
  }

  handleError() {
    this.alertService.showAlert('Opa, ocorreu um erro ao excluir esse item', 'warning')
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
      date: data.date,
      description: data.description
    })
  }

  onSubmit() {
    this.service.save(this.form.value).pipe(
      tap(console.log)
    ).subscribe(
      success => {
        this.alertService.showAlert('Sucesso ao salvar nova Task', 'success');
        window.location.reload();
      },
      error => {
        this.alertService.showAlert('Erro ao salvar nova Task', 'danger');
      },
    )
  }

  resetForm() {
    this.form.reset();
  }

  onDelete(id) {
    this.service.deleteTask(id).subscribe(
      success => {
        this.alertService.showAlert('Sucesso ao deletar a Task', 'success');
        window.location.reload();
      },
      error => {
        this.alertService.showAlert('Erro ao deletar a Task', 'danger');
      }
    );

  }
}
