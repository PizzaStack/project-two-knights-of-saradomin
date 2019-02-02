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
      user: this.user[0],
      postinteractions: null
    }

    this.newPost.createPost(post);

    const view = document.getElementById('zmew')
    view.innerHTML = `<app-navbar> </app-navbar>
    <div class="wrapper">
        <app-sidemenu></app-sidemenu>
        <div id="content">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <app-createpost></app-createpost>
                    </div>
                </div>
                <hr>
                <div class="row">
                    <div class="col-lg-12">
                        <app-post></app-post>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
  }
}
