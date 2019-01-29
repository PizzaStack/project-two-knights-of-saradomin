import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators, FormControl, EmailValidator } from '@angular/forms';
import { ValidationService } from '../validation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(protected _userService:UserService,
              private location: Location, 
              private router: Router, 
              private formBuilder: FormBuilder,
              public _authService: AuthService) { }
  
  private mainviewUrl:string;
  protected newUserModel:User;
  loginForm: FormGroup;
  loggedInUser:User;

  login(user:User){
    this.loggedInUser = user;

    this._userService.authenticate(user).subscribe(data => {
      this.loggedInUser = data;
      console.log('loggedInUser: ' + JSON.stringify(this.loggedInUser));

      if (this.loggedInUser != null && this.loggedInUser.userId !== null && this.loggedInUser.userId != -1){
        console.log("Login successful");
        console.log('loggedInUser: ' + JSON.stringify(this.loggedInUser));
        this._userService.addLoggedInUser(this.loggedInUser);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loggedInUser.userId.toString());
        this.router.navigate([this.mainviewUrl]);
      } else {
        console.log('userId is null.')
        console.log('User Info: ' + JSON.stringify(this.loggedInUser));
      }
    });
  }
  onSubmit(){
    if (this.loginForm.dirty && this.loginForm.valid) {
      console.log("form is dirty + valid")
      this.login(this.newUserModel);
    }
    else alert("Invalid Username Or Password");
  }

  ngOnInit(){
    this._authService.logout();
    this.mainviewUrl = "/mainview";
    this.newUserModel = new User(null, null, null, null, null, null);

    this.loginForm = this.formBuilder.group({
      'email': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }
  get formControls() { return this.loginForm.controls; }
}