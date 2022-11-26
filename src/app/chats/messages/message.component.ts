import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'cr-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() message!: Message;
  @Input() receiver!: string;
  isSender: boolean = false;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    this.isSender = this.message.sender === this.receiver;
  }

  deleteMe() {
    this.delete.emit(this.message.id);
  }

}
