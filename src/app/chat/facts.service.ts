import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactsService {
    _facts: String[];

  constructor() {
    this._facts = new Array<String>();
    this._facts.push('Child support program was started In 1975 by name \"The Child Support Enforcement and Paternity Establishment Program(CSE)\" in USA.');
    this._facts.push('Maximum amount of child support comes from employers.');
    this._facts.push('TANF program is a support service which uses state funds to provide cash assistance to Texas families.');
    this._facts.push('QUICK is the online portal to view data of different state\'s child support.');
    this._facts.push('More than 10 Million cases were active in USA by Dec 2016.');
    this._facts.push('Never Assistance cases were most in USA in 2016.');
    this._facts.push('CSENET system is being used for interstate file transfer.');
    this._facts.push('Medicaid is a program jointly funded by the states and the federal government that reimburses hospitals and physicians for providing medical care to qualifying people.');
    this._facts.push('In USA, Texas state has most revenue in child support.');
    this._facts.push('About two-thirds of child support collections come from withholding income by employers.');
    this._facts.push('CSD work with the families and friends of incarcerated parent so they can act as liaisons between the Child Support Division and the parent.');
    this._facts.push('CSD Help Establishing Responsive Orders and Ensuring Support (HEROES) for Children in Military Families program.');
    this._facts.push('The Texas OAG and TWC developed links between the IV-D courts, OAG’s child support efforts, and local workforce boards to implement a model employment program(NCP Choices) for unemployed NCPs.');
    this._facts.push('The Child Support Review Process (CSRP) is an in-office administrative process to establish, modify, or enforce child, medical and dental support obligations and determine paternity.');
  }

  get facts() {
    return this._facts;
  }
}
