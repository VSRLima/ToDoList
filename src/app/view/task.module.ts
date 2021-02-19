import { ListComponent } from './list/list.component';
import { EditTaskComponent } from './edit-task/edit-task.component';
import { TaskRoutingModule } from './task.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    TaskRoutingModule
  ],
  declarations: [
    EditTaskComponent,
    ListComponent
  ]
})
export class TaskModule { }
