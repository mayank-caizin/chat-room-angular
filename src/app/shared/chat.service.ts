import { Injectable } from '@angular/core';
import { Message } from '../chats/messages/message';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() {
    localStorage.clear();
  }

  fetchChat(username: string): Message[] {
    let messages = JSON.parse(localStorage.getItem(username) || "[]");

    for(let i: number = 0; i < messages.length; i++) {
      messages[i].time = new Date(messages[i].time);
    }

    return messages;
  }

  saveChat(username: string, myMessages: Message[]) {
    localStorage.setItem(username, JSON.stringify(myMessages));
  }
}
