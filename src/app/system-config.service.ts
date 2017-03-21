import {Injectable} from '@angular/core';

@Injectable()
export class SystemConfigService {
  background: string = '';
  apiUrl: string = 'http://api.cloudwarehub.com';

  setBackground(bg) {
    this.background = bg;
  }
}
