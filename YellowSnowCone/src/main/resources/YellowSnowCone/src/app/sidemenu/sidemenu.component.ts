import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(public authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/welcomeview']);
  }
}
