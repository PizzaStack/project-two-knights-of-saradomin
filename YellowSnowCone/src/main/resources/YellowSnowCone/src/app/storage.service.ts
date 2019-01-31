import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  baseUrl: string = "http://18.217.201.118:8888";

  searchResults: Users[];

  textContents: string;

  users: Users[];

  userId1: number;

  userId2: number;

  user1: Users;

  user2: Users;

  firstName: string;

  public scope: Array<any> = [];

  public userId: number;

  constructor() { }

  public getScope(): Array<any> {
    return this.scope;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

  public getTextContents(): string {
    return this.textContents;
  }

  public setTextContents(textContents: any): void {
    this.textContents = textContents;
  }

  public getUserId1(): number {
    return this.userId1;
  }

  public setUserId1(userId1: number): void {
    this.userId1 = userId1;
  }

  public getUserId2(): number {
    return this.userId2;
  }

  public setUserId2(userId2: number): void {
    this.userId2 = userId2;
  }

  public getUser1(): Users {
    return this.user1;
  }

  public setUser1(user1: Users): void {
    this.user1 = user1;
  }

  public getUser2(): Users {
    return this.user2;
  }

  public setUser2(user2: Users): void {
    this.user2 = user2;
  }

  public getUser(): Users[] {
    return this.users;
  }

  public setUser(user: Users[]): void {
    this.users = user;
  }

  public getSearchResults(): Users[] {
    return this.searchResults;
  }

  public setSearchResults(user: Users[]): void {
    this.searchResults = user;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }
}