import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  constructor() { }
  static emailValidator(control) {
    // RFC 2822 compliant regex
    if (control.value.match(/^[a-zA-Z0-9_.+-]{1,}@[a-zA-Z0-9-]{1,}\.[a-zA-Z0-9-.]{1,}$/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  };
}