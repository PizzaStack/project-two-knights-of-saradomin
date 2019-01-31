import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {
  goBack:string;
  
  constructor(private router: Router) { }

  ngOnInit() {
    swal({
      title:"Success",
      text:"Check Your Email!",
      type:"success",
      timer: 3000
    });
    setTimeout(function(){
      this.router.navigate(["http://localhost:8080/welcomeview"]);
    }, 3000);
  }
}
