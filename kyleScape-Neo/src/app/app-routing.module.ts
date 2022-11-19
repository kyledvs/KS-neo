import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeoLandingComponent } from './neo-landing/neo-landing.component';

const routes: Routes = [
  {path:'', component: NeoLandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
