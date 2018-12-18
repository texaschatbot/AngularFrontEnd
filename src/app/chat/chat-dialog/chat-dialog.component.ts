import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { HelpService } from '../help.service';
import { HelpSection } from '../help.section';

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
  helpSections: HelpSection[];
  


  constructor(private chat: ChatService, private help: HelpService) {
    
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    this.helpSections = this.help.helpSections;
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
