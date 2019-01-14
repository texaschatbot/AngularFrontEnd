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

    this._helpSections.push(new HelpSection("MedicalSupport", "MS", "Medical Support",
      ["Where should I can contact for medical related queries?"
        , "In what health insurance coverage is an employer required to enroll the child(ren)?"
        , "Is it mandatory to have employers name registered in NMSN?"]));

    this._helpSections.push(new HelpSection("OAGEmployer", "OAGEMP", "OAG Employer",
      ["What is FEIN?"
        , "Can I use that person's user ID and password of the person who has left the company for online reporting"
        , "I got an email that my company cannot be validated, what shall I do next to get it validated ?"]));

    this._helpSections.push(new HelpSection("ChildSupport", "CS", "Child Support",
      ["Who is eligible for Child Support Services?"
        , "Who can be Custodial Parent?"
        , "What if child is in foster care, is he eligible for child support?"]));
  }

  get helpSections() {
    return this._helpSections;
  }
}
