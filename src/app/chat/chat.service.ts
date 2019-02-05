import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

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
export class DefaultIntent {
  constructor(
    public message: string,
    public id: string,
    public name: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private feedbackCollection: AngularFirestoreCollection<any>;

  constructor(private afs: AngularFirestore) {
    this.feedbackCollection = this.afs.collection<any>('/defaultIntentResponse');
  }

  readonly token = environment.dialogflow.angularBot;
  readonly client = new ApiAiClient({ accessToken: this.token });
  userMessage = new Message("", 'You', Date.now());
  conversation = new BehaviorSubject<Message[]>([]);
  defaultIntentResponseList: DefaultIntent[];
  update(msg: Message) {
    this.conversation.next([msg]);

  }



  converse(msg: string) {
    this.userMessage = new Message(msg, 'You', Date.now());
    let message: any = msg;
    this.update(this.userMessage);
    return this.client.textRequest(msg).then(res => {
      let speech = res.result.fulfillment.speech;
      if (res.result.metadata.intentName == 'Default Fallback Intent') {
        console.log(message);
        this.defaultResponseIntent(message, res.result.metadata.intentId, res.result.metadata.intentName);

      }
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



  defaultResponseIntent(message: string, intentId: string, intentName: string) {
    let defaultIntentDetails = {};
    this.feedbackCollection.doc(`intentDetails`).ref.get().then((doc) => {
      defaultIntentDetails['message'] = message;
      defaultIntentDetails['intent_Id'] = intentId;
      defaultIntentDetails['intent_Name'] = intentName;
      var currentValue = doc.data().intentCount;
      currentValue = currentValue + 1;
      let a = {};
      a['intentCount'] = currentValue;
      this.feedbackCollection.doc(`intentDetails`).update(a);
      this.feedbackCollection.doc(`intentDetails`).collection('defaultIntentDetails').add(defaultIntentDetails);
    });

  }



}
