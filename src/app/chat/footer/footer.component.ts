import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  @Output() displayPopup = new EventEmitter();
  isDisplayPopUp : boolean = false;

  showFeedBackForm() {
    this.isDisplayPopUp = true;
    this.displayPopup.emit(this.isDisplayPopUp);
  }
}
