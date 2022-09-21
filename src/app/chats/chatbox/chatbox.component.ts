import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';
import { MessageComponent } from '../messages/message.component';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  @ViewChild('messageContainer', {read: ViewContainerRef}) messageContainer!: ViewContainerRef;

  name: string = 'User';
  messageText: string = '';
  // messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.message$.subscribe(message => this.receiveMessage(message));
  }

  sendMessage() {
    let message: Message = {
      user: this.name,
      content: this.messageText,
      time: new Date().toLocaleTimeString()
    }
    this.messageText = '';
    this.messageService.broadcastMessage(message);
  }

  receiveMessage(message: Message) {
    console.log(message);
    const msg = this.messageContainer.createComponent(MessageComponent);
    msg.instance.message = message;
  }

  leaveChat() {
    // this.messageService.messageSubject.unsubscribe();
  }
}
