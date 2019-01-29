import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private mainviewUrl:string;
  protected newUserModel:User;
  loginForm: FormGroup;
  loggedInUser:User;
  loginSuccess:boolean;

  constructor(protected _userService:UserService,
    private location: Location, 
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }
  
  ngOnInit(){
    this._authService.logout();
    this.mainviewUrl = "/mainview";
    this.newUserModel = new User(null, null, null, null, null, null);
    this.loginSuccess = true;

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.minLength(4), Validators.pattern(/^[a-zA-Z0-9_.+-]{1,}@[a-zA-Z0-9-]{1,}\.[a-zA-Z0-9-.]{1,}$/)]],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.loginForm.controls; }

  login(user:User){
    this.loggedInUser = user;

    this._userService.authenticate(user).subscribe(data => {
      this.loggedInUser = data;

      if (this.loggedInUser.userId !== null && this.loggedInUser.userId != -1){
        console.log("Login successful");
        console.log('loggedInUser: ' + JSON.stringify(this.loggedInUser));
        this._userService.addLoggedInUser(this.loggedInUser);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loggedInUser.userId.toString());
        this.router.navigate([this.mainviewUrl]);
      } else {
        console.log('userId Is Null.')
        console.log('User Info: ' + JSON.stringify(this.loggedInUser));
      }
    });
  }
  onSubmit(){
    if (this.loginForm.invalid) {
      this.loginSuccess = false;
      this.f.email = null;
      this.f.password = null;
      return;
    }
    this.newUserModel.email = this.f.email.value;
    this.newUserModel.password = this.f.password.value;
    if (this.loginForm.dirty && this.loginForm.valid) {
      console.log("form is dirty + valid")
      this.login(this.newUserModel);
      this.router.navigate(["welcomeview"]);
    }
    //else alert("Invalid Username Or Password");
  }
}