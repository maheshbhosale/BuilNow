import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  userNameValidator(control: FormControl) {
    const userName = control.value;
    if (userName) {
      const validMobile = /^[0-9]{10}$/.test(userName);
      // tslint:disable-next-line:max-line-length
      const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(userName);
   
      if(validEmail == true) {
        localStorage.setItem('username', 'email');
      }
      if(validMobile == true) {
        localStorage.setItem('username', 'mobile');
      }
      if (!(validMobile || validEmail)) {
        return {
          userNameValidation: {
            valid: false
          }
        };
      }
    }
    return null;
  }


  emailValidator(control: FormControl) {
    const userName = control.value;
    if (userName) {
    //  const validMobile = /^[0-9]{10}$/.test(userName);
      // tslint:disable-next-line:max-line-length
      const validEmail = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(userName);
   
      if(validEmail == true) {
        localStorage.setItem('username', 'email');
      }
      // if(validMobile == true) {
      //   localStorage.setItem('username', 'mobile');
      // }
      if (!(validEmail)) {
        return {
          emailValidation: {
            valid: false
          }
        };
      }
    }
    return null;
  }



  Passwordvalidator(control: FormControl) {
    const Password = control.value;
    if (Password) {
      const validPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/.test(Password);
      if (!(validPass)) {
        return {
          Passwordvalidator: {
            valid: false
          }
        };
      }
    }
    return null;
  }


}
