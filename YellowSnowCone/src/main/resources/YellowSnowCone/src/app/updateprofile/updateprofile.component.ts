import { Component, OnInit } from '@angular/core';

import { Users } from '../users';
import { UserService } from '../user.service';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert2';

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

  constructor(protected _userService:UserService,
    private router: Router, 
    private formBuilder: FormBuilder,
    public _authService: AuthService) { }

  ngOnInit() {
    this.loggedInUser.firstname = localStorage.getItem('firstname');
    this.loggedInUser.lastname = localStorage.getItem('lastname');
    this.userModel = new Users(null, null, 
      this.loggedInUser.firstname, this.loggedInUser.lastname, 
      null, null, true);
    this.updateForm = this.formBuilder.group({
      firstname: ['', []],
      lastname: ['', []],
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirmPassword: ['', [Validators.minLength(4)]]
    });
  }
  get f() { return this.updateForm.controls; }

}