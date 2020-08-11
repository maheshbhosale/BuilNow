import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/services/validator.service';
import { BehavioursubService } from 'src/app/shared/services/behavioursub.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitForm = false;
  errormessage = false;

  constructor(
    private formBuilder: FormBuilder,
    private validatorService: ValidatorService,
    private behaviourSubjectService: BehavioursubService,
    private toastr: ToastrService
  ) {
    this.loginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, this.validatorService.emailValidator]),
      password: new FormControl('', [Validators.required, this.validatorService.Passwordvalidator]),
      rememberme: new FormControl(false)
    });
  }

  ngOnInit() {
  }

  loginuser() {
    this.submitForm = true;

    if (this.loginForm.valid) {
      if (this.loginForm.value.email == "buildnow@gmail.com" && this.loginForm.value.password == "Abc@123") {

        localStorage.setItem("Id", "1");
        localStorage.setItem("Name", "Mahesh Bhosale");

        this.toastr.success('login succesfullly !!!', 'Welcome');
        this.loginForm.reset();
        this.errormessage = true;
        this.submitForm = false;

        this.behaviourSubjectService.SendUserDataToHeader({ "Id": 1, "Name": "Mahesh Bhosale" })
      } else {
        this.toastr.error('Sorry !', 'username & password incorrect');
      }
    }

  }


}
