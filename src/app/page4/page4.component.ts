import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}
@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('1000ms')
      ]),
      transition('flipped => default', [
        animate('1000ms')
      ])
    ])
  ]

})

export class Page4Component implements OnInit {
  data: CardData = {
    imageId: "pDGNBK9A0sk",
    state: "default"
  };
  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
