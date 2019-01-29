import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';
import { addMessageStatus } from './addMessageStatus';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  userId: number = 1;

  addMessageStatus: addMessageStatus;

  messages: string[] = [];

  private messagesByIdUrl = 'http://localhost:8080/messagesById';

  private addMessagesUrl = 'http://localhost:8080/addMessage';

  constructor(
    private http: HttpClient,
    private storage: StorageService
  ) { }

  // getMessages (): Observable<Message[]> {
  //   return this.http.get<Message[]>(this.messagesUrl);
  // }

  getMessagesById (): Observable<Message[]> {
    return this.http.post<Message[]>(this.messagesByIdUrl, this.userId);
  }

  // addMessage (userId1, userId2, textContents) {
  //   this.http.post<addMessageStatus>(this.addMessagesUrl, userId1 + ";" + userId2 + ";" + textContents).subscribe();
  // }

  addMessage (message) {
    this.http.post<addMessageStatus>(this.addMessagesUrl, message).subscribe();
  }
}
