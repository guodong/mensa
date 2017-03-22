export class SessionService {
  ws: any;
  callbacks: any;

  constructor() {
    var me = this;
    //this.ws = new WebSocket('ws://manage.cloudwarehub.com:8081');
    this.ws = new WebSocket('ws://192.168.253.157:8081');
    this.callbacks = {};
    this.ws.onmessage = function (msg) {
      var parsed = JSON.parse(msg.data);
      var seq = parsed.seq;
      if (me.callbacks[seq]) {
        me.callbacks[seq](parsed.payload);
      }
    };
  }

  send(request, payload, callback) {
    var me = this;
    var seq = Math.random();
    var msg = {
      seq: seq,
      request: request,
      payload: payload
    };
    me.ws.send(JSON.stringify(msg));
    me.callbacks[seq] = callback;
  }
}
