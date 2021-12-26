import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}
@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
  animations: [
    trigger('cardFlip',[
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(360deg)'
      })),
      transition('default => flipped', [
        animate('2000ms')
      ]),
      transition('flipped => default', [
        animate('2000ms')
      ]),
    ]),

    
  ]
  /* animations:[
    trigger('moveMouseDiv', [
      state('start', style({
        height:'100%',
       
        zIndex: '1',

      })),
      state('end', style({
        height:'1050px',
        position: 'relative',
        zIndex: '1',

      })),

      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ]),
    trigger('moveMouseDiv2', [
      state('start', style({
        height:'650px',
      
        zIndex: '1',

      })),
      state('end', style({
        height:'950px',
        position: 'relative',
        zIndex: '1',

      })),

      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ])
  ] */
})
export class PageMainComponent implements OnInit {
  blok1=true;
  blok2=false;
  moveDivState = 'start';

  changeMoveDivState(): void{
    this.moveDivState = 'end';


  }
  changeOutDivState(): void{
    this.moveDivState = 'start';

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
  cardClicked1() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
    
  }
  cardClicked2() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
  cardClicked3() {
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
