import { Component, OnInit } from '@angular/core';

import { Users } from '../users';
import { UserService } from '../user.service';

import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeoutWith } from 'rxjs/operators';
import swal from 'sweetalert2';

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
    this.newUserModel = new Users(null, null, null, null, null, null, false);

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }
  get f() { return this.loginForm.controls; }

  login(user:Users){
    //this.loggedInUser = user;

    this._userService.authenticate(user).subscribe(data => {
      if (data == null){
        swal({
          title: "Error",
          text: "Invalid Username Or Password",
          imageUrl: "../../assets/snowconelikeshadow.png",
          imageHeight: 100,
          timer: 3000
        });
      }
      this.loggedInUser = data;
      if ((this.loggedInUser.userid != null || this.loggedInUser.userid != -1)
        && this.loggedInUser.enabled == true) {
        console.log("Login successful");
        console.log('loggedInUser: ' + JSON.stringify(this.loggedInUser));
        this._userService.addLoggedInUser(this.loggedInUser);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.loggedInUser.userid.toString());
        this.router.navigate([this.mainviewUrl]);
      } else if ((this.loggedInUser.userid != null || this.loggedInUser.userid != -1)
        && this.loggedInUser.enabled == false){
        swal({
          title: "Not So Fast",
          text: "Your Email Has Not Been Verified",
          imageUrl: "../../assets/yellowsnowcone.png",
          imageHeight: 100,
          timer: 3000
        });
      } else {
        swal({
          title: "Error",
          text: "Invalid Username Or Password",
          imageUrl: "../../assets/snowconelikeshadow.png",
          imageHeight: 100,
          timer: 3000
        });
        console.log('userid Is Null.')
        console.log('User Info: ' + JSON.stringify(this.loggedInUser));
      }
    });
  }
  onSubmit(){
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.f.email.setValue("");
      this.f.password.setValue("");
      this.newUserModel.email = null;
      this.newUserModel.password = null;
      return;
    } else {
      this.newUserModel.email = this.f.email.value;
      this.newUserModel.password = this.f.password.value;
      if (this.newUserModel.email.length >= 4 && this.newUserModel.password.length >= 4) {
        console.log("valid credentials")
        this.login(this.newUserModel);
      } else {
        swal("Invalid Username Or Password");
        this.router.navigate(["welcomeview"]);
      }
    }
  }
}