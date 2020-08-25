import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  confirmation: boolean;

  private configuration: {
    confirmationMessage: string,
    successButtonName: string,
    cancelButtonName: string
  };

  get confirmationMessage(): string {
    return this.configuration.confirmationMessage;
  }

  get successButtonName(): string {
    return this.configuration.successButtonName;
  }

  get cancelButtonName(): string {
    return this.configuration.cancelButtonName;
  }

  constructor() {
    this.configuration = {
      cancelButtonName: 'No',
      successButtonName: 'Yes',
      // Generic message for unconfigured confirmation box.
      confirmationMessage: 'Are you sure?'
    };
  }

  /**
   * Sets configuration.
   * @param modalConfig Configuration to set.
   */
  config(modalConfig: {
    confirmationMessage: string,
    successButtonName?: string,
    cancelButtonName?: string
  }) {

    this.configuration = {
      confirmationMessage: modalConfig.confirmationMessage,
      successButtonName: modalConfig.successButtonName || 'Yes',
      cancelButtonName: modalConfig.cancelButtonName || 'No'
    };

    this.confirmation = false;
  }
}
