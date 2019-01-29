import { Injectable } from '@angular/core';

import { User } from './user'

import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { parseHttpResponse } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

const httpPostOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json', 
    'Access-Control-Allow-Origin': '*'
  })
};
const httpGetOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin': '*'
  })
};
const httpTextOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[] = [];
  loggedInUsers:User[] = [];
  private _url = "http://localhost:8080/";

  constructor(private http: HttpClient,
              public router: Router) {}

  getUsers() : Observable<User[]> {
    return this.http.get<User[]>(this._url.concat('users'), httpGetOptions);
  }
  
  authenticate(user:User) : Observable<User> {
    console.log('authenticating... '+user.email+', '+user.password);
    return this.http.post<User>(this._url.concat('authenticate'), 
      JSON.stringify(user), httpPostOptions)
  }

  logInUser(){
    this.router.navigate(['mainview']);
  }

  getLoggedInUsers() : User[] {
    return this.loggedInUsers;
  }
  addLoggedInUser(user:User){
    this.loggedInUsers.push(user);
  }

  /*
  getUsers(){
    this.users = [
      {id:0, email:"ex@gmail.com", password:"password", firstname:"Jay", lastname:"Smith", profilePicturePath:"null"},
      {id:1, email:"lovelyboy@kissme.org", password:"hello", firstname:"Kansas", lastname:"tulip", profilePicturePath:"null"},
      {id:2, email:"cokewhore@crack.com", password:"crack", firstname:"Lindsay", lastname:"Peters", profilePicturePath:"null"}
    ];
    return this.users;
  }
  */
     /*
    return [
        {"id":0, "email":"ex@gmail.com", "password":"password", "firstname":"Jay", "lastname":"Smith", "profilePicturePath":"null"},
        {"id":1, "email":"lovelyboy@kissme.org", "password":"hello", "firstname":'Kansas', "lastname":"tulip", "profilePicturePath":"null"},
        {"id":2, "email":"cokewhore@crack.com", "password":"crack", "firstname":"Lindsay", "lastname":"Peters", "profilePicturePath":"null"}
    ];
    */
  /*
  authenticate(credentials, callback) {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
        } : {});

        this.http.get('user', {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });
    }
  */
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
    
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
    
      // TODO: better job of transforming error for user consumption
      //this.log(`${operation} failed: ${error.message}`);
    
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  */
}
