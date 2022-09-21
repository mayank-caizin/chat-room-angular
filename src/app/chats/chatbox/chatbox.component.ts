import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';
import { MessageComponent } from '../messages/message.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit{
  @ViewChild('messageContainer', {read: ViewContainerRef}) messageContainer!: ViewContainerRef;

  name: string = '';
  messageText: string = '';
  sub!: Subscription;
  isDisabled: boolean = false;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.sub = this.messageService.message$.subscribe(message => this.receiveMessage(message));
  }

  sendMessage() {
    if(!this.messageText) return;

    let message: Message = {
      user: this.name,
      content: this.messageText,
      time: new Date().toLocaleTimeString()
    }
    this.messageText = '';
    this.messageService.broadcastMessage(message);
  }

  receiveMessage(message: Message) {
    const msg = this.messageContainer.createComponent(MessageComponent);
    msg.instance.message = message;
    msg.instance.isSender = (message.user === this.name);
  }

  leaveChat() {
    this.sub.unsubscribe();
    this.isDisabled = true;
  }
}
