import { Component, OnInit } from '@angular/core';
import { BehavioursubService } from '../services/behavioursub.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userData: any;
  IsLogin = true;

  constructor(
    private behaviourSubjectService: BehavioursubService, 
    private router: Router
    ) { }

  ngOnInit() {
    this.behaviourSubjectService.LoginUserInfo.subscribe((data) => {
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
      this.router.navigate(['/login']);
    }

  }
}
