import { Component } from '@angular/core';
import { User } from './chats/chatbox/user';

@Component({
  selector: 'cr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Chat Room';
  users: User[] = [];

  private _newUser = '';
  get newUser(): string {
    return this._newUser;
  }
  set newUser(value: string) {
    this._newUser = value;
  }

  createChat() {
    if(!this.newUser) return;

    let user: User = {
      name: this.newUser,
      id: Math.random()
    }

    this.users.push(user);

    this.newUser = '';
  }

  trackUser(index: number, user: User) {
    return user.id;
  }

  removeChat(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
