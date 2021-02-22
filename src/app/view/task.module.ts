import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    EditTaskComponent,
    ListComponent
  ]
})
export class TaskModule { }
