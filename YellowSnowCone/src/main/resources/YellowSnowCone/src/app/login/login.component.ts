import { Component, OnInit } from '@angular/core';

import { Users } from '../users';
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
  protected newUserModel:Users;
  loginForm: FormGroup;
  loggedInUser:Users;
  submitted = false;

  constructor(protected _userService:UserService,
    private location: Location, 
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }
  
  ngOnInit(){
    this._authService.logout();
    this.mainviewUrl = "mainview";
    this.newUserModel = new Users(null, null, null, null, null, null);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.loginForm.controls; }

  login(user:Users) : any {
    //this.loggedInUser = user;

    this._userService.authenticate(user).subscribe(data => {
      this.loggedInUser = data;

      if (this.loggedInUser.userid != -1){
        console.log("Login successful");
        console.log('loggedInUser: ' + JSON.stringify(this.loggedInUser));
        this._userService.addLoggedInUser(this.loggedInUser);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loggedInUser.userid.toString());
        this.router.navigate([this.mainviewUrl]);
        return true;
      } else {
        console.log('userid Is Null.')
        console.log('User Info: ' + JSON.stringify(this.loggedInUser));
      }
      return false;
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
        if (this.loggedInUser.userid == -1 || this.loggedInUser == null){
          alert("Invalid Username Or Password");
          this.router.navigate(["welcomeview"]);
        }
      } else {
        alert("Invalid Username Or Password");
        this.router.navigate(["welcomeview"]);
      }
    }
  }
}