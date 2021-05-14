import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RequestService } from './services/request.service';

import { AlertService } from './services/alert.service';
import { ModalComponent } from './modal/modal.component';
import { FormBuildService } from './services/form-build.service';


@NgModule({
  declarations: [
    AlertModalComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),

  ],
  providers: [
    RequestService,
    AlertService,
    FormBuildService
  ]
})
export class SharedModule { }
