import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ThfModule } from '@totvs/thf-ui';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ThfCodeEditorModule } from '@totvs/thf-code-editor';

import { AppComponent } from './app.component';
import { MainFrameComponent } from './main-frame/main-frame.component';
import { HeaderTabComponent } from './main-frame/header-tab/header-tab.component';
import { ServersTabComponent } from './main-frame/servers-tab/servers-tab.component';
import { TagsTabComponent } from './main-frame/tags-tab/tags-tab.component';
import { ServerBoxComponent } from './main-frame/servers-tab/server-box/server-box.component';
import { VariableBoxComponent } from './main-frame/servers-tab/server-box/variable-box/variable-box.component';
import { EnumBoxComponent } from './main-frame/servers-tab/server-box/variable-box/enum-box/enum-box.component';
import { TagBoxComponent } from './main-frame/tags-tab/tag-box/tag-box.component';
import { CodeTabComponent } from './main-frame/code-tab/code-tab.component';
import { XtotvsTabComponent } from './main-frame/xtotvs-tab/xtotvs-tab.component';
import { XtotvsProductComponent } from './main-frame/xtotvs-tab/xtotvs-product/xtotvs-product.component';

@NgModule({
  declarations: [
    AppComponent,
    MainFrameComponent,
    HeaderTabComponent,
    ServersTabComponent,
    TagsTabComponent,
    ServerBoxComponent,
    VariableBoxComponent,
    EnumBoxComponent,
    TagBoxComponent,
    CodeTabComponent,
    XtotvsTabComponent,
    XtotvsProductComponent
  ],
  imports: [
    BrowserModule,
    ThfModule,
    AppRoutingModule,
    FormsModule,
    ThfCodeEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
