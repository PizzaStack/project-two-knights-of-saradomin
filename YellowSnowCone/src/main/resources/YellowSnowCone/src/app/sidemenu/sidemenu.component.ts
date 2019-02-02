import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  name: string;

  constructor(private userService: UserService, private storage: StorageService) { }

  ngOnInit() {
    // this.name = this.userService.getLoggedInUsers()[0].firstname + " " + this.userService.getLoggedInUsers()[0].lastname;
    this.name = localStorage.getItem('firstName') + " " + localStorage.getItem('lastName');
  }

  clearMessageRefresh(){
    clearInterval(this.storage.getMessageTimerId());
  }

}