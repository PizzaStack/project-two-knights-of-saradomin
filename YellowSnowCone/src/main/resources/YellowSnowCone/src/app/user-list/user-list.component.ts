import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../users'

@Component({
  selector: 'app-user-list',
  template: `
    <h3> user-list </h3>
    <ul *ngFor="let user of users" style="font-size:15px">
      <li>ID:{{user.id}} || Email:{{user.email}} || Password:{{user.password}}</li>
    </ul>
  `,
  styles: []
})
export class UserListComponent implements OnInit {

  public users: Users[];
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers().subscribe(data => this.users = data);
  }

}