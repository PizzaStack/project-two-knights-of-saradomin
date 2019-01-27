import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users:User[]

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.users=this._userService.getLoggedInUsers();
  }

}
