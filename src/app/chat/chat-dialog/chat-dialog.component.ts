import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  messagesCount: number;
  


  constructor(private chat: ChatService) {
    
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
  }

  sendMessage() {
    if (this.formValue.trim() !== '') {
      this.chat.converse(this.formValue);
    }

    this.formValue = '';
  }

  ngAfterViewChecked() {
    try {
      var objDiv = document.getElementById("style-2");
      objDiv.scrollTop = objDiv.scrollHeight;
    } catch (err) { }
  }

  sendMessageFromLink(message: string) {

    this.formValue = message;
    this.sendMessage();
  }
}
