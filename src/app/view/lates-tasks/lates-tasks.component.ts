import { Component, Input, OnInit } from '@angular/core';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from 'src/app/model/task.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RequestService } from 'src/app/shared/services/request.service';
import * as moment from 'moment';

@Component({
  selector: 'app-lates-tasks',
  templateUrl: './lates-tasks.component.html',
  styleUrls: ['./lates-tasks.component.less']
})
export class LatesTasksComponent implements OnInit {
  laterTasks: Task[] = [];
  @Input() populateForm: (data: Task) => void;
  @Input() statusTask: (statusData: Task) => void;

  constructor(
    public service: RequestService,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.service
      .getTask()
      .pipe(
        catchError((error) => {
          console.error(error);
          return EMPTY;
        })
      )
      .subscribe((dados) => {
        dados.forEach((el) => {
          this.dateVerify(el);
        });
      });
  }

  dateVerify(task: Task) {
    let verifyTodayDate = new Date();
    if (moment(task.date).format('YYYY/MM/DD') < moment(verifyTodayDate).format('YYYY/MM/DD')) {
      if (task.status == false) {
        console.log('tasks inside dateVerify',task);
        this.laterTasks.push(task);
      }
    }
  }

  onEdit(id) {
    this.service.getTaskById(id).subscribe((data: Task) => {
      this.populateForm(data);
    });
  }

  onDelete(id) {
    this.service.deleteTask(id).subscribe(
      (success) => {
        this.alertService.showAlert("Sucesso ao deletar a Task", "success");
        window.location.reload();
      },
      (error) => {
        this.alertService.showAlert("Erro ao deletar a Task", "danger");
      }
    );
  }


}
