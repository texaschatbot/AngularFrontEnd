import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { HelpService } from '../help.service';
import { HelpSection } from '../help.section';
import { VoteService } from '../vote.service';

@Component({
  selector: 'chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  messagesCount: number;
  helpSections: HelpSection[];
  


  constructor(private chat: ChatService, private help: HelpService, private vote: VoteService) {
    
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    this.helpSections = this.help.helpSections;
  }

  sendMessage() {
    if (this.formValue.trim() !== '') {
      this.chat.converse(this.formValue);

      //Update Total Message Count
      this.vote.incrementTotalCount();
    }

    this.formValue = '';
  }

  ngAfterViewChecked() {
    try {
      var objDiv = document.getElementById("style-2");
      objDiv.scrollTop = objDiv.scrollHeight;
    } catch (err) { }
  }

  topFunction() {
    var objDiv = document.getElementById('style-2');
    objDiv.scrollTop = 0;

  }

  bottomFunction() {
    var objDiv = document.getElementById('style-2');
    //objDiv.scrollTop = this.container.scrollHeight;

  }
}
