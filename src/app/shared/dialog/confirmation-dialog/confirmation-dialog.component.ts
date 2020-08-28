import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from './confirmation-dialog.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styles: []
})
export class ConfirmationDialogComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef, public confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit() {
  }

  /**
  * Method to hide confirmation message.
  * @param answer saves the answer of the confirmation popup.
  */
  hideDialog(answer: boolean) {
    this.confirmationDialogService.confirmation = answer;
    this.bsModalRef.hide();
  }

}
