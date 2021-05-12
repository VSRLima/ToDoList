import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { RequestService } from './services/request.service';

import { AlertService } from './services/alert.service';


@NgModule({
  declarations: [

    AlertModalComponent
  ],
  imports: [
    CommonModule,
    ModalModule.forRoot(),

  ],
  providers: [
    RequestService,
    AlertService
  ]
})
export class SharedModule { }
