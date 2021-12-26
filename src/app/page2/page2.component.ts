import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}
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
    trigger('animationCircle', [
      transition('*=> *', [
        style({ opacity: 0 }),
        animate('1.2s', style({ opacity: 1 })),
      ]),
    ]),
    trigger('moveMouseDiv', [
      state('start', style({
        height:'*',
        

      })),
      state('end', style({
        width: "60%", 
        position: 'absolute',
        top: '60px',
        left: '30%',
        zIndex: '1',

      })),
      
      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ]),
    trigger('move', [
      state('in', style({ opacity: 0 })),
      state('out', style({ opacity: 1 })),
      transition('in => out', animate('4s linear')),
      transition('out => in', animate('4s linear'))
    ]),
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(360deg)'
      })),
      transition('default => flipped', [
        animate('1500ms')
      ]),
      transition('flipped => default', [
        animate('1500ms')
      ])
    ])
  ],

})
export class Page2Component implements OnInit {
  moveDivState = 'start';

  changeMoveDivState(): void{
    this.moveDivState = 'end';
    

  }
  changeOutDivState(): void{
    this.moveDivState = 'start';

  }
  state = 'in';
  ngAfterViewInit() {
    setTimeout(() => {
      this.state = 'out';
    }, 0);
  }
  onEnd(event:any) {
    this.state = 'in';
    if (event.toState === 'in') {
      setTimeout(() => {
        this.state = 'out';
      }, 0);
    }
  }
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
