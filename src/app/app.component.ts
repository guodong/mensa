import {Component, OnInit} from '@angular/core';
import {SystemConfigService} from "./system-config.service";
import {AppManagerService} from "./app-manager.service";

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private scService: SystemConfigService, private appManagerService: AppManagerService) {
  }

  ngOnInit(): void {
    var me = this;
    me.appManagerService.install('/apps/gedit');
    me.appManagerService.install('/apps/matlab');
    me.appManagerService.install('/apps/rstudio');
    me.appManagerService.install('/apps/supertuxkart');
    me.appManagerService.install('/apps/thunar');
    me.appManagerService.install('/apps/librecad');
    me.appManagerService.install('/apps/bluefish');
    me.appManagerService.install('/apps/eclipse');
    me.appManagerService.install('/apps/codeblocks');
    me.appManagerService.install('/apps/netbeans');
    me.appManagerService.install('/apps/sudoku');
    me.appManagerService.install('/apps/gnumeric');
  }
}
