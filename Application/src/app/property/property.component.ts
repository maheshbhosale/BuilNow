import { Component, OnInit } from '@angular/core';
import { BehavioursubService } from '../shared/services/behavioursub.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Property } from './property.model';
import { ModalService } from '../core/modal.service';
import { ConfirmationDialogService } from '../shared/dialog/confirmation-dialog/confirmation-dialog.service';
import { ConfirmationDialogComponent } from '../shared/dialog/confirmation-dialog/confirmation-dialog.component';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  properties: Property[] = [];
  selectedUser: string;
  propertyDeteletedMessage = 'Are you sure you want to remove this property?';
  confirmationModalConfig = {
    class: 'confirm-modal modal-dialog-centered'
  };

  constructor(private readonly behaviourSubjectService: BehavioursubService,
    private readonly router: Router, private toastr: ToastrService,
    private modalService: ModalService, private confirmationDialogService: ConfirmationDialogService) {

  }

  ngOnInit(): void {
    this.selectedUser = localStorage.getItem("Name");
    this.getPropertyDetails();
  }

  getPropertyDetails() {
    this.properties = this.behaviourSubjectService.properties;
  }

  // Confirmation Dialog for Delete
  openConfirmationModal() {
    this.modalService.openModal(ConfirmationDialogComponent, this.confirmationModalConfig);
  }

  removePropertyDetails(index) {
    const confirmationMessage = this.propertyDeteletedMessage;
    this.confirmationDialogService.config({
      confirmationMessage
    });
    this.openConfirmationModal();
    const subscription = this.modalService.onHidden.subscribe(() => {
      if (this.confirmationDialogService.confirmation) {
        this.properties.splice(index, 1);
        this.toastr.success('Property removed successfully');
      }
      subscription.unsubscribe();
    });
  }

  editPropertyDetailById(property: Property) {
    this.behaviourSubjectService.isEditProperty = true;
    this.behaviourSubjectService.selectedPropertyToEdit = property;
    this.router.navigate(['/add-new-property']);
  }

  addNewProperty() {
    this.behaviourSubjectService.isEditProperty = false;
  }
}
