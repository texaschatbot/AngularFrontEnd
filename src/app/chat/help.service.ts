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
      ["Hi Texa, I am a new joiner. How can you assist me?"
        , "Where to begin with in T2"
        , "What all information are present in T2 Wiki regarding T2 project ?"
        , "Wiki for New Joiners"
        , "Wiki for on call support?"
        , "Where I can find Workspace Setup Guidelines?"
        , "Where I can get help for automation testing setup?"
        , "Where can I find Introductory Information in T2?"
        , "Hi I am new to AppDev , from where can I start ?"
        , "Where I can find link for T2 timesheet?"
        , "Provide technical issues mailing list for the TXOAG-APPDEV-SUPPORT"
        , "What is the link for Application Development notes?"
        , "Help me know more about higher level Batch Model and Architecture"
        , "Provide the wiki page to know about Batch development"
        , "Provide the wiki link for data model"
        , "Where I can find security matrix?"
        , "Provide the link of T2 repository"
        , "What are the prerequisite for using anonymous user support feature?"
        , "Provide the appropriate link for architecture of application"
        , "Link for Architecture Reference Model Overview"
        , "How to View the T2_OLTP Data Model?"
        , "How to separate the application(Batch/Portal) specific logic in the common business service?"
        , "What are the T2_OLTP Data Model Documentation/Standards?"
        , "Tell about T2_LDM Logical Data Model Narrative"
        , "How to configure Email notifications?"
        , "Where I can find Tech Arch Designs?"
        , "What are the Test Phases"
        , "What is the site to manage test questions ?"
        , "What are test Deliverable?"
        , "What is the Automation Approach Document for Batch?"
        , "Where I can find T2 Test User Management?"
        , "From where I can read more about solr?"
        , "PrimeFaces 6.017 upgrade Issue Resolution"
        , "How to Submit a MQ request?"
        , "What are the problems and solution approach for MDBs?"
        , "What are the issue, root cause and solution for L1 Cache?"
        , "How to prepare Interface file IDDs or Designs for Partners?"
        , "Where I can get more information about portlet or service checklist?"
        , "Where I can find Tech Arch Designs?"
        , "Provide the link for CSP standard developer checklist for code."
        , "Where I can find pdf for Application architectiture?"
        , "Do anonymous user have security tokens"
        , "Where I can find T2 software profile?"
        , "How to use ITSM site in order to raise a request"
        , "Please provide Server Access Request Form"
        , "Release Management Processes"
        , "How does the process flow in order for a request to get resolved?"
        , "What tools are  involved in development of T2 Project?"
        , "Where do i need to request for Server Access"
        , "Know about Data Model Publication"
        , "Know about T2_LDM Logical Data Model Narrative"
        , "T2_OLTP Data Model Standards"
        , "How to View the T2_LDM Logical Data Model"
        , "OAG Chart?"]));

    this._helpSections.push(new HelpSection("Environment", "Env", "Environment Details",
      ["What are the database details for Predev1?"
        , "Provide the link for Predev1 CSI URL"]));

    this._helpSections.push(new HelpSection("CodeDecode", "CD", "Know about Code Decode",
      ["What is Code Decode values for Action Type?"]));

    this._helpSections.push(new HelpSection("MasterMessage", "MM", "Know about Master Message",
      ["What is the Master Message for code 100?"]));
    
    this._helpSections.push(new HelpSection("ChildSupport", "CS", "Child Support Basics",
      ["When did child, support begin in the US?"
        , "Who is eligible for Child Support Services?"
        , "What is the pre-requisite for a Child Support case?"
        , "What are the different type of Assistance provided by Child Support Department?"
        , "Who can be Custodial Parent?"
        , "Which system is being used for interstate file transfer?"
        , "How to create child support case and what are the minimum combinations for it?"
        , "What are the possible scenarios to close the Child support case"
        , "What are the possible ways to establish paternity?"
        , "What if child is in foster care, is he eligible for child support?"
        , "When did the Child Support Enforcement and Paternity Establishment Program begin?"
        , "What is the basis of deciding Child Support amount?"
        , "How long is child support paid?"
        , "When case is being called an interstate case?"
        , "What does DRA stand for?"
        , "What do the online portal to view data of different state's child support called?"
        , "Which system contains child support information for all states in USA?"]));
    
    this._helpSections.push(new HelpSection("IWOHeader", "IWO", "Income Withholding Order",
      ["How will the employer be notified to withhold part or all of a lump sum payment?"
        , "What is the length of retention for support orders or records concerning withholding?"
        , "When the payment is submitted, does the employer need to identify the payment as a lump sum?"]));
    
    this._helpSections.push(new HelpSection("VOELHeader", "VOEL", "VOEL",
      ["What are responsibilities of Texas employer related to VOEL?"
        , "Who all are legitimate Texas employer ?”"
        , " Is there any benefit for responding to VOEL"]));
    
    this._helpSections.push(new HelpSection("MedicalSupport", "MS", "Medical Support",
      ["Where should I can contact for medical related queries?"
        , "In what health insurance coverage is an employer required to enroll the child(ren)?"
        , "Why medical support?"
        , "What should be the next step if the employer is not willing to provide insurance?"
        , "Where I can online register medical support?"
        , "What if the employee doesn't earn enough money to cover the health insurance premiums and child support?"
        , "Is it mandatory to have employers name registered in NMSN?"]));

    this._helpSections.push(new HelpSection("OAGEmployer", "OAGEMP", "OAG Employer",
      ["What is FEIN?"
        , "Can I use that person's user ID and password of the person who has left the company for online reporting"
        , "I got an email that my company cannot be validated, what shall I do next to get it validated ?"]));
    
    this._helpSections.push(new HelpSection("Termination", "TM", "Termination",
      ["Where to contact for medical support related queries?"
        , "What is the office address to mail the termination document?"
        , "Provide the toll free number in case of additional questions"
        , "What is my responsibilities as an employer or organizations on reporting terminations"
        , "What is the time frame to report termination on website"
        , "Explain the benefits of reporting terminations online"
        , "Terminations are not reported yet on website. Do we have to report all of our terminated employees?"]));

    this._helpSections.push(new HelpSection("New Hire", "NH", "New Hire",
      ["What is definition of new hire law?"
        , "How can one obtain more information about Employer New Hire reporting other than using the website?"
        , "Provide information for viewing new hire record submitted"
        , "What is definition of new hire law?"
        , "What is considered to be the “date of hire”?"
        , "Why OAG requires payroll address?"
        , "What to do if employer has no employee with CS ,should they report them still"
        , "Should new hire information be reported on a person who has just been hired but who is going through training or is in his or her probationary period?"
        , "What are the penalties of new hire law?"]));
  }

  get helpSections() {
    return this._helpSections;
  }
}
