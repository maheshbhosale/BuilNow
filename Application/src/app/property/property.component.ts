import { Component, OnInit } from '@angular/core';
import { BehavioursubService } from '../shared/services/behavioursub.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Property } from './property.model';
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  properties : Property[] = [];

  constructor(private readonly behaviourSubjectService:BehavioursubService,
    private readonly router:Router, private toastr: ToastrService) { 
    
  }

  ngOnInit(): void {
    this.getPropertyDetails();
  }  

  getPropertyDetails(){    
    this.properties=this.behaviourSubjectService.properties;
  }

  removePropertyDetails(index){
    this.properties.splice(index,1);
    this.toastr.success('Property removed successfully');
  }

  editPropertyDetailById(property: Property){
    this.behaviourSubjectService.isEditProperty = true;
    this.behaviourSubjectService.seletedPropertyToEdit = property;
    this.router.navigate(['/add-new-property']);
  }
}
