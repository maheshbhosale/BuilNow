import { Injectable, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class ModalService {
  bsModalRef: BsModalRef;
  onHidden: EventEmitter<{}>;

  isSuccess: boolean;

  constructor(private modalService: BsModalService) {
    this.onHidden = this.modalService.onHidden;
  }

  // Method for opening modal-popup
  openModal(modalComponent, modalConfig) {
    // Prevent backdrop key event.
    modalConfig['keyboard'] = false;
    modalConfig['backdrop'] = 'static';

    if (this.bsModalRef) {
      this.bsModalRef.hide();
    }

    this.isSuccess = false;

    this.bsModalRef = this.modalService.show(modalComponent, modalConfig);
  }

  // Method for closing modal-popup
  closeModal() {
    if (this.bsModalRef) {
      this.bsModalRef.hide();
    }
  }
}
