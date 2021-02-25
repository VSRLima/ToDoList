import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { ListComponent } from './list/list.component';
// import { EditTaskComponent } from './edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task.routing';
import { AlertModalComponent } from '../shared/alert-modal/alert-modal.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  declarations: [
    // EditTaskComponent,
    // ListComponent
  AlertModalComponent]
})
export class TaskModule { }
