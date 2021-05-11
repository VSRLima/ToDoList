import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';



import { RequestService } from './services/request.service';




@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,

    ModalModule.forRoot()
  ],
  providers: [
    RequestService,

  ]
})
export class SharedModule { }
