import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CompanyUser } from 'src/app/company/company.model';
import { Property } from 'src/app/property/property.model';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubService {
  private readonly onDestroy = new BehaviorSubject('');

  // Send data login to header
  private UserInfo = new BehaviorSubject('');
  LoginUserInfo = this.UserInfo.asObservable();
  public users: CompanyUser[] = [];
  public isEditUser: boolean = false;
  public selectedUserToEdit: CompanyUser;
  public seletedPropertyToEdit:Property;
  public isEditProperty:boolean=false;
  public properties:Property[]=[];

  // send data to header
  SendUserDataToHeader(data: any) {
    this.UserInfo.next(data);
  }
}
