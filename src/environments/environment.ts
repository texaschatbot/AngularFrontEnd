// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  dialogflow: {
    angularBot: 'da02ce109c0f47149faa82d32c13f028'
  },
  
  firebase: {
    apiKey: 'AIzaSyCk2JUcyfsmY4-gsLqY4puJZ1jU_ix2J98',
    authDomain: 'eos-on-chat.firebaseapp.com',
    databaseURL: 'https://eos-on-chat.firebaseio.com',
    projectId: 'eos-on-chat',
    storageBucket: 'eos-on-chat.appspot.com',
    messagingSenderId: '148568160365'
}
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
