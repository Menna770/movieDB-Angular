import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-resgister',
  templateUrl: './resgister.component.html',
  styleUrls: ['./resgister.component.scss']
})
export class ResgisterComponent implements OnInit {

  errors:string = '';
  constructor(private _UserService: UserService, private _Router: Router) { }

  regForm = new FormGroup({
    first_name: new FormControl(null, [
      Validators.required,
        Validators.minLength(3)
      ]),
    last_name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),
    age: new FormControl(null , [
      Validators.required,
      Validators.min(16),
      Validators.max(60)
    ]),
    email: new FormControl(null,[
      Validators.required,
      Validators.email
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^[A-Z][0-9]{3,10}$')
    ])
  })

  submitRegister(formData:any) {
    this._UserService.register(formData.value).subscribe((response) => {
      if(response.message === 'success') {
        this._Router.navigate(['login']);
      }
      else {
        this.errors = response.errors.email.message;
      }
    });

  }
  ngOnInit(): void {
  }

}
