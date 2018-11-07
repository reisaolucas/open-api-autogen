import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './main-frame/main-frame.component';

const routes: Routes = [
  { path: 'main-frame', component: MainFrameComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }