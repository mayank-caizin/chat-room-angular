import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';
import {Subscription} from 'rxjs';
import { ChatService } from 'src/app/shared/chat.service';
import { User } from './user';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit{
  @Input() user!: User;
  @Output() leave: EventEmitter<number> = new EventEmitter<number>();

  newMessage: string = '';
  sub!: Subscription;
  active: boolean = true;
  myMessages: Message[] = [];

  constructor(private chatService: ChatService ,private messageService: MessageService) {}

  ngOnInit(): void {
    this.myMessages = this.chatService.fetchChat(this.user.name);
    this.sub = this.messageService.message$.subscribe(message => this.receiveMessage(message));
  }

  sendMessage() {
    if(!this.newMessage) return;

    let message: Message = {
      id: Math.random(),
      sender: this.user.name,
      content: this.newMessage,
      time: new Date()
    }
    this.newMessage = '';
    this.messageService.broadcastMessage(message);
  }

  receiveMessage(message: Message) {
    this.myMessages.push(message);
  }

  deleteMessage(id: number) {
    this.myMessages = this.myMessages.filter(msg => msg.id !== id);
  }

  leaveChat() {
    this.chatService.saveChat(this.user.name, this.myMessages);
    this.sub.unsubscribe();
    this.leave.emit(this.user.id);
    // this.active = false;
  }
}
