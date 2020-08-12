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
  button:string = "Create";

  constructor(private fb: FormBuilder, private router: Router,
    private readonly behaviourSubjectService:BehavioursubService, private toastr: ToastrService) { 
      this.isEditUser = this.behaviourSubjectService.isEditUser;
      
    }

  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      company: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipcode: ['', Validators.required],
      country: ['', Validators.required],
      telephone: ['', Validators.required],
      fax: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });

    if(this.isEditUser){
      this.title = "Update User";
      this.button = "Update";
      const user =this.behaviourSubjectService.selectedUserToEdit;
      this.registerForm.setValue({
        firstName:user.firstName,
        lastName:user.lastName,
        company: user.company,
      email: user.email,
      role: user.role,
      address: "efjhkruh",
      city: "kjdfh",
      state: "sgerg",
      zipcode: "w,ef",
      country: "ekhfy",
      telephone: "ehfje",
      fax: "skflj",
      password: "ewfhwe",
      confirmPassword:"shfker"
      })
    }
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  showNextPage() {
    this.user=this.registerForm.value;
    this.behaviourSubjectService.users.push(this.user);
    this.toastr.success('User created successfully');
    this.router.navigate(['/company']);
  }
  
}
