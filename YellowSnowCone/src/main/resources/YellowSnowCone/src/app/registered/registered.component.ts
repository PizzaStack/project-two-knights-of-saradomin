import { Component, OnInit, OnDestroy } from '@angular/core';
import swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { tokenKey } from '@angular/core/src/view';
import { VerificationToken } from '../verificationToken';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../users';
import { UserService } from '../user.service';

const httpPostOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
};

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit/*, OnDestroy*/ {
  verificationToken: VerificationToken = new VerificationToken(null, null);
  userid: number;
  vtoken: string;
  registrationSuccess: boolean;
  user: Users = new Users(null, null, null, null, null, null, false);
  private sub: any;
  postData: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient,
              private _userService: UserService) {}

  ngOnInit() {
    console.log('in registered component');
    this.sub = this.route.params.subscribe(params => {
      localStorage.setItem('userid', params['userid']);
      localStorage.setItem('vtoken', params['vtoken']);
    });
    this.checkTokenInfo();
  }

  checkTokenInfo() {
    this.userid = Number(localStorage.getItem('userid'));
    this.vtoken = localStorage.getItem('vtoken');
    this.verificationToken = new VerificationToken(this.userid, this.vtoken);
    console.log('verifying token info... ');
    console.log('userid = ' + this.verificationToken.userid);
    console.log('vtoken = ' + this.verificationToken.vtoken);
    this._userService.verifyToken(this.verificationToken).subscribe(data => {
      if (data == null) {
        swal({
          title: 'Error',
          text: 'Your Token Is Either Invalid or Expired',
          type: 'error',
          timer: 3000
        });
        this.router.navigate(['/welcomeview']);
      }
      this.user = data;
      console.log('verifiedUser: ' + JSON.stringify(this.user));
      if (this.user.enabled) {
        swal({
          title: 'Success',
          text: 'You Are Now Able To Log In',
          type: 'success',
          timer: 3000
        });
        this.router.navigate(['/welcomeview']);
      } else {
        swal({
          title: 'Error',
          text: 'Your Token Is Either Invalid or Expired',
          type: 'error',
          timer: 3000
        });
        this.router.navigate(['/welcomeview']);
      }
    });
  }

  /*
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  */
}
