import {Injectable} from '@angular/core';
import {Window} from './window';


@Injectable()
export class WmService {
  windows: Window[] = [];
  zIndex: number = 2;

  getWindows() {
    return this.windows;
  }

  createWindow(opts: any): Promise<Window> {
    let window = new Window(opts);
    if (!window.id)
      window.id = Math.floor(Math.random() * 10000);
    window.zIndex = this.zIndex++;
    this.windows.push(window);
    return Promise.resolve(window);
  }

  showWindow(window: Window): Promise<Window> {
    window.visible = true;
    return Promise.resolve(window);
  }

  destroyWindow(window: Window) {
    for (var i in this.windows) {
      if (window == this.windows[i]) {
        this.windows.splice(parseInt(i), 1);
        break;
      }
    }

  }

  maximizeWindow(window: Window) {
    window.maximize();
  }

  activeWindow(window: Window) {
    window.zIndex = this.zIndex++;
  }

  getWindowById(id: any) {
    for (var i in this.windows) {
      if (this.windows[i].id == id) {
        return this.windows[i];
      }
    }
    return null;
  }
}
