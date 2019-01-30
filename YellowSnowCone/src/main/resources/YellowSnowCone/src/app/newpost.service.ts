import { Injectable } from '@angular/core';
import { Posts } from './posts';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewpostService {

  newPost : Posts;

  private newPostUrl ='http://localhost:8080/userposts/add'
  
  
  constructor(
    private http: HttpClient,
  ) { }

    createPost(data) {
    
     this.http.post(this.newPostUrl,data).subscribe();
    }
  
}
