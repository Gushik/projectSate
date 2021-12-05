import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotNoundComponent } from './page-not-nound/page-not-nound.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { PageMainComponent } from './page-main/page-main.component';


const routes: Routes = [
  {path:'',redirectTo:'/page-main',pathMatch:'full'},
 {path:'page1',component:Page1Component},
 {path:'page2',component:Page2Component},
 {path:'page3',component:Page3Component},
 {path:'page4',component:Page4Component},
 {path:'page5',component:Page5Component},
 {path:'page6',component:Page6Component},
 {path:'page7',component:Page7Component},
 {path:'page8',component:Page8Component},
 {path:'page9',component:Page9Component},
 {path:'page-main',component:PageMainComponent},

  {path:'**',component:PageNotNoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),BrowserAnimationsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
