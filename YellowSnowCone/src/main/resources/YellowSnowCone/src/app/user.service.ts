import { Injectable } from '@angular/core';

import { Users } from './users'

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

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
    alert(this._url);
    console.log('authenticating... ' + user.email + ', ' + user.password);
    return this.http.post<Users>(this._url.concat('authenticate'),
      JSON.stringify(user), httpPostOptions)
  }

  logInUser() {
    this.router.navigate(['mainview']);
  }

  getLoggedInUsers(): Users[] {
    return this.loggedInUsers;
  }
  addLoggedInUser(user: Users) {
    this.loggedInUsers.push(user);
  }
}