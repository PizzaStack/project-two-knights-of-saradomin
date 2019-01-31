import { Component, OnInit } from '@angular/core';
import { Users } from '../users'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: Users[]

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.users = this._userService.getLoggedInUsers();
  }

}