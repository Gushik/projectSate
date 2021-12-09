import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page7',
  templateUrl: './page7.component.html',
  styleUrls: ['./page7.component.scss'],
  animations: [
    trigger('animationCircle', [
      transition('*=> *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Page7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
