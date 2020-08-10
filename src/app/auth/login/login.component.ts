import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any;
  submitForm = false;

  constructor(private formBuilder: FormBuilder, private validatorService: ValidatorService) { 
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.Passwordvalidator]),
      rememberme: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  loginuser() {
    debugger;
    this.submitForm = true;
  }

}
