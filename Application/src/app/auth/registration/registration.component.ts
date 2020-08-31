import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  states: any;
  countries: any;
  Isdisabled = false;
  submitForm = false;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private router: Router
  ) {
    this.countries = [{ id: 'USA', name: 'United States' }, { id: 'UK', name: 'United Kingdom' }, { id: 'FR', name: 'France' }];
    this.states = [{ id: "AL", name: "Alabama" }, { id: "AK", name: "Alaska" }, { id: "AZ", name: "Arizona" }, { id: "AR", name: "Arkansas" }];
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      companyname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      address: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
      fax: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, this.validatorService.Passwordvalidator]),
      confirmpassword: new FormControl('', [Validators.required, this.validatorService.Passwordvalidator]),
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  RegisterUser() {
    this.submitForm = true;
    this.router.navigate(['/login']);
  }

  setradio(no: number) {
    if (no == 1) {
      this.Isdisabled = true;
    } else {
      this.Isdisabled = false;
    }
  }

}
