import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogin:boolean = false;
  constructor(private _UserService:UserService) {

    _UserService.currentUser.subscribe(() => {

      if(this._UserService.currentUser.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }

  islogout() {
    this._UserService.logOut();
  }

  ngOnInit(): void {
  }



}
