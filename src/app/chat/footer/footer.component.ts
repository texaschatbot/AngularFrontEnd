import { Component, Input } from '@angular/core';
import { FeedbackSection } from '../feedback.section';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Input()
  feedbackSection: FeedbackSection;

  showFeedBackForm() {
      document.getElementById('feedbackButton').style.display = "none";
      this.feedbackSection.display = 'block';
  }
}
