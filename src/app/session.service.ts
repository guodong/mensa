export class SessionService {
  ws: any;
  callbacks: any;

  constructor() {
    var me = this;
    this.ws = new WebSocket('ws://wsapi.cloudwarehub.com:8081');
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
