import { Component, Input } from '@angular/core';
import {  BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.less']
})
export class AlertModalComponent  {

  @Input() message:string;
  @Input() type = 'success';

  constructor(public bsModalRef: BsModalRef) { }

  onClose() {
    this.bsModalRef.hide();
  }
}
