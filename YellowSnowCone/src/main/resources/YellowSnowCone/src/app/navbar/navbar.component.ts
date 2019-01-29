import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User[];

  constructor(private userService: UserService, private storageService: StorageService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => this.user = data,(error: any) => console.log(error),() => this.storageService.setUser(this.user));
  }

  search() {
    alert("Key pressed!");
  }

}
