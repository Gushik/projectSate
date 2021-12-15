import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-main',
  templateUrl: './page-main.component.html',
  styleUrls: ['./page-main.component.scss'],
  animations:[
    trigger('moveMouseDiv', [
      state('start', style({
        height:'350px',
        /* position: 'absolute', */
        zIndex: '1',

      })),
      state('end', style({
        height:'450px',
        position: 'relative',
        zIndex: '1',

      })),

      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ]),
    trigger('moveMouseDiv2', [
      state('start', style({
        height:'350px',
        /* position: 'absolute', */
        zIndex: '1',

      })),
      state('end', style({
        height:'450px',
        position: 'relative',
        zIndex: '1',

      })),

      transition('start => end', animate (500)),
      transition('end => start', animate ('500ms 0.5s ease-out'))
    ])
  ]
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
  constructor() { }

  ngOnInit(): void {
  }

}
