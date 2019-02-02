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

  user: Users;

  constructor(
    private newPost: NewpostService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.user = {
        userid: parseInt(localStorage.getItem('token')),
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        firstname: localStorage.getItem('firstName'),
        lastname: localStorage.getItem('lastName'),
        profilePicturePath: localStorage.getItem('profilePicturePath')
    };
  }

  createPost(data: any) {
    let post: Posts = {
      postid: null,
      userid: parseInt(localStorage.getItem('token')),
      textcontents: data.value,
      imagelocation: null,
      repostid: -1,
      user: this.user,
      postinteractions: null
    }

    this.newPost.createPost(post);
    window.location.reload();

//     const view = document.getElementById('zmew')
//     view.innerHTML = `<app-navbar> </app-navbar>
//     <div class="wrapper">
//         <app-sidemenu></app-sidemenu>
//         <div id="content">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-lg-12">
//                         <app-createpost></app-createpost>
//                     </div>
//                 </div>
//                 <hr>
//                 <div class="row">
//                     <div class="col-lg-12">
//                         <app-post></app-post>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>`;
   }
}
