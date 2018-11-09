import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainFrameComponent } from './main-frame/main-frame.component';
import { HeaderTabComponent } from './main-frame/header-tab/header-tab.component';


const routes: Routes = [
  { path: 'main-frame', component: MainFrameComponent },
  { path: 'header-tab', component: HeaderTabComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
