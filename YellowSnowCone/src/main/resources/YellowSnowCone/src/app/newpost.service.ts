import { Injectable } from '@angular/core';
import { Posts } from './posts';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class NewpostService {

  newPost: Posts;

  private newPostUrl = this.storage.getBaseUrl() + 'userposts/add';


  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  createPost(data: any) {
    this.http.post(this.newPostUrl, data).subscribe();
  }

}