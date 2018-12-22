import { Component } from '@angular/core';
import { ChatboxComponent } from '../chatbox/chatbox.component';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {

  constructor(private chatbox : ChatboxComponent) { }

  sendMessageFromLink(message: string) {
    this.chatbox.formValue = message;
    this.chatbox.sendMessage();
  }
}
