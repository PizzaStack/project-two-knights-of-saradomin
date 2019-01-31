import { Component, OnInit } from '@angular/core';
import { NewpostService } from '../newpost.service';
import { Posts } from '../posts';
import { Users } from '../users';
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
    this.user = this.userService.getLoggedInUsers();
  }

  createPost(data: any) {
    let post: Posts = {
      postid: null,
      userid: this.user[0].userid,
      textcontents: data.value,
      imagelocation: null,
      repostid: -1,
      user: this.user[0]
    }

    this.newPost.createPost(post);

    window.location.reload();
  }
}
