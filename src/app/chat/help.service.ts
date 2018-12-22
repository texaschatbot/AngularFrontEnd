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


    this._helpSections.push(new HelpSection("IWOHeader", "IWO", "Income Withholding Order",
      ["How will the employer be notified to withhold part or all of a lump sum payment?"
        , "What is the length of retention for support orders or records concerning withholding?"
        , "When the payment is submitted, does the employer need to identify the payment as a lump sum?"]));


    this._helpSections.push(new HelpSection("NewHireHeader", "NewHire", "New Hire",
      ["Can I report the employee's's ITIN number on the Texas State New Hire Report"
        , "What is considered to be the “date of hire”"
        , "Guide me through the ways to submit employer payroll address"]));
    this._helpSections.push(new HelpSection("VOELHeader", "VOEL", "VOEL",
      ["What are responsibilities of Texas employer related to VOEL?"
        , "Who all are legitimate Texas employer ?”"
        , " Is there any benefit for responding to VOEL"]));

    this._helpSections.push(new HelpSection("Termination", "TER", "Termination",
      ["Would I have to report all of our terminated employees as we have not reported terminations on your website before"
        , "Explain the responsibilities of being an employer on terminations"
        , "Please guide me through the online steps for reporting terminations"]));

  }
  
  get helpSections() {
    return this._helpSections;
  }

}
