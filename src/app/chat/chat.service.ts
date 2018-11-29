import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';



export class Message {
  constructor(public contant: string, public sentBy: string, public subMessages?: String[]){
  }
 }


@Injectable({
  providedIn: 'root'
})
export class ChatService {
  

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({accessToken: this.token});
  
  conversation = new BehaviorSubject<Message[]>([]);

  constructor() { }

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg : string) {
    const userMessage = new Message(msg, 'You');
    this.update(userMessage);

    return this.client.textRequest(msg).then(res => {
      let speech = res.result.fulfillment.speech;
      let subMessages: String[]
      if (speech === '') {

        subMessages = []
        for (let i = 0; i < res.result.fulfillment.messages.length; i++){

          subMessages.push(res.result.fulfillment.messages[i].speech)
        }
      }
      const botMessage = new Message(speech, 'TeXA', subMessages);
      this.update(botMessage);
    });
  }
}
