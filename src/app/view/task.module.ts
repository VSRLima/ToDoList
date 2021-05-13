import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { TaskRoutingModule } from './task.routing';




@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TaskRoutingModule
  ],
  declarations: [

  ]
})
export class TaskModule { }
