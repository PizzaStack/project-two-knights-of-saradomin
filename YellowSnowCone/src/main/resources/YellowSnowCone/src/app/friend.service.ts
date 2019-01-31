import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Friend } from './friend';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private friendsByIdUrl: string = "http://localhost:8080/relationsById";

  private addFriendUrl: string = "http://localhost:8080/addFriend";

  userId: number = this.userService.getLoggedInUsers()[0].userid;

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private userService: UserService) { }

  getFriendsById(): Observable<Friend[]> {
    return this.http.post<Friend[]>(this.friendsByIdUrl, this.userId);
  }

  addFriend(friend) {
    this.http.post<Friend>(this.addFriendUrl, friend).subscribe();
  }
}