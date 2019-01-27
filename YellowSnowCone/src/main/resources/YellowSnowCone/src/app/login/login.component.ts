import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(protected _userService:UserService,
              private location: Location) { }
  private email:string;

  protected newUserModel = new User(null, null, null, null, null, null);
  loggedInUser:User;

  login(user:User) {
    this._userService.authenticate(user)
    .subscribe(data => {
      this.loggedInUser = data;
      console.log(this.loggedInUser);
      if (this.loggedInUser.userId != null) 
        this._userService.addLoggedInUser(this.loggedInUser);
    });
  }
  onSubmit(){
    this.login(this.newUserModel);
    console.log('onSubmit: ' + JSON.stringify(this.newUserModel))
  }

  ngOnInit(){
    
  }
}
  /*
  login() {
    this.userService.authenticate(this.credentials, () => {
        return true;
    });
    this.router.navigateByUrl('/error');
    return false;
  }
  */
/*
function Login(username, password, callback) {
  $http.post('/api/authenticate', { username: username, password: password })
    .success(function (response) {
      callback(response);
    });
}
*/