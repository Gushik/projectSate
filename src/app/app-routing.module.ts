import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageMainComponent } from './page-main/page-main.component';
import { PageNotNoundComponent } from './page-not-nound/page-not-nound.component';

const routes: Routes = [
  {path:'',redirectTo:'/page-main',pathMatch:'full'},
 {path:'page-main',component:PageMainComponent},
  {path:'**',component:PageNotNoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
