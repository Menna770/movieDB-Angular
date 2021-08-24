import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errors:string = '';
  constructor(private _UserService: UserService, private _Router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required
    ])
  })

  submitLogin(formData:any) {
    this._UserService.login(formData.value).subscribe((response) => {
      console.log(response);

      if(response.message === 'success') {

        localStorage.setItem('userToken', response.token);
        this._UserService.saveCurrentUser();
        this._Router.navigate(['home']);
      }
      else {
        this.errors = response.message;
      }
    });
  }


    ngOnInit(): void {
    }

}
