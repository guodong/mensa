import {Component, ElementRef, OnInit} from '@angular/core';
import {AppManagerService} from "./app-manager.service";
import {ProcessManagerService} from "./process-manager.service";
import {App} from "./app";

@Component({
  selector: 'startmenu',
  templateUrl: './startmenu.component.html',
  styleUrls: ['./startmenu.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class StartmenuComponent implements OnInit {
  active: boolean;
  apps: App[] = [];

  constructor(private _eref: ElementRef, private amService: AppManagerService,
              private pmService: ProcessManagerService) {
  }

  ngOnInit() {
    var me = this;
    me.apps = me.amService.apps;
  }

  onStartClick() {
    this.active = !this.active;
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.active = false;
    }
  }

  run(app: App) {
    this.pmService.runApp(app);
    this.active = false;
  }
}
