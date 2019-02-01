import { Component, OnInit, OnDestroy } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';
import { tokenKey } from '@angular/core/src/view';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit, OnDestroy {
  token:string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    var _this=this;
    console.log("in registered component")
    this.sub = this.route.params.subscribe(params => {
      this.token = params['token'];
      console.log("token found: " + this.token)
      if (this.token.length >= 0){
        swal({
          title:"Success",
          text:"Check Your Email!",
          type:"success",
          timer: 2000
        });
      } else {
        swal({
          title:"???",
          text:"Error",
          type:"error",
          timer: 2000
        });
      }
   });
  this.goBack();
  }

  goBack() : any {
    setTimeout(function(){
      this.router.navigate(["http://localhost:8080/welcomeview"]);
    }, 2000);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
