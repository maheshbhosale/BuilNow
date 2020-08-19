import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehavioursubService } from 'src/app/shared/services/behavioursub.service';
import { Property } from '../property.model';
import * as data from '../Json/add-property.json';
import * as data1 from '../Json/project.json';

@Component({
  selector: 'app-add-new-property',
  templateUrl: './add-new-property.component.html',
  styleUrls: ['./add-new-property.component.css']
})
export class AddNewPropertyComponent implements OnInit {

  propertyForm: FormGroup;
  submitForm = false;
  button: string = "Add Property";
  isEditProperty: boolean;
  title = "Add New Property to your account";
  title1 = "Property Details";
  property: Property;
  selectedUser: string;

  constructor(private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private router: Router, private readonly toastr: ToastrService,
    private readonly behaviourSubjectService: BehavioursubService) {
    this.isEditProperty = this.behaviourSubjectService.isEditProperty;
  }

  ngOnInit() {
    this.selectedUser = localStorage.getItem("Name");
    this.propertyForm = this.formBuilder.group({
      zipCode: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      telephone1: new FormControl('', [Validators.required]),
      telephone2: new FormControl('', [Validators.required]),
      tax: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required]),
      topology: new FormControl('', [Validators.required]),
      isBuildingExists: new FormControl('', [Validators.required]),
      buildingArea: new FormControl('', [Validators.required]),
    });
    if (this.isEditProperty) {
      this.title = "Update Selected Property to your account";
      this.button = "Update Property";
      const property = this.behaviourSubjectService.selectedPropertyToEdit;
      this.propertyForm.setValue({
        zipCode: property.zipCode,
        location: property.location,
        address1: property.address1,
        address2: property.address2,
        city: property.city,
        state: property.state,
        telephone1: property.telephone1,
        telephone2: property.telephone2,
        tax: property.tax,
        status: property.status,
        topology: property.topology,
        isBuildingExists: property.isBuildingExists,
        buildingArea: property.buildingArea
      })
    }
  }

  // convenience getter for easy access to form fields
  get f() { return this.propertyForm.controls; }

  showNextPage() {
    this.submitForm = true;
    if (this.isEditProperty) {
      var foundItem = this.behaviourSubjectService.properties.findIndex(x => x.id == this.behaviourSubjectService.selectedPropertyToEdit.id);
      this.behaviourSubjectService.properties[foundItem]=this.propertyForm.value;
      this.toastr.success('Property updated successfully');
      this.router.navigate(['/property']);
    }
    else {
      this.property = this.propertyForm.value;
      this.behaviourSubjectService.properties.push(this.property);
      this.toastr.success('Property created successfully');
      this.router.navigate(['/property']);
    }
  }

}
