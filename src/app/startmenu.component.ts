import {Component, ElementRef, OnInit} from '@angular/core';
import {AppManagerService} from "./app-manager.service";
import {ProcessManagerService} from "./process-manager.service";

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

  constructor(private _eref: ElementRef, private amService: AppManagerService,
              private pmService: ProcessManagerService) {
  }

  ngOnInit() {

  }

  onStartClick() {
    this.active = !this.active;
  }

  onClick(event: any) {
    if (!this._eref.nativeElement.contains(event.target)) {
      this.active = false;
    }
  }
}
