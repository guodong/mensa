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
    me.appManagerService.install('/apps/supertuxkart');
    me.appManagerService.install('/apps/thunar');
  }
}
