import { Injectable } from '@angular/core';
import { HelpSection } from './help.section';

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  _helpSections: HelpSection[];



  constructor() {
    this._helpSections = new Array<HelpSection>();
    this._helpSections.push(new HelpSection("wikiHeader", "wiki", "T2 Wiki",
      ["How to setup workspace for batch development?"
      , "Where will i get all developer guides?"
      , "How to begin with batch development?"]));
  }

  get helpSections() {

    
    return this._helpSections;
  }

}
