import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
  animations: [
    trigger('animationCircle', [
      transition('time=> *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Page1Component implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

}
