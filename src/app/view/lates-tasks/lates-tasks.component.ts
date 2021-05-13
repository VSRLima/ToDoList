import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-lates-tasks',
  templateUrl: './lates-tasks.component.html',
  styleUrls: ['./lates-tasks.component.less']
})
export class LatesTasksComponent implements OnInit {
  @Input() laterTasks: Task[];
  @Input() populateForm: (data: Task) => void;
  @Input() statusTask: (statusData: Task) => void;

  constructor(
    public service: RequestService,
    public alertService: AlertService
  ) { }

  ngOnInit(): void {
    console.log(this.laterTasks);
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
