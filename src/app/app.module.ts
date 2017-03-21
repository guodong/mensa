import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {DesktopComponent} from "./desktop.component";
import {SystemConfigService} from "./system-config.service";
import {TaskbarComponent} from "./taskbar.component";
import {StartmenuComponent} from "./startmenu.component";
import {TaskbarIconItemComponent} from "./taskbar-icon-item.component";
import {WindowComponent} from "./window.component";
import {WmService} from "./wm.service";
import {ProcessManagerService} from "./process-manager.service";
import {AppManagerService} from "./app-manager.service";
import {RegistryService} from "./registry.service";
import {DesktopIconItemComponent} from "./desktop-icon-item.component";
import {SessionService} from "./session.service";
import {ProcessComponent} from "./process.component";

@NgModule({
  declarations: [
    AppComponent,
    DesktopComponent,
    TaskbarComponent,
    StartmenuComponent,
    TaskbarIconItemComponent,
    WindowComponent,
    DesktopIconItemComponent,
    ProcessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SystemConfigService,
    WmService,
    ProcessManagerService,
    AppManagerService,
    RegistryService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
