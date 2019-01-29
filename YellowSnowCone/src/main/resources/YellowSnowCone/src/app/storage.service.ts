import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public scope: Array<any> = [];

  public firstName: string;

  constructor() { }

  public getScope(): Array<any> {
    return this.scope;
  }

  public setScope(scope: any): void {
    this.scope = scope;
  }

  public getFirstName(): string {
    return this.firstName;
  }
}
