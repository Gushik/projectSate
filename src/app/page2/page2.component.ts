import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  animations: [
    trigger('animationCircle', [
      transition('*=> *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
    ]),
  ],

})
export class Page2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
