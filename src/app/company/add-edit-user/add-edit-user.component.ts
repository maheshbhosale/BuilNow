import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator'
import { Router } from '@angular/router';
import {CompanyUser} from '../company.model';
import { BehavioursubService } from 'src/app/shared/services/behavioursub.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  user: CompanyUser;
  isEditUser:boolean;
  title: string = "Create New User";
  title1: string = "User Details";
  button:string = "Create";

  constructor(private fb: FormBuilder, private router: Router,
    private readonly behaviourSubjectService:BehavioursubService, private toastr: ToastrService) { 
      this.isEditUser = this.behaviourSubjectService.isEditUser;
      
    }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      branchName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      roleofUser: ['', Validators.required]
    });

    if(this.isEditUser){
      this.title = "Update User";
      this.button = "Update";
      const user =this.behaviourSubjectService.selectedUserToEdit;
      this.registerForm.setValue({
        firstName:user.firstName,
        lastName:user.lastName,
        branchName: user.branchName,
        email: user.email,
        roleofUser: user.roleofUser
      })
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  showNextPage() {
    if(this.isEditUser){
      this.toastr.success('User updated successfully');
    this.router.navigate(['/company']);
    }
    else{
      this.user=this.registerForm.value;
      this.behaviourSubjectService.users.push(this.user);
      this.toastr.success('User created successfully');
      this.router.navigate(['/company']);
    }
  }
  
}
