import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'card1',
  templateUrl: './card1.component.html',
  styles: [`
  :host {
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    border: 0px solid black;
    border-radius: 8px;
  }
  `]
})
export class Card1Component implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  messagesCount: number;

  constructor(private chat: ChatService) { }

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
}
