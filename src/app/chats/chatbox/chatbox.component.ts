import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  name: string = 'User';
  messageText: string = '';
  // messages: Message[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.message$.subscribe(message => console.log(message));
  }

  sendMessage() {
    let message: Message = {
      user: this.name,
      content: this.messageText,
      time: new Date().toLocaleTimeString()
    }
    this.messageService.broadcastMessage(message);
  }
}
