import { Component, OnInit } from '@angular/core';

import { Users } from '../users'
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:Users[]
  _url:string;
  registrationForm: FormGroup;
  newUserModel:Users;
  newUser:Users;
  submitted = false;

  constructor(protected _userService:UserService,
    private location: Location, 
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }

  ngOnInit() {
    this._authService.logout();
    this._url = 'http://localhost:8080/';
    this.newUserModel = new Users(null, null, null, null, null, null, false);

    this.registrationForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      firstname: ['', [Validators.required, Validators.minLength(1)]],
      lastname: ['', [Validators.required, Validators.minLength(1)]]
    });
  }
  get f() { return this.registrationForm.controls; }
  register(user:Users){
    var self = this;
    this._userService.addNewUser(user).subscribe(data => {
      this.newUser = data;
      var anewUser:Users = this.newUser;
      if (anewUser.userid !== null && anewUser.userid != -1){
        console.log("Registration Successful");
        console.log('anewUser: ' + JSON.stringify(anewUser));
        console.log('self._url=' + self._url);
        //this._userService.addLoggedInUser(this.loggedInUser);
        localStorage.setItem('isRegistered', "true");
        localStorage.setItem('token', anewUser.userid.toString());
        swal({
          title:"Success",
          text:"Check Your Email!",
          type:"success",
          timer: 3000
        });
      } else if (anewUser.userid === -1 || anewUser.userid === null){
        swal({
          title:"Error",
          text:"There is already an account associated with that email.",
          type:"error",
          timer: 3000
        });
        console.log('userid Is Null.')
        console.log('anewUser Info: ' + JSON.stringify(anewUser));
      }
    });
  }


  onSubmit(){
    this.submitted = true;
    if (this.registrationForm.invalid){
      //this.resetFields();
      this.resetModel();
      return;
    } else {
      this.newUserModel.email = this.f.email.value;
      this.newUserModel.password = this.f.password.value;
      this.newUserModel.firstname = this.f.firstname.value;
      this.newUserModel.lastname = this.f.lastname.value;
      if (this.newUserModel.email.length >= 4 && this.newUserModel.password.length >= 4) {
        console.log("Valid Credentials")
        this.register(this.newUserModel);
        this.resetFields();
        this.submitted = false;
      } else {
        /*
        swal({
          title:"Error",
          text:"There is already an account associated with that email.",
          type:"error"
        });
        setTimeout(function(){
          this.router.navigate([this._url.concat("welcomeview")]);
        }, 3000);
        */
      }
    }
  }
  resetFields(){
    this.f.email.setValue("");
    this.f.password.setValue("");
    this.f.firstname.setValue("");
    this.f.lastname.setValue("");
  }
  resetModel(){
    this.newUserModel.email = null;
    this.newUserModel.password = null;
    this.newUserModel.firstname = null;
    this.newUserModel.lastname = null;
  }
}
