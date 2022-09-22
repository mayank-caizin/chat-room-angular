import { Component, ViewChild, ViewContainerRef, OnInit, ComponentRef } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';
// import { MessageComponent } from '../messages/message.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit{
  @ViewChild('messageContainer', {read: ViewContainerRef}) messageContainer!: ViewContainerRef;

  name: string = '';
  newMessage: string = '';
  sub!: Subscription;
  isDisabled: boolean = false;
  myComponentRef!: ComponentRef<ChatboxComponent>;
  myMessages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.sub = this.messageService.message$.subscribe(message => this.receiveMessage(message));
  }

  sendMessage() {
    if(!this.newMessage) return;

    let message: Message = {
      sender: this.name,
      content: this.newMessage,
      time: new Date()
    }
    this.newMessage = '';
    this.messageService.broadcastMessage(message);
  }

  receiveMessage(message: Message) {
    this.myMessages.push(message);
    // const msg = this.messageContainer.createComponent(MessageComponent);
    // msg.instance.message = message;
    // msg.instance.isSender = (message.sender === this.name);
  }

  leaveChat() {
    this.sub.unsubscribe();
    this.myComponentRef.destroy();
    // this.isDisabled = true;
  }
}
