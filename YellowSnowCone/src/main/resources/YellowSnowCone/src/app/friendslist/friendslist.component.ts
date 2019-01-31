import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';
import { UserService } from '../user.service';

@Component({
  selector: 'app-friendslist',
  templateUrl: './friendslist.component.html',
  styleUrls: ['./friendslist.component.css']
})
export class FriendslistComponent implements OnInit {

  friends: Friend[] = [];

  userid: number = 0;

  users = [];

  constructor(private friendService: FriendService, private userService : UserService) { }

  ngOnInit() {
    this.friendService.getFriendsById().subscribe(data => this.friends = data,(error: any) => console.log(error),() => this.loadFriends());
    this.userid = this.userService.getLoggedInUsers()[0].userid;
  }

  loadFriends(){
    if(this.friends){
      for(let i of this.friends){
        if(this.userid === i.userid1){
          this.users.push(i.user2);
        } else if(this.userid === i.userid2){
          this.users.push(i.user1);
        }
      }
    }

    this.users.reverse();
    
  }

}
