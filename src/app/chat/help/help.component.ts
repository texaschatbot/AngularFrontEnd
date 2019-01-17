import { Component, OnInit } from '@angular/core';
import { ChatboxComponent } from '../chatbox/chatbox.component';
import { HelpService} from '../help.service';
import { HelpSection } from '../help.section';

@Component({
  selector: 'help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {


  helpSections: HelpSection[];

  constructor(private chatbox: ChatboxComponent, private help: HelpService) { }

  ngOnInit() {
    this.helpSections = this.help.helpSections;
  }


  sendMessageFromLink(message: string) {
    this.chatbox.formValue = message;
    this.chatbox.sendMessage();
  }
}
