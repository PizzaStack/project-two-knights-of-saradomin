import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'
import { UserService } from '../user.service';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private userService: UserService, 
              private storage: StorageService,
              public authService: AuthService,
              private router: Router) { }
  name: string;

  ngOnInit() {
    this.name = this.userService.getLoggedInUsers()[0].firstname + " " + this.userService.getLoggedInUsers()[0].lastname;
  }

  clearMessageRefresh(){
    clearInterval(this.storage.getMessageTimerId());
  }

  logout(): void {
    console.log("Logout");
    this.clearMessageRefresh();
    this.authService.logout();
    this.router.navigate(['/welcomeview']);
  }
}
