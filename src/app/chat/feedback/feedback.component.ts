import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Output() hidePopup = new EventEmitter();
  isDisplayPopUp: boolean = true;

  hideFeedBackForm() {
    this.isDisplayPopUp = false;
    this.hidePopup.emit(this.isDisplayPopUp);
  }


  submitComment() {



    this.hideFeedBackForm();
  }
}
