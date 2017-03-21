import {Component, Input, AfterViewInit, ViewChild, ElementRef, PipeTransform, Pipe} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {Window} from './window';
import {WmService} from './wm.service';

@Pipe({name: 'safeHtml'})
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value: any) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}

@Pipe({ name: 'safeUrl' })
export class SafeUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css']
})
export class WindowComponent implements AfterViewInit {
  @Input()
  window: Window;

  @ViewChild('canvas') cvs: ElementRef;

  canvas: any;
  imageData: any;

  constructor(private wmService: WmService) {
  }

  ngAfterViewInit() {
    var me = this;
    if (this.window.type == 'cloudware') {

      this.canvas = this.cvs.nativeElement;
      this.window.canvas = this.canvas;
      this.canvas.width = 1;
      this.canvas.height = 1;

      var canvas = this.canvas;
      canvas.width = 1;
      canvas.height = 1;
      if (this.window.width != 0 && this.window.height != 0 && this.window.width < 10000) // < 10000 forbit to create window with size 65535x65535
        this.imageData = canvas.getContext('2d').createImageData(this.window.width, this.window.height);
    }
    
  }

  close() {
    this.wmService.destroyWindow(this.window);
  }

  toggleMaximize() {
    this.window.toggleMaximize();
  }

  minimize() {
    this.window.minimize();
  }
}
