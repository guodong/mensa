import {NgZone, Inject} from '@angular/core';
import {App} from './app';
import {Window} from './window';
import {WmService} from './wm.service';

export class Process {
  pid: number;
  screen: any;
  app: App;
  worker: Worker;
  windows: Window[] = [];
  active: boolean = false;
  zone: NgZone;
  instance: any;
  token: string;
  pc: any; //peer connection
  signal: any; //signal socket
  dc: any; //data channel
  cb: any;
  port: number;

  constructor(args: any) {
    for (var i in args) {
      this[i] = args[i];
    }

    var me = this;

    this.zone = new NgZone({enableLongStackTrace: false});
    this.screen = {
      width: 0,
      height: 0,
      video: document.createElement('video'),
    };

    document.body.appendChild(this.screen.video);
    me.screen.video.setAttribute('autoplay', 'true');

    //var socket = new WebSocket("ws://switch.cloudwarehub.com/?token=" + this.token + "_conn");
    //var socket = new WebSocket("ws://"+document.domain+":" + me.port);
    var socket = new WebSocket("ws://signal-service.cloudwarehub.com:8088/" + me.token);
    me.signal = socket;

    socket.onmessage = function (event) {
      if (event.data == "ready") {
        me.startPeerConnection();
        return;
      }
      var d = event.data.replace("\r\n", "\\r\\n");
      var json = JSON.parse(d);

      if (event.data.length < 400) {
        me.pc.addIceCandidate(new RTCIceCandidate(json));
      } else {
        me.pc.setRemoteDescription(new RTCSessionDescription(json));
      }
    };

  }

  sets(args: any) {
    for (var i in args) {
      this[i] = args[i];
    }
  }

  startPeerConnection() {
    var me = this;
    var iceServer = {
      "iceServers": [{
        "url": "turn:turn.cloudwarehub.com:3478?transport=udp",
        "username": "gd",
        "credential": "gd"
      }]
    };
    me.pc = new RTCPeerConnection(iceServer);
    var pc = me.pc;
    var socket = me.signal;
    var dc = pc.createDataChannel("event channel");
    me.dc = dc;
    dc.onmessage = me.cb;

    pc.onicecandidate = function (event) {
      if (event.candidate !== null) {
        var candidate = event.candidate.candidate;
        if (candidate.indexOf("relay") < 0) { // if no relay address is found, assuming it means no TURN server
          //return;
        }
        //setTimeout(function () {
          socket.send(JSON.stringify(event.candidate));
        //}, 2000);

      }
    };

    // 如果检测到媒体流连接到本地，将其绑定到一个video标签上输出
    pc.onaddstream = function (event: any) {
      var video = me.screen.video;
      (function loop() {
        //if (!$this.paused && !$this.ended) {
        me.windows.forEach(function (window) {
          if (window.visible && window.canvas) {
            window.canvas.width = window.width;
            window.canvas.height = window.height;
            window.canvas.getContext('2d').drawImage(video, -window.x, -window.y);
          }
        });
        setTimeout(loop, 0);
        //}
      })();
      video.src = URL.createObjectURL(event.stream);
    };

    var sendOfferFn = function (desc: any) {
      //desc.sdp = me.setBandwidth(desc.sdp, 50, 4500);
      pc.setLocalDescription(desc);
      //setTimeout(function () {
        socket.send(JSON.stringify(desc));
      //}, 2000);
    };

    pc.createOffer(sendOfferFn, function (error) {
      console.log('Failure callback: ' + error);
    }, {offerToReceiveVideo: true});
  }

  setBandwidth(sdp: string, audioBandwidth: number, videoBandwidth: number) {
    sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + audioBandwidth + '\r\n');
    sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + videoBandwidth + '\r\n');
    return sdp;
  }


}
