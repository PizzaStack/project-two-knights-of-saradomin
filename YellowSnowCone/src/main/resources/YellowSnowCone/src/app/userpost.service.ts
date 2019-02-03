import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UserpostService {

  userPost: Posts;

  // private userposts = 'http://localhost:8080/userposts';
  private userposts = this.storage.getBaseUrl() + "userposts";
  
  constructor(
    private http: HttpClient,
    private storage: StorageService,
  ) { }

  
  getPostsById(userId:number): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.userposts, userId, httpOptions);
  }
}
