import { Component, Output, EventEmitter, ElementRef, ViewChild, Input, OnInit } from '@angular/core';
import { VoteService } from '../vote.service';
import { FeedbackSection } from '../feedback.section';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Output() hidePopup = new EventEmitter();
  isDisplayPopUp: boolean = true;

  @Input()
  formValue: string;
 
  messagesCount: number;
  container: HTMLElement;
  isOpen: boolean;
  inputName: any;
  inputName1: any;
  inputName2: any;

  @Input()
  feedbackSection: FeedbackSection;


  constructor(private voteService: VoteService) {
    
  }

  ngOnInit() {
    console.log(this.feedbackSection);
  }


  hideFeedBackForm() {
    this.isDisplayPopUp = false;

    let response = {
      'isDisplayPopUp': this.isDisplayPopUp,
      'display': this.feedbackSection.display,
      'display1': this.feedbackSection.display1
    };

    this.hidePopup.emit(response);
  }


  submitComment() {
    this.hideFeedBackForm();
  }


  openModalDialog() {
    document.getElementById('feedbackButton').style.display = "none";
    this.feedbackSection.display = 'block'; //Set block css  

  }

  closeModalDialog() {
    document.getElementById('feedbackButton').style.display = "block";
    let response = {
      'isDisplayPopUp': this.isDisplayPopUp,
      'display': this.feedbackSection.display,
      'display1': this.feedbackSection.display1
    };

    this.hidePopup.emit(response);

  }

  postComments() {
    this.voteService.postComments(this.formValue, this.feedbackSection.rating, this.feedbackSection.ratingAll, this.feedbackSection.ratingResponse);
    this.feedbackSection.display = 'none'; //set none css after close dialog
    document.getElementById('feedbackButton').style.display = "block";
    this.resetFeedbackForm();
    this.feedbackSection.display1 = 'block';
  }

  check() {
    if (this.formValue == "" && this.feedbackSection.rating == null && this.feedbackSection.ratingAll == null && this.feedbackSection.ratingResponse == null) {
      return true;
    }
    else {
      return false;
    }
  }

  onClick1(ratingResponse: number): void {
    this.feedbackSection.ratingResponse = ratingResponse;

  }


  onClick2(ratingAll: number): void {
    this.feedbackSection.ratingAll = ratingAll;

  }

  onClick(rating: number): void {
    this.feedbackSection.rating = rating;
  }
  resetFeedbackForm() {
    
    this.formValue = "";
    this.feedbackSection.rating = null;
    this.feedbackSection.ratingResponse = null;
    this.feedbackSection.ratingAll = null;
  }

  get display() {
    return this.feedbackSection.display;
  }

  get display1() {
    return this.feedbackSection.display1;
  }

  get rating() {
    return this.feedbackSection.rating;
  }

  get ratingAll() {
    return this.feedbackSection.ratingAll;
  }

  get ratingResponse() {
    return this.feedbackSection.ratingResponse;
  }
}
