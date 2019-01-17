import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Message {
  constructor(public contant: string, public sentBy: string, public showtime: number, public subMessages?: String[]) {
  }
}

export class User {
  constructor(
    public id: string,
    public name: string,
    public username: string,
    public email: string
  ) { }
}
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });

  conversation = new BehaviorSubject<Message[]>([]);

  update(msg: Message) {
    this.conversation.next([msg]);
  }

  converse(msg: string) {
    const userMessage = new Message(msg, 'You', Date.now());
    this.update(userMessage);

    return this.client.textRequest(msg).then(res => {
      let speech = res.result.fulfillment.speech;
      let subMessages: String[];
      let showtime: number = Date.now();
      if (speech === '') {

        subMessages = []
        for (let i = 0; i < res.result.fulfillment.messages.length; i++) {

          subMessages.push(res.result.fulfillment.messages[i].speech);
          subMessages.push(res.result.fulfillment.messages[i].showtime);

        }
      }
      const botMessage = new Message(speech, 'TeXA', Date.now(), subMessages);
      this.update(botMessage);
    });
  }
}
