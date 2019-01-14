import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { ChatService } from '../chat.service';
import 'rxjs/add/operator/scan';
import { VoteService } from '../vote.service';
import { FeedbackComponent } from '../feedback/feedback.component';
import { FeedbackSection } from '../feedback.section';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent {
  feedbackSection: FeedbackSection = new FeedbackSection('none', 'none', 0, 0, 0);

  @HostListener('document:keydown', ['$event'])
  onKeyDownHandler(event: KeyboardEvent) {
    if (event.key === "Escape") {
      this.feedbackSection.display = 'none';
      document.getElementById('feedbackButton').style.display = "block";
      this.feedbackSection.rating = null;
      this.feedbackSection.ratingResponse = null;
      this.feedbackSection.ratingAll = null;
    }
  }


  showPopup(isDisplayPopUp) {
    this.isDisplayPopUp = isDisplayPopUp;
    ////////////
    document.getElementById('feedbackButton').style.display = "none";
    this.feedbackSection.display = 'block';
  }

  hidePopup() {
    this.isDisplayPopUp = false;
    this.feedbackSection.display = "none";
    this.feedbackSection.display1 = "none";
  }
}
