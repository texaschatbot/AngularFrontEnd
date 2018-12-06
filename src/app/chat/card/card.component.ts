import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chat-card',
  templateUrl: './card.component.html',
  styles: [`
  :host {
    display: block;
    padding: 32px;
    border: 0px solid black;
    border-radius: 8px;
  }
  `]
})
export class CardComponent {

}
