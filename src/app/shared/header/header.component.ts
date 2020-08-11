import { Component, OnInit } from '@angular/core';
import { BehavioursubService } from '../services/behavioursub.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;
  IsLogin = true;

  constructor(
    private behaviourSubjectService: BehavioursubService
    ) { }

  ngOnInit() {
    debugger;
    this.behaviourSubjectService.LoginUserInfo.subscribe((data) => {
      debugger
      this.userData = data;

      // if(this.userData != ""){
        const UserId =   localStorage.getItem("Id");
        if(UserId != null){
          this.IsLogin = true;
        }
      // }
    });
  }

  

  LogOut(){
    
    localStorage.removeItem("Id");
    localStorage.removeItem("Name");

    const UserId =   localStorage.getItem("Id");
    if(UserId == null){
      this.IsLogin = false;
    }

  }
}
