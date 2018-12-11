import { Component } from '@angular/core';
import { Card1Component } from '../card1/card1.component';

@Component({
  selector: 'card2',
  templateUrl: './card2.component.html',
  styles: [`
  :host {
    display: block;
    padding-right: 16px;
    padding-left: 16px;
    border: 0px solid black;
    border-radius: 8px;
  }
  `]
})
export class Card2Component {

  constructor(private card1: Card1Component) {

  }

  sendMessageFromLink(message: string) {
    
    this.card1.formValue = message;
    this.card1.sendMessage();
  }




}
