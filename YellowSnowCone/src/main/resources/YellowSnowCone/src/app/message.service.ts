import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  userId: number = 1;

  messages: string[] = [];

  private messagesUrl = 'http://localhost:8080/messagesById';

  constructor(
    private http: HttpClient
  ) { }

  getMessages (): Observable<Message[]> {
    return this.http.get<Message[]>(this.messagesUrl);
  }

  getMessagesById (): Observable<Message[]> {
    return this.http.post<Message[]>(this.messagesUrl, this.userId);
  }
}
