import { Injectable } from '@angular/core';

import { Users } from './users'
import { VerificationToken } from './verificationToken'

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

const httpPostOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};
const httpGetOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};
const httpTextOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Users[] = [];
  loggedInUsers: Users[] = [];
  private _url = this.storage.getBaseUrl();

  constructor(private http: HttpClient,
    public router: Router,
    private storage: StorageService) { }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this._url.concat('users'), httpGetOptions);
  }

  authenticate(user: Users): Observable<Users> {
    console.log('authenticating... ' + user.email + ', ' + user.password);
    return this.http.post<Users>(this._url.concat('authenticate'),
      JSON.stringify(user), httpPostOptions)
  }

  public static registeredUser:Users;

  verifyToken(verificationToken:VerificationToken) : Observable<Users> {
    console.log('verifying token info... ');
    console.log("userid = " + verificationToken.userid);
    console.log("vtoken = " + verificationToken.vtoken);
    var newUser:Users = null;
  
    return this.http.post<Users>("http://localhost:8080/validate/"
      .concat(verificationToken.userid.toString()).concat("/")
      .concat(verificationToken.vtoken), 
      JSON.stringify(verificationToken), httpPostOptions);
  }

  addNewUser(user:Users) : Observable<Users> {
    console.log('adding new user... '+user.email+', '+user.password);
    return this.http.post<Users>(this._url.concat('register'), 
      JSON.stringify(user), httpPostOptions)
  }

  logInUser(){
    this.router.navigate(['mainview']);
  }

  getLoggedInUsers(): Users[] {
    return this.loggedInUsers;
  }
  addLoggedInUser(user: Users) {
    this.loggedInUsers.push(user);
  }
}
