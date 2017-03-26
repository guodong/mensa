import {Component, OnInit, Input, NgZone} from '@angular/core';
import {WmService} from "./wm.service";
import {Process} from "./process";
import {Window} from "./window";

@Component({
  selector: 'process',
  template: ''
})
export class ProcessComponent implements OnInit {
  @Input()
  process: Process;

  screen: any;
  zone: NgZone;
  signal: any;
  pc: any;
  dc: any;
  windows: Window[] = [];

  constructor(private wmService: WmService) {
  }

  ngOnInit() {
    var me = this;

    this.zone = new NgZone({enableLongStackTrace: false});
    me.process.windows = me.windows;
    me.process.cb = function (event) {
      console.log(event.data);
      var msg = JSON.parse(event.data);
      var payload = msg.payload;
      switch (msg.resource) {
        case 'window':
          switch (msg.action) {
            case 'create':

              var opts = {
                id: me.process.pid + '-' + payload.id,
                title: 'window',
                x: payload.x || 0,
                y: payload.y || 0,
                width: payload.width || 1,
                height: payload.height || 1,
                content: payload.content || '',
                process: me.process,
                type: 'cloudware',
                bare: true,//payload.bare || false,
                src: null
              };
              me.zone.run(() => {
                me.wmService.createWindow(opts).then(window => {
                  me.windows.push(window);
                });
              });
              break;
            case 'show':
              var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
              if (window) {
                me.zone.run(() => {
                  me.wmService.showWindow(window);
                });
              }
              break;
            case 'hide':
              var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
              if (window) {
                me.zone.run(() => {
                  window.hide()
                });
              }
              break;
            case 'configure':
              var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
              if (window) {
                me.zone.run(() => {
                  window.configure(payload);
                });
              }

              break;
            case 'destroy':
              var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
              if (window) {
                me.zone.run(() => {
                  me.wmService.destroyWindow(window);
                });
              }
              break;
          }
          break;
      }
    };

  }
}
