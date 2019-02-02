import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Users } from '../users';
import { StorageService } from '../storage.service';
import { FriendService } from '../friend.service';
import { Friend } from '../friend';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.css']
})
export class SearchuserComponent implements OnInit {

  searchResults: Users[];

  matchingUsers: Users[] = [];

  friends: Friend[];

  friendToAdd: Friend;

  userId: number = 0;

  user1: Users;

  user2: Users;

  users: Users[];

  constructor(private userService: UserService, private storageService: StorageService, private friendService: FriendService) { }

  ngOnInit() {
    this.searchResults = this.storageService.getSearchResults();
    this.friendService.getFriendsById().subscribe(data => this.friends = data);
    this.userService.getUsers().subscribe(data => this.users = data);
    this.userId = this.userService.getLoggedInUsers()[0].userid;
    // this.userService.getUsers().subscribe(data => this.user = data,(error: any) => console.log(error),() => this.storageService.setUser(this.user));
  }

  search(searchContents) {
    this.searchResults = [];
    this.matchingUsers = [];
    let properSearchContents = searchContents.value.toLowerCase();
    properSearchContents = properSearchContents.split(' ');
    for (let i = 0; i < properSearchContents.length; i++) {
      properSearchContents[i] = properSearchContents[i].charAt(0).toUpperCase() + properSearchContents[i].slice(1);
    }
    properSearchContents = properSearchContents.join(' ');
    if (searchContents.value === "") {
      alert("Please enter the name of someone you would like to lookup!");
    } else {
      for (let i of this.users) {
        if (i.firstname === properSearchContents || i.lastname === properSearchContents || (i.firstname + " " + i.lastname) === properSearchContents) {
          this.matchingUsers.push(i);
        }
      }
    }
    if (this.matchingUsers.length === 0) {
      alert("There are no users with the name you specified. Try again!");
    } else {
      this.searchResults = this.matchingUsers;
    }

    this.searchResults.reverse();

  }

  addFriend(userId: any) {
    if (userId === this.userId) {
      alert("You cannot add yourself!");
    } else {
      let alreadyFriends: boolean = false;
      if (this.friends) {
        for (let i of this.friends) {
          if (this.userId === i.userid1) {
            if (userId === i.userid2) {
              alreadyFriends = true;
            }
          } else if (this.userId === i.userid2) {
            if (userId === i.userid1) {
              alreadyFriends = true;
            }
          }
        }
        for (let i of this.users) {
          if (userId === i.userid) {
            this.user2 = i;
          }
        }
      }

    

    if(alreadyFriends){
      alert("You are already friends with this user!");
    } else {

      this.user1 = this.userService.getLoggedInUsers()[0];

      this.friendToAdd = {
        relationid: null,
        userid1: this.userId,
        userid2: userId,
        status: 1,
        user1: this.user1,
        user2: this.user2
      }

      this.friendService.addFriend(this.friendToAdd);
      this.friends.push(this.friendToAdd);
      alert("Friend added!");
    }
    }
  }

  clearMessageRefresh(){
    clearInterval(this.storageService.getMessageTimerId());
  }
}