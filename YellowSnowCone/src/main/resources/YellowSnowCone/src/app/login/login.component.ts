import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(protected _userService:UserService,
              private location: Location, 
              private router: Router, 
              public authService: AuthService) { }
  private mainviewUrl:string;

  protected newUserModel = new User(null, null, null, null, null, null);
  loggedInUser:User;

  login(user:User){
    this._userService.authenticate(user)
      .subscribe(data => {
        user = data;
        console.log('loggedInUser: ' + JSON.stringify(user));
        if (user.userId !== null){
          console.log("Login successful");
          this._userService.addLoggedInUser(user);
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', user.userId.toString());
          this.router.navigate([this.mainviewUrl]);
          //this._userService.logInUser();
        } else console.log('userId is null.')
      });
  }
  onSubmit(){
    this.login(this.newUserModel);
  }

  ngOnInit(){
    this.mainviewUrl = "/mainview";
    this.authService.logout();
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