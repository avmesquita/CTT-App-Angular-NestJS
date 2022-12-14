import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  // tslint:disable-next-line: typedef
  add(message: string) {
    this.messages.push(message);
    setTimeout( ()=> {
      this.clear();
    },5000);
  }

  // tslint:disable-next-line: typedef
  clear() {
    this.messages = [];
  }

  constructor() { }

}
