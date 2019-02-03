import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { addMessageStatus } from './addMessageStatus';
import { StorageService } from './storage.service';
import { UserService } from './user.service';

const httpTextOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // userId: number = this.userService.getLoggedInUsers()[0].userid;
  userId = parseInt(localStorage.getItem('token'));

  addMessageStatus: addMessageStatus;

  messages: string[] = [];

  private messagesByIdUrl = this.storage.getBaseUrl() + "messagesById";

  private addMessagesUrl = this.storage.getBaseUrl() + "addMessage";

  constructor(
    private http: HttpClient,
    private storage: StorageService,
    private userService: UserService
  ) { }

  // getMessages (): Observable<Message[]> {
  //   return this.http.get<Message[]>(this.messagesUrl);
  // }

  getMessagesById(): Observable<Message[]> {
    return this.http.post<Message[]>(this.messagesByIdUrl, this.userId);
  }

  // addMessage (userId1, userId2, textContents) {
  //   this.http.post<addMessageStatus>(this.addMessagesUrl, userId1 + ";" + userId2 + ";" + textContents).subscribe();
  // }

  addMessage(message) {
    this.http.post<addMessageStatus>(this.addMessagesUrl, message).subscribe();
  }
}
