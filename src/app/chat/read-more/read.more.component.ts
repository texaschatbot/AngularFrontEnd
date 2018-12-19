import { Component } from '@angular/core';

@Component({
  selector: 'read-more',
  template: `
        <div [class.collapsed]="isCollapsed">
            <ng-content></ng-content>
            <div (click)="isCollapsed = !isCollapsed">Read more</div>
        </div>
    `,
  styles: [`
        div.collapsed {
            height: 250px;
        }
    `]
})

export class ReadMoreComponent {
  isCollapsed: boolean = true;
}
