import { Component, OnInit } from '@angular/core';
import { CompanyUser } from './company.model';
import { BehavioursubService } from '../shared/services/behavioursub.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ConfirmationDialogService } from '../shared/dialog/confirmation-dialog/confirmation-dialog.service';
import { ModalService } from '../core/modal.service';
import { ConfirmationDialogComponent } from '../shared/dialog/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  users: CompanyUser[] = [];
  companyUserDeteletedMessage = 'Are you sure you want to remove this user?';
  confirmationModalConfig = {
    class: 'confirm-modal modal-dialog-centered'
  };

  constructor(private readonly behaviourSubjectService: BehavioursubService,
    private readonly router: Router, private toastr: ToastrService, private modalService: ModalService, private confirmationDialogService: ConfirmationDialogService) {

  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.users = this.behaviourSubjectService.users;
  }

  removeUserDetails(index) {
    const confirmationMessage = this.companyUserDeteletedMessage;
    this.confirmationDialogService.config({
      confirmationMessage
    });
    this.openConfirmationModal();
    const subscription = this.modalService.onHidden.subscribe(() => {
      if (this.confirmationDialogService.confirmation) {
        this.users.splice(index, 1);
        this.toastr.success('User removed successfully');
      }
      subscription.unsubscribe();
    });
  }

  // Confirmation Dialog for Delete
  openConfirmationModal() {
    this.modalService.openModal(ConfirmationDialogComponent, this.confirmationModalConfig);
  }

  editUserDetailById(user: CompanyUser) {
    this.behaviourSubjectService.isEditUser = true;
    this.behaviourSubjectService.selectedUserToEdit = user;
    this.router.navigate(['/add-new-user']);
  }

  addNewUser() {
    this.behaviourSubjectService.isEditUser = false;
  }
}
