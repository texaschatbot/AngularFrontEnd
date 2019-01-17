import { Component, Input } from '@angular/core';
import { VoteService } from '../vote.service';
import { FeedbackSection } from '../feedback.section';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  @Input()
  feedbackSection: FeedbackSection;

  constructor(private voteService: VoteService) {
    
  }


  openModalDialog() {
    document.getElementById('feedbackButton').style.display = "none";
    this.feedbackSection.display = 'block'; //Set block css  

  }

  closeModalDialog() {
    this.feedbackSection.display1 = "none";
    this.resetFeedbackForm();

  }

  postComments() {
    this.voteService.postComments(this.feedbackSection.feedback, this.feedbackSection.rating, this.feedbackSection.ratingResponse, this.feedbackSection.ratingAll);
    this.resetFeedbackForm();
    this.feedbackSection.display1 = 'block';
  }

  check() {
    return (this.feedbackSection.feedback == ""
      && this.feedbackSection.rating == null
      && this.feedbackSection.ratingAll == null
      && this.feedbackSection.ratingResponse == null);
  }

  doRateResponse(ratingResponse: number): void {
    this.feedbackSection.ratingResponse = ratingResponse;
  }


  doRateAll(ratingAll: number): void {
    this.feedbackSection.ratingAll = ratingAll;
  }

  doRateUI(rating: number): void {
    this.feedbackSection.rating = rating;
  }
  resetFeedbackForm() {
    this.feedbackSection.feedback = "";
    this.feedbackSection.rating = null;
    this.feedbackSection.ratingResponse = null;
    this.feedbackSection.ratingAll = null;
    document.getElementById('feedbackButton').style.display = "block";
    this.feedbackSection.display = 'none';
    this.feedbackSection.display1 = 'none';
  }
}
