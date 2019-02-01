import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from './posts';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserpostService {

  userPost: Posts;

  private userposts = 'http://localhost:8080/userposts';
  
  constructor(
    private http: HttpClient,
  ) { }

  
  getPostsById(userId:number): Observable<Posts[]> {
    return this.http.post<Posts[]>(this.userposts, userId);
  }
}
