import { animate, state, style, transition, trigger } from '@angular/animations';
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
        height:'1250px',
        position: 'relative',
        top: '560px',
    left: '72.5%',
        zIndex: '1',

      })),
      
      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ]),
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
  constructor() { }

  ngOnInit(): void {
  }

}
