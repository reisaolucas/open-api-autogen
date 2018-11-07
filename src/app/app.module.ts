import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { HeaderTabComponent } from './main-frame/header-tab/header-tab.component';
import { ServersTabComponent } from './main-frame/servers-tab/servers-tab.component';
import { TagsTabComponent } from './main-frame/tags-tab/tags-tab.component';





@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    HeaderTabComponent,
    ServersTabComponent,
    TagsTabComponent
  ],
  imports: [
    BrowserModule,
    ThfModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
