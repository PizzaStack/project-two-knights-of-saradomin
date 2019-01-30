import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NewpostService } from '../newpost.service';
import { Posts } from '../posts';
import { Users } from '../users';
import { $ } from 'protractor';
import { UserService } from '../user.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {

 user: Users[]

  constructor(
    private newPost: NewpostService,
    private userService: UserService
    ) { }

  ngOnInit() {  

    // this.newPost.createPost
    this.user = this.userService.getLoggedInUsers();
  }

  createPost(data){
      let post: Posts = {
      postid: null,
      userid : 1,
      textcontents: data.value,
      imagelocation: null,
      repostid: -1,
      user: this.user[0]

    }

    this.newPost.createPost(post);
    // $("#post").empty();
    window.location.reload();
  }
 
}
