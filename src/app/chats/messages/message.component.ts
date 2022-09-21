import { Component, OnInit } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'cr-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message!: Message;
  isSender: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
