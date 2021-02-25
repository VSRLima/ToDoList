import { AlertModalComponent } from './../alert-modal/alert-modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: BsModalService) { }

  showAlert(message: string, type: string, dismissTimeout?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.type = type;
    bsModalRef.content.message = message

    if (dismissTimeout) {
      setTimeout(() => bsModalRef.hide(), dismissTimeout);
    }
  }

  showConfirm(title: string, content: string, okTxt?: string, cancelTxt?: string) {
    //create a confirm component
  }
}
