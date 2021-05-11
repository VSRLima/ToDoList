import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { EMPTY, Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";


import { Task } from "../../model/task.model";
import { RequestService } from "../../shared/services/request.service";
import { AlertService } from "src/app/shared/services/alert.service";
import * as moment from "../../../../node_modules/moment";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.less"],
})
export class ListComponent implements OnInit {
  tasks: Task[] = [];
  taskToMark: Task[] = [];
  form: FormGroup;
  todayDate = new Date();
  receber: Observable<any>;
  showNoTask: boolean = false;
  bsModalRef: BsModalRef;
  renderCal: boolean = false;

  constructor(
    private service: RequestService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private modalService: BsModalService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    matIconRegistry.addSvgIcon('calendar_today', this.domSanitizer.bypassSecurityTrustResourceUrl("./../../../assets/calendar_today_black_24dp.svg"))
  }

  ngOnInit() {
    this.getTask();
    this.formBuild();
  }

  renderCalendar(): void {
    this.renderCal = !this.renderCal;
  }

  dateFromCalendar(date) {
    this.todayDate = date.value;
    this.getTask();
  }

  getTask() {
    this.service
      .getTask()
      .pipe(
        catchError((error) => {
          console.error(error);
          this.handleError();
          return EMPTY;
        })
      )
      .subscribe((dados) => {
        this.taskToMark = dados;
        this.tasks = [];
        dados.forEach((el, i) => {
          if (
            moment(el.date).format('YYYY/MM/DD') ==
            moment(this.todayDate).format('YYYY/MM/DD')
          ) {
            this.tasks.push(dados[i]);
          } else {
            return;
          }
        });
      });
  }

  formBuild() {
    this.form = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.maxLength(500)],
      date: [null, Validators.required],
    });
  }

  handleError() {
    this.alertService.showAlert(
      "Opa, ocorreu um erro ao excluir esse item",
      "danger"
    );
  }

  onEdit(id) {
    this.service.getTaskById(id).subscribe((data) => {
      this.populateForm(data);
    });
  }

  populateForm(data) {
    this.form.patchValue({
      id: data.id,
      title: data.title,
      date: data.date,
      description: data.description,
    });
  }

  onSubmit() {
    this.service
      .save(this.form.value)
      .pipe(tap(console.log))
      .subscribe(
        (success) => {
          this.alertService.showAlert("Sucesso ao salvar nova Task", "success");
          window.location.reload();
        },
        (error) => {
          this.alertService.showAlert("Erro ao salvar nova Task", "danger");
        }
      );
  }

  resetForm() {
    this.form.reset();
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
