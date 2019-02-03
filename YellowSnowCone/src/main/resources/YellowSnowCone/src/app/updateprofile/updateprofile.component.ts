import { Component, OnInit } from '@angular/core';

import { Users } from '../users';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert2';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {
  updateForm: FormGroup;
  loggedInUser: Users;
  submitted = false;
  userModel:Users;

  constructor(protected _userService: UserService,
    private _storageService: StorageService,
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }

  ngOnInit() {
    this.userModel = new Users(Number(localStorage.getItem('token')), localStorage.getItem('email'), '', 
      localStorage.getItem('firstName'), localStorage.getItem('lastName'), 
      null, true);
    console.log("userModel: " + JSON.stringify(this.userModel))
    this.updateForm = this.formBuilder.group({
      firstname: [this.userModel.firstname, [Validators.required, Validators.pattern(/[a-z\w]{1,}/i)]],
      lastname: [this.userModel.lastname, [Validators.required, Validators.pattern(/[a-z\w]{1,}/i)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(4)]],
      newPassword: ['', []]
    });
  }
  get f() { return this.updateForm.controls; }

  onSubmit(){
    this.submitted = true;
    if (this.updateForm.invalid) {
      this.resetModel();
      return;
    } else if (this.f.password.value != this.f.confirmPassword.value){
      console.log('password: ' + this.f.password.value + ', ' + 'confirmPassword: ' + this.f.confirmPassword.value)
      swal({
        title: "Error",
        text: "Passwords Do Not Match",
        imageUrl: "../../assets/snowconelikeshadow.png",
        imageHeight: 100,
        timer: 3000
      });
    } else {
      this.userModel.firstname = this.f.firstname.value;
      this.userModel.lastname = this.f.lastname.value;

      this.userModel.password = this.f.newPassword.value;
      console.log('new password: ' + this.userModel.password)
      this.userModel.password = this.f.password.value;

      this.f.confirmPassword.setValue('');
      console.log("valid update form")
      this.updateInfo(this.userModel, this.f.newPassword.value);
      this.submitted = false;
    }
  }

  updateInfo(user:Users, newPassword:string){
    this._userService.authenticate(user).subscribe(dataIsValid => {
      if (dataIsValid == null){
        swal({
          title: "Error",
          text: "Incorrect Password",
          imageUrl: "../../assets/snowconelikeshadow.png",
          imageHeight: 100,
          timer: 3000
        });
      } else {
        user.password = newPassword;
        this._userService.updateInfo(user).subscribe(data => {
          if (data == null){
            console.log("data: " + JSON.stringify(data))
            swal({
              title: "Error",
              text: "Unable To Update Your Information",
              imageUrl: "../../assets/snowconelikeshadow.png",
              imageHeight: 100,
              timer: 3000
            });
          } else {
            user = data;
            localStorage.setItem('firstName', user.firstname);
            localStorage.setItem('lastName', user.lastname);
            this._userService.setLoggedInUserById(user.userid, user);
            console.log("New LoggedIn User: " + JSON.stringify(user));
            swal({
              title:"Success",
              text:"We Updated Your Information",
              imageUrl: "../../assets/greensnowcone.png",
              imageHeight: 100,
              timer: 3000
            });
            this.router.navigate(["/mainview"]);
          }
        });
      }
    })
  }

  resetFields(){
    this.f.firstname.setValue(localStorage.getItem('firstName'));
    this.f.lastname.setValue(localStorage.getItem('lastName'));
    this.f.password.setValue('');
    this.f.confirmPassword.setValue('');
    this.f.newPassword.setValue('');
  }
  resetModel(){
    this.userModel.firstname = localStorage.getItem('firstName');
    this.userModel.lastname = localStorage.getItem('lastName');
    this.userModel.password = '';
  }
}