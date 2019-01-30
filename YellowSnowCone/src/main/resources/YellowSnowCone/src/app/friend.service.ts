import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';
import { Friend } from './friend';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private friendsByIdUrl : string = "http://localhost:8080/relationsById";

  private addFriendUrl : string = "http://localhost:8080/addFriend";

  userId: number = 1;

  constructor(
    private http: HttpClient,
    private storage: StorageService) { }

    getFriendsById (): Observable<Friend[]> {
      return this.http.post<Friend[]>(this.friendsByIdUrl, this.userId);
    }

    addFriend(friend) {
      this.http.post<Friend>(this.addFriendUrl, friend).subscribe();
    }
}
