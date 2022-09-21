import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Message } from '../chats/messages/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messageSubject = new Subject<Message>();
  message$ = this.messageSubject.asObservable();

  constructor() { }
}
