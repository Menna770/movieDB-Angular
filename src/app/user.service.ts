import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _HttpClient: HttpClient, private _Router:Router) {

    if(localStorage.getItem('userToken') != null) {
      this.saveCurrentUser();
    }
   }

  //Decode Login Token:
  currentUser = new BehaviorSubject(null);

  saveCurrentUser() {
    let token:any = localStorage.getItem('userToken');
    this.currentUser.next(jwtDecode(token));
  }

  //Call Sign up API:
  register(formData:any):Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup', formData);
    }

  //Call Sign in API:
  login(formData:any):Observable<any> {
    return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin', formData);
    }

  //Logout Method:
  logOut() {
    this.currentUser.next(null);
    localStorage.removeItem('userToken');
    this._Router.navigate(['login']);
  }
}
