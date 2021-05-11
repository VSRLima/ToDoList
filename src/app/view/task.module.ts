import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  AlertModalComponent]
})
export class TaskModule { }
