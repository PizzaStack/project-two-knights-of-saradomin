import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public scope: Array<any> = [];

  public userId: number;

  constructor() { }

  public getScope(): Array<any> {
    return this.scope;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

  public getUserId(): number {
    return this.userId;
  }

  public setUserId(userId: number) {
    this.userId = userId;
  }
}
