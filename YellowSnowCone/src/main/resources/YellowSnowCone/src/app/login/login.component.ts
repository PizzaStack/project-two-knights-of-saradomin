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
  submitted = false;

  constructor(protected _userService:UserService,
    private location: Location, 
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }
  
  ngOnInit(){
    this._authService.logout();
    this.mainviewUrl = "/mainview";
    this.newUserModel = new User(null, null, null, null, null, null);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
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
    this.submitted = true;
    if (this.loginForm.invalid) {
      //this.loginSuccess = false;
      //this.f.email = null;
      //this.f.password = null;
      return;
    } else {
      this.newUserModel.email = this.f.email.value;
      this.newUserModel.password = this.f.password.value;
      if (this.newUserModel.email.length >= 4 && this.newUserModel.password.length >= 4) {
        console.log("valid credentials")
        this.login(this.newUserModel);
        //this.router.navigate(["welcomeview"]);
      } else alert("Invalid Username Or Password");
    }
  }
}