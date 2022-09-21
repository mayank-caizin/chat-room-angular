import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { Message } from '../messages/message';

@Component({
  selector: 'cr-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  // @Input() name: string = 'User';
  name: string = 'User';
  messages: Message[] = [];

  // constructor(name: string) {
  //   this.name = name;
  // }

  ngOnInit(): void {
  }

}
