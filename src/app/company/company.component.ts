import { Component, OnInit } from '@angular/core';
import { CompanyUser } from './company.model';
import { BehavioursubService } from '../shared/services/behavioursub.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  users : CompanyUser[] = [];

  constructor(private readonly behaviourSubjectService:BehavioursubService,
    private readonly router:Router, private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.getUserDetails();
  }  

  getUserDetails(){    
    this.users=this.behaviourSubjectService.users;
  }

  removeUserDetails(index){
    this.users.splice(index,1);
    this.toastr.success('User removed successfully');
  }

  editUserDetailById(id){
    this.router.navigate(['/add-new-user']);
  }
}
