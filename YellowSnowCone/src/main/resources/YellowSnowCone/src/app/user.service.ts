import { Injectable } from '@angular/core';

import { Users } from './users'

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseHttpResponse } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

const httpPostOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
  })
};
const httpGetOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*'
  })
};
const httpTextOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Users[] = [];
  loggedInUsers:Users[] = [];
  private _url = "http://localhost:8080/";

  constructor(private http: HttpClient,
              public router: Router) {}

  getUsers() : Observable<Users[]> {
    return this.http.get<Users[]>(this._url.concat('users'), httpGetOptions);
  }
  
  authenticate(user:Users) : Observable<Users> {
    console.log('authenticating... '+user.email+', '+user.password);
    return this.http.post<Users>(this._url.concat('authenticate'), 
      JSON.stringify(user), httpPostOptions)
  }

  logInUser(){
    this.router.navigate(['mainview']);
  }

  getLoggedInUsers() : Users[] {
    return this.loggedInUsers;
  }
  addLoggedInUser(user:Users){
    this.loggedInUsers.push(user);
  }
  
}
