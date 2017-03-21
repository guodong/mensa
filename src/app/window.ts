
export class Window {
  id: any;
  content: any;
  x: number = 0;
  y: number = 0;
  width: number = 0;
  height: number = 0;
  visible: boolean = false;
  bare: boolean = false;
  oldGeo: any;
  process: any;
  isMaximized: boolean = false;
  isMinimized: boolean = false;
  zIndex: number;
  startRender: boolean = true;
  renderCheckHandle: any;
  type: string = 'normal';
  canvas: any;
  minimizable: boolean = true;
  maximizable: boolean = true;
  originX: number;

  constructor(args: any) {
    for (var i in args) {
      this[i] = args[i];
    }


    /* create canvas */
    if (this.type == 'cloudware') {
    }
    this.startRender = true;
    this.renderCheckHandle = null;
  }

  maximize() {
    this.oldGeo = {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    };
    this.x = 0;
    this.y = 0;
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight - 41;
    this.isMaximized = true;
  }

  unMaximize() {
    this.x = this.oldGeo.x;
    this.y = this.oldGeo.y;
    this.width = this.oldGeo.width;
    this.height = this.oldGeo.height;
    this.isMaximized = false;
  }

  toggleMaximize() {
    this.isMaximized ? this.unMaximize() : this.maximize();
  }

  minimize() {
    this.visible = false;
    this.isMinimized = true;
  }

  unMinimize() {
    if (this.isMinimized) {
      this.visible = true;
    }
  }

  configure(styles: any) {
    var self = this;
    var setStartRender = function() {
      self.startRender = true;
      clearTimeout(self.renderCheckHandle);
    }
    this.startRender = false;
    clearTimeout(this.renderCheckHandle);
    this.renderCheckHandle = setTimeout(setStartRender, 600);
    this.x = styles.x || 0;
    this.y = styles.y || 0;
    this.width = styles.width;
    this.height = styles.height;
  }

  hide() {
    this.visible = false;
  }

  destroy() {

  }
}
