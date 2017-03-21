import {Injectable} from '@angular/core';
import {Process} from "./process";
import {App} from "./app";
import {Headers, Http, Response, RequestOptions} from '@angular/http';
import {SystemConfigService} from "./system-config.service";
import {SessionService} from "./session.service";


@Injectable()
export class ProcessManagerService {
  pid: number = 1;
  processes: Process[] = [];

  constructor(private http: Http, private scService: SystemConfigService, private sessService: SessionService) {}

  getProcesses() {
    return this.processes;
  }

  getActiveProcess() {
    for (var i in this.processes) {
      if (this.processes[i].active) {
        return this.processes[i];
      }
    }
    return null;
  }

  randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

  runApp(app: App) {
    var me = this;
    var port = me.randomIntFromInterval(10000, 30000);
    var display = me.randomIntFromInterval(10, 10000);
    var cmd = 'sudo docker run -ti -d --net host --privileged -e DISPLAY=:' + display + ' -e PORT=' + port + ' -e APP=gedit cloudwarehouse/demo';
    me.sessService.send('run', cmd, function (resp) { // response is signal service token
      var process = new Process({
        pid: me.pid++,
        entry: '/assets/js/cloudware.js',
        app: app,
        instance: null,
        token: resp,
        port: port
      });
      setTimeout(function () { // wait for datachannel in order to bind dc onmessage function
        me.processes.push(process);
        me.activeProcess(process);
      }, 2000);
    });
  }

  private extrateData(app: App, res: Response) {
    var me = this;
    let body = res.json();
    console.log(body);
    var port = body.port;
    var process = new Process({
      pid: me.pid++,
      entry: '/assets/js/cloudware.js',
      app: app,
      instance: null,
      token: Math.random(),
      port: port
    });
    me.processes.push(process);
    me.activeProcess(process);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  activeProcess(process: Process) {
    this.processes.forEach((proc: Process) => {
      proc.active = false;
    });
    process.active = true;
  }
}
