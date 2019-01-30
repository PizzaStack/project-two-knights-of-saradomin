import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewpostService } from '../newpost.service';
import { Posts } from '../posts';
import { Users } from '../users';
import { $ } from 'protractor';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

  constructor(private newPost: NewpostService) { }
   


  ngOnInit() {  

    // this.newPost.createPost
  }

  createPost(data){
      
    let user:Users = {
        userid: 1,
        email: 'test@revature.com',
        password: 'PLOK1plok1',
        firstname: 'John',
        lastname: 'Smith',
        profilepicturelocation: null
      }

      let post: Posts = {
      postid: null,
      userid : 1,
      textcontents: data.value,
      imagelocation: null,
      repostid: -1,
      user: user

    }

    this.newPost.createPost(post);
    // $("#post").empty();
    window.location.reload();
  }
 
}
