import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehavioursubService {
  private readonly onDestroy = new BehaviorSubject('');

  // Send data login to header
  private UserInfo = new BehaviorSubject('');
  LoginUserInfo = this.UserInfo.asObservable();

  // send data to header
  SendUserDataToHeader(data: any) {
    debugger;
    this.UserInfo.next(data);
  }


}
