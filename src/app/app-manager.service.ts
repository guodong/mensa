import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {App} from './app';
import {RegistryService} from "./registry.service";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class AppManagerService {
  apps: App[] = [];

  constructor(private http: Http, private registryService: RegistryService) {
  }


  install(url: string): Promise<App> {
    return this.http.get(url + '/mensa.json')
      .toPromise()
      .then(this.extractData.bind(this, url))
      .catch(this.handleError);
  }

  private extractData(url: string, res: Response) {
    var me = this;
    var appconfig = res.json();
    var uuid = Math.random();
    var app = new App({
      id: uuid,
      url: url,
      name: appconfig.name,
      config: appconfig,
      logo: url + '/' + 'icon.png',
      entry: url + '/' + appconfig.entry,
      cloudware: appconfig.cloudware
    });
    me.apps.push(app);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
