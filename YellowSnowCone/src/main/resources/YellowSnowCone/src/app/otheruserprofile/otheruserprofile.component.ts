import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { PostsService } from '../posts.service';
import { Posts } from '../posts';
import { PostInteractions } from '../postinteractions';
import { UserService } from '../user.service';
import { NewpostService } from '../newpost.service';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';
import { Users } from '../users';


@Component({
  selector: 'app-otheruserprofile',
  templateUrl: './otheruserprofile.component.html',
  styleUrls: ['./otheruserprofile.component.css']
})
export class OtheruserprofileComponent implements OnInit {

  constructor(private storage: StorageService, private postsService: PostsService, private userService: UserService, private newpostService: NewpostService, private friendService: FriendService) { }

  firstName: string = '';

  lastName: string = '';

  userid: number = 0;

  posts = [];
  postInteractionsArray: PostInteractions[];
  postInteraction: PostInteractions;
  reposts: Posts;
  friends: Friend[];
  users: Users[];

  post: {
    content: string,
    name: string,
    id: number,
    id1: any,
    id2: any,
    postinteractions: PostInteractions[],
    src1: string,
    src2: string,
    likecount: number,
    dislikecount: number
  };

  interactionIdAndType: {
    postid: number,
    type: number
  };

  interactionIdAndTypeArray = [];

  postContent = [];

  count: number;
  friendcount: number;
  a = [];

  // userId = this.userService.getLoggedInUsers()[0].userid;
  userId = parseInt(localStorage.getItem('token'));

  ngOnInit() {
    this.firstName = localStorage.getItem("otherFirstName");
    this.lastName = localStorage.getItem("otherLastName");
    this.userid = parseInt(localStorage.getItem("otherUserId"));

    this.postsService.getPostsById(this.userid).subscribe(data => this.posts = data,
      (error: any) => console.log(error), () => this.loadPosts());
  }

  loadPosts() {
    console.log('inside loadposts');
    for (const i of this.posts) {
      this.post = {
        content: i.textcontents,
        name: i.user.firstname + " " + i.user.lastname,
        id: i.postid,
        id1: i.postid + ' like',
        id2: i.postid + ' dislike',
        postinteractions: i.postinteractions,
        src1: '../../assets/snowconeshadow.png',
        src2: '../../assets/snowconeshadowupsidedown.png',
        likecount: 0,
        dislikecount: 0
      }

      this.a.push(this.post);
      this.postContent.push(this.post);
    }
    console.log('count2: ' + this.count);
    console.log('length2: ' + this.friendcount);
    if (this.count === this.friendcount) {
      console.log('content: ' + JSON.stringify(this.postContent));
      this.loadLikesAndDislikes();
    }
  }

  loadLikesAndDislikes() {
    for (let i of this.a) {
      for (let j of i.postinteractions) {
        if (this.userId === j.userid) {
          if (j.type === 1) {
            i.src1 = '../../assets/snowconelikeshadow.png';
          } else if (j.type === 0) {
            i.src2 = '../../assets/snowconedislikeshadowupsidedown.png';
          }

        }

        console.log("TESTTTT: " + JSON.stringify(j));

        if (j.type === 1) {
          i.likecount++;
        } else if (j.type === 0) {
          i.dislikecount++;
        }

      }
    }
    this.a.splice(0);
  }

  like(likeimg: any): void {
    const img = document.getElementById(likeimg) as HTMLImageElement;
    const likecount = document.getElementById('liked');
    const dislikecount = document.getElementById('disliked');

    let postId = likeimg.split(" ")[0];
    let dislikeimg = postId + ' dislike';
    postId = +postId;

    const img2 = document.getElementById(dislikeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadow.png') {

      if (img2.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
        img2.src = '../../assets/snowconeshadowupsidedown.png';

        for (let i of this.postContent) {
          if (i.id === postId) {
            i.dislikecount--;
            dislikecount.innerHTML = `${i.dislikecount}`;
          }
        }

        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconelikeshadow.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 1
      }

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.likecount++;
          likecount.innerHTML = `${i.likecount}`;
        }
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconelikeshadow.png') {
      img.src = '../../assets/snowconeshadow.png';
      this.postsService.deletePostInteraction(postId, this.userId);

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.likecount--;
          likecount.innerHTML = `${i.likecount}`;
        }
      }

    }
  }

  dislike(dislikeimg: any): void {
    const img = document.getElementById(dislikeimg) as HTMLImageElement;
    const likecount = document.getElementById('liked');
    const dislikecount = document.getElementById('disliked');

    let postId = dislikeimg.split(" ")[0];
    let likeimg = postId + ' like';
    postId = +postId;

    const img2 = document.getElementById(likeimg) as HTMLImageElement;

    if (img.src.split('/').pop() === 'snowconeshadowupsidedown.png') {

      if (img2.src.split('/').pop() === 'snowconelikeshadow.png') {
        img2.src = '../../assets/snowconeshadow.png';

        for (let i of this.postContent) {
          if (i.id === postId) {
            i.likecount--;
            likecount.innerHTML = `${i.likecount}`;
          }
        }

        this.postsService.deletePostInteraction(postId, this.userId);
      }

      img.src = '../../assets/snowconedislikeshadowupsidedown.png';

      this.postInteraction = {
        interactionid: null,
        postid: postId,
        userid: this.userId,
        type: 0
      }

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.dislikecount++;
          dislikecount.innerHTML = `${i.dislikecount}`;
        }
      }

      this.postsService.addPostInteraction(this.postInteraction);

    } else if (img.src.split('/').pop() === 'snowconedislikeshadowupsidedown.png') {
      img.src = '../../assets/snowconeshadowupsidedown.png';
      this.postsService.deletePostInteraction(postId, this.userId);

      for (let i of this.postContent) {
        if (i.id === postId) {
          i.dislikecount--;
          dislikecount.innerHTML = `${i.dislikecount}`;
        }
      }
    }
  }

  repost(postid: any): void {
    new Promise((reject) => {
      this.postsService.getPostByPostId(postid).toPromise().then(data => {
        this.reposts = data;

        let user = {
          userid: parseInt(localStorage.getItem('token')),
          email: localStorage.getItem('email'),
          password: localStorage.getItem('password'),
          firstname: localStorage.getItem('firstName'),
          lastname: localStorage.getItem('lastName'),
          profilePicturePath: localStorage.getItem('profilePicturePath'),
          enabled: true
      };

        let post: Posts = {
          postid: null,
          userid: this.userId,
          textcontents: this.reposts.textcontents,
          imagelocation: this.reposts.imagelocation,
          repostid: this.reposts.postid,
          user: user,
          postinteractions: null
        };
        this.newpostService.createPost(post)
        alert("Reposted!");
      },
        msg => {
          reject(msg)
        });
    });
  }

}
