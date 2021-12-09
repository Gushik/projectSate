import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page9',
  templateUrl: './page9.component.html',
  styleUrls: ['./page9.component.scss'],
  animations: [
    trigger('animationCircle', [
      transition('*=> *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class Page9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
