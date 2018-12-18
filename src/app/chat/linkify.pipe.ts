import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {

    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value, args));
  }

  private stylize(text: string, id : string): string {
    let stylizedText: string = '';
    if (text && text.length > 0) {

      for (let t of text.split(" ")) {
        if ((t.startsWith("@") || t.startsWith("https")) && t.length > 1) {

          let urlDisplay = t;
          if (t.length > 30) // only shorten if greater than 30
            // change value 21 and 9 as per requirement
            urlDisplay = urlDisplay.substr(0, 21) + '...' + urlDisplay.substring(t.length - 9, t.length);

          stylizedText += `<a href="${t}"  target="_blank">${urlDisplay}</a> `;
        }
        else
          stylizedText += t + " ";
      }

      //if (stylizedText.length > 200) {
      //  stylizedText = stylizedText.substr(0, 200) + `<span id="` + id + "_dots" + `" >...</span><span id="` + id + `_more">` + stylizedText.substr(200) + `</span>`;
     //   stylizedText = stylizedText + `<button onclick="myFunction('` + id + "_dots', '" + id + "_more', '" + id + `_myBtn')" ` + `id = "` + id + `_myBtn"` + `> Read more </button>`;
     // }


      return stylizedText;
    }
    else return text;
  }

}
