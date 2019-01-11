import { Component, OnInit, AfterViewChecked, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';
import { HelpService } from '../help.service';
import { HelpSection } from '../help.section';
import { VoteService } from '../vote.service';



@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})



export class ChatDialogComponent implements OnInit, AfterViewChecked {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @ViewChild('feedback') myInputVariable: ElementRef;
  messages: Observable<Message[]>;
  formValue: string;
  messagesCount: number;
  helpSections: HelpSection[];
  container: HTMLElement;
  display = 'none';
  display1 = 'none';
  rating: number;
  ratingResponse: number;
  ratingAll: number;
  isOpen: boolean;
  inputName: any;
  inputName1: any;
  inputName2: any;


  constructor(private chat: ChatService, private help: HelpService, private voteService: VoteService) {
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.display = 'none';
      document.getElementById('feedbackButton').style.display = "block";
      this.resetFeedbackForm();
    }
  }

  ngOnInit() {
    this.messages = this.chat.conversation.asObservable()
      .scan((acc, val) => acc.concat(val));
    this.helpSections = this.help.helpSections;

  }
  onClick1(ratingResponse: number): void {
    this.ratingResponse = ratingResponse;

  }

  onClick2(ratingAll: number): void {
    this.ratingAll = ratingAll;

  }

  onClick(rating: number): void {
    this.rating = rating;
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

  topFunction() {
    var objDiv = document.getElementById('style-2');
    objDiv.scrollTop = 0;

  }

  bottomFunction() {
    var objDiv = document.getElementById('style-2');
    objDiv.scrollTop = this.container.scrollHeight;

  }

  openModalDialog() {
    document.getElementById('feedbackButton').style.display = "none";
    this.display = 'block'; //Set block css  

  }

  closeModalDialog() {
    this.display = 'none'; //set none css after close dialog
    this.display1 = 'none';
    document.getElementById('feedbackButton').style.display = "block";
    this.resetFeedbackForm();
  }

  postComments(feedback) {
    this.voteService.postComments(feedback, this.rating, this.ratingAll, this.ratingResponse);
    this.closeModalDialog();
    this.display1 = 'block';
  }

  check(feedback) {
    if (feedback == "" && this.rating == null && this.ratingAll == null && this.ratingResponse == null) {
      return true;
    }
    else {
      return false;
    }

  }

  resetFeedbackForm() {
    this.myInputVariable.nativeElement.value = "";
    this.rating = null;
    this.ratingResponse = null;
    this.ratingAll = null;
  }


}






