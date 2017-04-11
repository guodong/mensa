webpackJsonp([1,4],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__registry_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppManagerService = (function () {
    function AppManagerService(http, registryService) {
        this.http = http;
        this.registryService = registryService;
        this.apps = [];
    }
    AppManagerService.prototype.install = function (url) {
        return this.http.get(url + '/mensa.json')
            .toPromise()
            .then(this.extractData.bind(this, url))
            .catch(this.handleError);
    };
    AppManagerService.prototype.extractData = function (url, res) {
        var me = this;
        var appconfig = res.json();
        var uuid = Math.random();
        var app = new __WEBPACK_IMPORTED_MODULE_2__app__["a" /* App */]({
            id: uuid,
            url: url,
            name: appconfig.name,
            config: appconfig,
            logo: url + '/' + 'icon.png',
            entry: url + '/' + appconfig.entry,
            cloudware: appconfig.cloudware,
            dockerImage: appconfig.dockerImage
        });
        me.apps.push(app);
    };
    AppManagerService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AppManagerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__registry_service__["a" /* RegistryService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__registry_service__["a" /* RegistryService */]) === 'function' && _b) || Object])
    ], AppManagerService);
    return AppManagerService;
    var _a, _b;
}());
//# sourceMappingURL=app-manager.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemConfigService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemConfigService = (function () {
    function SystemConfigService() {
        this.background = '';
        this.apiUrl = 'http://api.cloudwarehub.com';
    }
    SystemConfigService.prototype.setBackground = function (bg) {
        this.background = bg;
    };
    SystemConfigService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], SystemConfigService);
    return SystemConfigService;
}());
//# sourceMappingURL=system-config.service.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Process; });

var Process = (function () {
    function Process(args) {
        this.windows = [];
        this.active = false;
        for (var i in args) {
            this[i] = args[i];
        }
        var me = this;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]({ enableLongStackTrace: false });
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
            }
            else {
                me.pc.setRemoteDescription(new RTCSessionDescription(json));
            }
        };
    }
    Process.prototype.sets = function (args) {
        for (var i in args) {
            this[i] = args[i];
        }
    };
    Process.prototype.startPeerConnection = function () {
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
                if (candidate.indexOf("relay") < 0) {
                }
                //setTimeout(function () {
                socket.send(JSON.stringify(event.candidate));
            }
        };
        // 如果检测到媒体流连接到本地，将其绑定到一个video标签上输出
        pc.onaddstream = function (event) {
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
        var sendOfferFn = function (desc) {
            //desc.sdp = me.setBandwidth(desc.sdp, 50, 4500);
            pc.setLocalDescription(desc);
            //setTimeout(function () {
            socket.send(JSON.stringify(desc));
            //}, 2000);
        };
        pc.createOffer(sendOfferFn, function (error) {
            console.log('Failure callback: ' + error);
        }, { offerToReceiveVideo: true });
    };
    Process.prototype.setBandwidth = function (sdp, audioBandwidth, videoBandwidth) {
        sdp = sdp.replace(/a=mid:audio\r\n/g, 'a=mid:audio\r\nb=AS:' + audioBandwidth + '\r\n');
        sdp = sdp.replace(/a=mid:video\r\n/g, 'a=mid:video\r\nb=AS:' + videoBandwidth + '\r\n');
        return sdp;
    };
    return Process;
}());
//# sourceMappingURL=process.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
var App = (function () {
    function App(args) {
        for (var i in args) {
            this[i] = args[i];
        }
    }
    return App;
}());
//# sourceMappingURL=app.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegistryService = (function () {
    function RegistryService() {
        this.apps = [];
    }
    RegistryService.prototype.getApps = function () {
        return this.apps;
    };
    RegistryService.prototype.addApp = function (app) {
        this.apps.push(app);
    };
    RegistryService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], RegistryService);
    return RegistryService;
}());
//# sourceMappingURL=registry.service.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
var SessionService = (function () {
    function SessionService() {
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
    SessionService.prototype.send = function (request, payload, callback) {
        var me = this;
        var seq = Math.random();
        var msg = {
            seq: seq,
            request: request,
            payload: payload
        };
        me.ws.send(JSON.stringify(msg));
        me.callbacks[seq] = callback;
    };
    return SessionService;
}());
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Window; });
var Window = (function () {
    function Window(args) {
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.visible = false;
        this.bare = false;
        this.isMaximized = false;
        this.isMinimized = false;
        this.startRender = true;
        this.type = 'normal';
        this.minimizable = true;
        this.maximizable = true;
        for (var i in args) {
            this[i] = args[i];
        }
        /* create canvas */
        if (this.type == 'cloudware') {
        }
        this.startRender = true;
        this.renderCheckHandle = null;
    }
    Window.prototype.maximize = function () {
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
    };
    Window.prototype.unMaximize = function () {
        this.x = this.oldGeo.x;
        this.y = this.oldGeo.y;
        this.width = this.oldGeo.width;
        this.height = this.oldGeo.height;
        this.isMaximized = false;
    };
    Window.prototype.toggleMaximize = function () {
        this.isMaximized ? this.unMaximize() : this.maximize();
    };
    Window.prototype.minimize = function () {
        this.visible = false;
        this.isMinimized = true;
    };
    Window.prototype.unMinimize = function () {
        if (this.isMinimized) {
            this.visible = true;
        }
    };
    Window.prototype.configure = function (styles) {
        var self = this;
        var setStartRender = function () {
            self.startRender = true;
            clearTimeout(self.renderCheckHandle);
        };
        this.startRender = false;
        clearTimeout(this.renderCheckHandle);
        this.renderCheckHandle = setTimeout(setStartRender, 600);
        this.x = styles.x || 0;
        this.y = styles.y || 0;
        this.width = styles.width;
        this.height = styles.height;
    };
    Window.prototype.hide = function () {
        this.visible = false;
    };
    Window.prototype.destroy = function () {
    };
    return Window;
}());
//# sourceMappingURL=window.js.map

/***/ }),

/***/ 301:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 301;


/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(410);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(418);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
setTimeout(function () { __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); }, 5000);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_config_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_manager_service__ = __webpack_require__(120);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(scService, appManagerService) {
        this.scService = scService;
        this.appManagerService = appManagerService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var me = this;
        me.appManagerService.install('/apps/gedit');
        me.appManagerService.install('/apps/matlab');
        me.appManagerService.install('/apps/rstudio');
        me.appManagerService.install('/apps/supertuxkart');
        me.appManagerService.install('/apps/thunar');
        me.appManagerService.install('/apps/librecad');
        me.appManagerService.install('/apps/bluefish');
        me.appManagerService.install('/apps/eclipse');
        me.appManagerService.install('/apps/codeblocks');
        me.appManagerService.install('/apps/netbeans');
        me.appManagerService.install('/apps/sudoku');
        me.appManagerService.install('/apps/gnumeric');
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'body',
            template: __webpack_require__(482),
            styles: [__webpack_require__(474)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__system_config_service__["a" /* SystemConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__system_config_service__["a" /* SystemConfigService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_manager_service__["a" /* AppManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_manager_service__["a" /* AppManagerService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(409);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__desktop_component__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__system_config_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__taskbar_component__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__startmenu_component__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__taskbar_icon_item_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__window_component__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__wm_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__process_manager_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_manager_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__registry_service__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__desktop_icon_item_component__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__session_service__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__process_component__ = __webpack_require__(413);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__desktop_component__["a" /* DesktopComponent */],
                __WEBPACK_IMPORTED_MODULE_7__taskbar_component__["a" /* TaskbarComponent */],
                __WEBPACK_IMPORTED_MODULE_8__startmenu_component__["a" /* StartmenuComponent */],
                __WEBPACK_IMPORTED_MODULE_9__taskbar_icon_item_component__["a" /* TaskbarIconItemComponent */],
                __WEBPACK_IMPORTED_MODULE_10__window_component__["a" /* WindowComponent */],
                __WEBPACK_IMPORTED_MODULE_15__desktop_icon_item_component__["a" /* DesktopIconItemComponent */],
                __WEBPACK_IMPORTED_MODULE_17__process_component__["a" /* ProcessComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__system_config_service__["a" /* SystemConfigService */],
                __WEBPACK_IMPORTED_MODULE_11__wm_service__["a" /* WmService */],
                __WEBPACK_IMPORTED_MODULE_12__process_manager_service__["a" /* ProcessManagerService */],
                __WEBPACK_IMPORTED_MODULE_13__app_manager_service__["a" /* AppManagerService */],
                __WEBPACK_IMPORTED_MODULE_14__registry_service__["a" /* RegistryService */],
                __WEBPACK_IMPORTED_MODULE_16__session_service__["a" /* SessionService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_manager_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopIconItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DesktopIconItemComponent = (function () {
    function DesktopIconItemComponent(processManagerService) {
        this.processManagerService = processManagerService;
    }
    DesktopIconItemComponent.prototype.dblClick = function () {
        this.processManagerService.runApp(this.app);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app__["a" /* App */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app__["a" /* App */]) === 'function' && _a) || Object)
    ], DesktopIconItemComponent.prototype, "app", void 0);
    DesktopIconItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'desktop-icon-item',
            template: __webpack_require__(483),
            styles: [__webpack_require__(475)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */]) === 'function' && _b) || Object])
    ], DesktopIconItemComponent);
    return DesktopIconItemComponent;
    var _a, _b;
}());
//# sourceMappingURL=desktop-icon-item.component.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__system_config_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_manager_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__process_manager_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__wm_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesktopComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DesktopComponent = (function () {
    function DesktopComponent(scService, amService, pmService, wmService) {
        this.scService = scService;
        this.amService = amService;
        this.pmService = pmService;
        this.wmService = wmService;
    }
    DesktopComponent.prototype.ngOnInit = function () {
        var me = this;
        var cloudbg = new Image();
        cloudbg.src = '/assets/images/cloudware-logo-bg.png';
        var cloud = new Image();
        cloud.src = '/assets/images/cloudware-logo-cloud.png';
        function draw() {
            var canvas = document.getElementById('loadingcanvas');
            if (!canvas) {
                return;
            }
            //canvas.style.backgroundColor = 'rgba(255, 255, 255, 1)';
            var ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, 300, 300);
            ctx.save();
            ctx.translate(150, 150);
            var time = new Date();
            ctx.rotate(((8 * Math.PI) / 60) * time.getSeconds() + ((8 * Math.PI) / 60000) * time.getMilliseconds());
            ctx.drawImage(cloudbg, -150, -150, 300, 300);
            ctx.restore();
            ctx.drawImage(cloud, 0, 0, 300, 300);
            window.requestAnimationFrame(draw);
        }
        window.requestAnimationFrame(draw);
        me.scService.setBackground('http://pic1.win4000.com/wallpaper/0/54126aa38537b.jpg');
        me.apps = me.amService.apps;
        me.processes = me.pmService.getProcesses();
        me.windows = me.wmService.getWindows();
        document.onmousemove = function (e) {
            var process = me.pmService.getActiveProcess();
            if (!process) {
                return;
            }
            process.dc.send(JSON.stringify({
                msg: 'mousemove',
                payload: {
                    id: 0,
                    x: e.pageX,
                    y: e.pageY
                }
            }));
        };
        document.onmousedown = function (e) {
            var process = me.pmService.getActiveProcess();
            if (!process) {
                return;
            }
            process.dc.send(JSON.stringify({
                msg: 'mousedown',
                payload: {
                    code: e.which
                }
            }));
        };
        document.onmouseup = function (e) {
            var process = me.pmService.getActiveProcess();
            if (!process) {
                return;
            }
            process.dc.send(JSON.stringify({
                msg: 'mouseup',
                payload: {
                    code: e.which
                }
            }));
        };
        document.onkeydown = function (e) {
            var process = me.pmService.getActiveProcess();
            if (!process) {
                return;
            }
            process.dc.send(JSON.stringify({
                msg: 'keydown',
                payload: {
                    code: me.mapKey(e.which)
                }
            }));
        };
        document.onkeyup = function (e) {
            var process = me.pmService.getActiveProcess();
            if (!process) {
                return;
            }
            process.dc.send(JSON.stringify({
                msg: 'keyup',
                payload: {
                    code: me.mapKey(e.which)
                }
            }));
        };
    };
    DesktopComponent.prototype.active = function (window) {
        this.wmService.activeWindow(window);
        if (window.process)
            this.pmService.activeProcess(window.process);
    };
    DesktopComponent.prototype.mapKey = function (keyCode) {
        var me = this;
        var xkm = [[65406, 0, 65406, 0, 0, 0, 0], [65307, 0, 65307, 0, 0, 0, 0], [49, 33, 49, 33, 0, 0, 0], [50, 64, 50, 64, 0, 0, 0], [51, 35, 51, 35, 0, 0, 0], [52, 36, 52, 36, 0, 0, 0],
            [53, 37, 53, 37, 0, 0, 0], [54, 94, 54, 94, 0, 0, 0], [55, 38, 55, 38, 0, 0, 0], [56, 42, 56, 42, 0, 0, 0], [57, 40, 57, 40, 0, 0, 0], [48, 41, 48, 41, 0, 0, 0],
            [45, 95, 45, 95, 0, 0, 0], [61, 43, 61, 43, 0, 0, 0], [65288, 65288, 65288, 65288, 0, 0, 0], [65289, 65056, 65289, 65056, 0, 0, 0], [113, 81, 113, 81, 0, 0, 0],
            [119, 87, 119, 87, 0, 0, 0], [101, 69, 101, 69, 0, 0, 0], [114, 82, 114, 82, 0, 0, 0], [116, 84, 116, 84, 0, 0, 0], [121, 89, 121, 89, 0, 0, 0], [117, 85, 117, 85, 0, 0, 0],
            [105, 73, 105, 73, 0, 0, 0], [111, 79, 111, 79, 0, 0, 0], [112, 80, 112, 80, 0, 0, 0], [91, 123, 91, 123, 0, 0, 0], [93, 125, 93, 125, 0, 0, 0], [65293, 0, 65293, 0, 0, 0, 0],
            [65507, 0, 65507, 0, 0, 0, 0], [97, 65, 97, 65, 0, 0, 0], [115, 83, 115, 83, 0, 0, 0], [100, 68, 100, 68, 0, 0, 0], [102, 70, 102, 70, 0, 0, 0], [103, 71, 103, 71, 0, 0, 0],
            [104, 72, 104, 72, 0, 0, 0], [106, 74, 106, 74, 0, 0, 0], [107, 75, 107, 75, 0, 0, 0], [108, 76, 108, 76, 0, 0, 0], [59, 58, 59, 58, 0, 0, 0], [39, 34, 39, 34, 0, 0, 0],
            [96, 126, 96, 126, 0, 0, 0], [65505, 0, 65505, 0, 0, 0, 0], [92, 124, 92, 124, 0, 0, 0], [122, 90, 122, 90, 0, 0, 0], [120, 88, 120, 88, 0, 0, 0], [99, 67, 99, 67, 0, 0, 0],
            [118, 86, 118, 86, 0, 0, 0], [98, 66, 98, 66, 0, 0, 0], [110, 78, 110, 78, 0, 0, 0], [109, 77, 109, 77, 0, 0, 0], [44, 60, 44, 60, 0, 0, 0], [46, 62, 46, 62, 0, 0, 0],
            [47, 63, 47, 63, 0, 0, 0], [65506, 0, 65506, 0, 0, 0, 0], [65450, 65450, 65450, 65450, 65450, 65450, 269024801], [65513, 65511, 65513, 65511, 0, 0, 0], [32, 0, 32, 0, 0, 0, 0],
            [65509, 0, 65509, 0, 0, 0, 0], [65470, 65470, 65470, 65470, 65470, 65470, 269024769], [65471, 65471, 65471, 65471, 65471, 65471, 269024770],
            [65472, 65472, 65472, 65472, 65472, 65472, 269024771], [65473, 65473, 65473, 65473, 65473, 65473, 269024772], [65474, 65474, 65474, 65474, 65474, 65474, 269024773],
            [65475, 65475, 65475, 65475, 65475, 65475, 269024774], [65476, 65476, 65476, 65476, 65476, 65476, 269024775], [65477, 65477, 65477, 65477, 65477, 65477, 269024776],
            [65478, 65478, 65478, 65478, 65478, 65478, 269024777], [65479, 65479, 65479, 65479, 65479, 65479, 269024778], [65407, 0, 65407, 0, 0, 0, 0], [65300, 0, 65300, 0, 0, 0, 0],
            [65429, 65463, 65429, 65463, 0, 0, 0], [65431, 65464, 65431, 65464, 0, 0, 0], [65434, 65465, 65434, 65465, 0, 0, 0], [65453, 65453, 65453, 65453, 65453, 65453, 269024803],
            [65430, 65460, 65430, 65460, 0, 0, 0], [65437, 65461, 65437, 65461, 0, 0, 0], [65432, 65462, 65432, 65462, 0, 0, 0], [65451, 65451, 65451, 65451, 65451, 65451, 269024802],
            [65436, 65457, 65436, 65457, 0, 0, 0], [65433, 65458, 65433, 65458, 0, 0, 0], [65435, 65459, 65435, 65459, 0, 0, 0], [65438, 65456, 65438, 65456, 0, 0, 0],
            [65439, 65454, 65439, 65454, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [60, 62, 60, 62, 124, 166, 124], [65480, 65480, 65480, 65480, 65480, 65480, 269024779],
            [65481, 65481, 65481, 65481, 65481, 65481, 269024780], [65360, 0, 65360, 0, 0, 0, 0], [65362, 0, 65362, 0, 0, 0, 0], [65365, 0, 65365, 0, 0, 0, 0], [65361, 0, 65361, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [65363, 0, 65363, 0, 0, 0, 0], [65367, 0, 65367, 0, 0, 0, 0], [65364, 0, 65364, 0, 0, 0, 0], [65366, 0, 65366, 0, 0, 0, 0], [65379, 0, 65379, 0, 0, 0, 0],
            [65535, 0, 65535, 0, 0, 0, 0], [65421, 0, 65421, 0, 0, 0, 0], [65508, 0, 65508, 0, 0, 0, 0], [65299, 65387, 65299, 65387, 0, 0, 0], [65377, 65301, 65377, 65301, 0, 0, 0],
            [65455, 65455, 65455, 65455, 65455, 65455, 269024800], [65514, 65512, 65514, 65512, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65515, 0, 65515, 0, 0, 0, 0], [65516, 0, 65516, 0, 0, 0, 0],
            [65383, 0, 65383, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [65027, 0, 65027, 0, 0, 0, 0], [0, 65513, 0, 65513, 0, 0, 0], [65469, 0, 65469, 0, 0, 0, 0], [0, 65515, 0, 65515, 0, 0, 0], [0, 65517, 0, 65517, 0, 0, 0],
            [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [65454, 65454, 65454, 65454, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [269025046, 0, 269025046, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025071, 0, 269025071, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025047, 0, 269025047, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 65511, 0, 65511, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025042, 0, 269025042, 0, 0, 0, 0], [269025053, 0, 269025053, 0, 0, 0, 0],
            [269025044, 269025073, 269025044, 269025073, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025045, 269025068, 269025045, 269025068, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025041, 0, 269025041, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025043, 0, 269025043, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025070, 0, 269025070, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025068, 0, 269025068, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025113, 0, 269025113, 0, 0, 0, 0], [269025028, 0, 269025028, 0, 0, 0, 0], [269025030, 0, 269025030, 0, 0, 0, 0],
            [269025029, 0, 269025029, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025066, 0, 269025066, 0, 0, 0, 0],
            [269025040, 0, 269025040, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025067, 0, 269025067, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025051, 0, 269025051, 0, 0, 0, 0], [269025072, 0, 269025072, 0, 0, 0, 0], [269025139, 0, 269025139, 0, 0, 0, 0], [269025064, 0, 269025064, 0, 0, 0, 0],
            [269025063, 0, 269025063, 0, 0, 0, 0], [269025062, 0, 269025062, 0, 0, 0, 0], [269025075, 0, 269025075, 0, 0, 0, 0], [269025049, 0, 269025049, 0, 0, 0, 0],
            [269025074, 0, 269025074, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [269025171, 0, 269025171, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [269025173, 0, 269025173, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
        var exceptionKeys = {
            '190': '46',
            '16': '65506',
            '17': '65507',
            '18': '65513',
            '34': '65307',
            '191': '47',
            '20': '65509',
            '9': '65289',
            '189': '45',
            '187': '61',
            '8': '65288',
            '220': '92',
            '13': '65293',
            '192': '96',
            '186': '59',
            '222': '34',
            '188': '44',
            '27': '65307',
            '39': '65363',
            '37': '65361',
            '38': '65362',
            '40': '65364' // DOWN ARROW CHROME
        };
        var keyMap = me.buildASCIIToXKeyMap(xkm, 8);
        if (exceptionKeys[keyCode])
            keyCode = exceptionKeys[keyCode];
        var key = keyMap[keyCode];
        if (key === undefined || key === null)
            key = 0;
        return key;
    };
    DesktopComponent.prototype.buildASCIIToXKeyMap = function (XKeysMap, min) {
        var asciiToX = {};
        for (var i = 0; i < XKeysMap.length; i++) {
            for (var j = 0; j < XKeysMap[i].length; j++) {
                var key = XKeysMap[i][j];
                var value = i + min;
                if (key !== 0)
                    asciiToX[key] = value;
            }
        }
        return asciiToX;
    };
    DesktopComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'desktop',
            template: __webpack_require__(484),
            styles: [__webpack_require__(476)],
            host: {
                '[style.background-image]': "'url(' + scService.background + ')'"
            }
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__system_config_service__["a" /* SystemConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__system_config_service__["a" /* SystemConfigService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__app_manager_service__["a" /* AppManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__app_manager_service__["a" /* AppManagerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__process_manager_service__["a" /* ProcessManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__process_manager_service__["a" /* ProcessManagerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__wm_service__["a" /* WmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__wm_service__["a" /* WmService */]) === 'function' && _d) || Object])
    ], DesktopComponent);
    return DesktopComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=desktop.component.js.map

/***/ }),

/***/ 413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wm_service__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process__ = __webpack_require__(180);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProcessComponent = (function () {
    function ProcessComponent(wmService) {
        this.wmService = wmService;
        this.windows = [];
    }
    ProcessComponent.prototype.ngOnInit = function () {
        var me = this;
        this.zone = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgZone */]({ enableLongStackTrace: false });
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
                                bare: true,
                                src: null
                            };
                            me.zone.run(function () {
                                me.wmService.createWindow(opts).then(function (window) {
                                    me.windows.push(window);
                                });
                            });
                            break;
                        case 'show':
                            var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
                            if (window) {
                                me.zone.run(function () {
                                    me.wmService.showWindow(window);
                                });
                            }
                            break;
                        case 'hide':
                            var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
                            if (window) {
                                me.zone.run(function () {
                                    window.hide();
                                });
                            }
                            break;
                        case 'configure':
                            var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
                            if (window) {
                                me.zone.run(function () {
                                    window.configure(payload);
                                });
                            }
                            break;
                        case 'destroy':
                            var window = me.wmService.getWindowById(me.process.pid + '-' + payload.id);
                            if (window) {
                                me.zone.run(function () {
                                    me.wmService.destroyWindow(window);
                                });
                            }
                            break;
                    }
                    break;
            }
        };
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__process__["a" /* Process */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__process__["a" /* Process */]) === 'function' && _a) || Object)
    ], ProcessComponent.prototype, "process", void 0);
    ProcessComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'process',
            template: ''
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__wm_service__["a" /* WmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__wm_service__["a" /* WmService */]) === 'function' && _b) || Object])
    ], ProcessComponent);
    return ProcessComponent;
    var _a, _b;
}());
//# sourceMappingURL=process.component.js.map

/***/ }),

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_manager_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_manager_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StartmenuComponent = (function () {
    function StartmenuComponent(_eref, amService, pmService) {
        this._eref = _eref;
        this.amService = amService;
        this.pmService = pmService;
        this.apps = [];
    }
    StartmenuComponent.prototype.ngOnInit = function () {
        var me = this;
        me.apps = me.amService.apps;
    };
    StartmenuComponent.prototype.onStartClick = function () {
        this.active = !this.active;
    };
    StartmenuComponent.prototype.onClick = function (event) {
        if (!this._eref.nativeElement.contains(event.target)) {
            this.active = false;
        }
    };
    StartmenuComponent.prototype.run = function (app) {
        this.pmService.runApp(app);
        this.active = false;
    };
    StartmenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'startmenu',
            template: __webpack_require__(485),
            styles: [__webpack_require__(477)],
            host: {
                '(document:click)': 'onClick($event)',
            },
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__app_manager_service__["a" /* AppManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__app_manager_service__["a" /* AppManagerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */]) === 'function' && _c) || Object])
    ], StartmenuComponent);
    return StartmenuComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=startmenu.component.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__process_manager_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wm_service__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarIconItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskbarIconItemComponent = (function () {
    function TaskbarIconItemComponent(pmService, wmService) {
        this.pmService = pmService;
        this.wmService = wmService;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__process__["a" /* Process */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__process__["a" /* Process */]) === 'function' && _a) || Object)
    ], TaskbarIconItemComponent.prototype, "process", void 0);
    TaskbarIconItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'taskbar-icon-item',
            template: __webpack_require__(486),
            styles: [__webpack_require__(478)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__process_manager_service__["a" /* ProcessManagerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__wm_service__["a" /* WmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__wm_service__["a" /* WmService */]) === 'function' && _c) || Object])
    ], TaskbarIconItemComponent);
    return TaskbarIconItemComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=taskbar-icon-item.component.js.map

/***/ }),

/***/ 416:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process_manager_service__ = __webpack_require__(56);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TaskbarComponent = (function () {
    function TaskbarComponent(processManagerService) {
        this.processManagerService = processManagerService;
        this.processes = [];
        this.isFullscreen = false;
    }
    TaskbarComponent.prototype.ngOnInit = function () {
        var me = this;
        me.processes = me.processManagerService.getProcesses();
        function startTime() {
            var m = new Date();
            var dateString = m.getFullYear() + "/" + ("0" + (m.getMonth() + 1)).slice(-2) + "/" + ("0" + m.getDate()).slice(-2);
            var timeString = ("0" + m.getHours()).slice(-2) + ":" + ("0" + m.getMinutes()).slice(-2) + ":" + ("0" + m.getSeconds()).slice(-2);
            me.date = dateString;
            me.time = timeString;
        }
        startTime();
        setInterval(startTime, 1000);
    };
    TaskbarComponent.prototype.fullscreen = function () {
        if (this.isFullscreen) {
            if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            else if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            this.isFullscreen = false;
        }
        else {
            var docElm = document.documentElement;
            if (docElm.requestFullscreen) {
                docElm.requestFullscreen();
            }
            else if (docElm.webkitRequestFullScreen) {
                docElm.webkitRequestFullScreen();
            }
            this.isFullscreen = true;
        }
    };
    TaskbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'taskbar',
            template: __webpack_require__(487),
            styles: [__webpack_require__(479)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__process_manager_service__["a" /* ProcessManagerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__process_manager_service__["a" /* ProcessManagerService */]) === 'function' && _a) || Object])
    ], TaskbarComponent);
    return TaskbarComponent;
    var _a;
}());
//# sourceMappingURL=taskbar.component.js.map

/***/ }),

/***/ 417:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__window__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__wm_service__ = __webpack_require__(76);
/* unused harmony export SafeHtmlPipe */
/* unused harmony export SafeUrlPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SafeHtmlPipe = (function () {
    function SafeHtmlPipe(sanitized) {
        this.sanitized = sanitized;
    }
    SafeHtmlPipe.prototype.transform = function (value) {
        return this.sanitized.bypassSecurityTrustHtml(value);
    };
    SafeHtmlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'safeHtml' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeHtmlPipe);
    return SafeHtmlPipe;
    var _a;
}());
var SafeUrlPipe = (function () {
    function SafeUrlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeUrlPipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafeUrlPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({ name: 'safeUrl' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafeUrlPipe);
    return SafeUrlPipe;
    var _a;
}());
var WindowComponent = (function () {
    function WindowComponent(wmService) {
        this.wmService = wmService;
    }
    WindowComponent.prototype.ngAfterViewInit = function () {
        var me = this;
        if (this.window.type == 'cloudware') {
            this.canvas = this.cvs.nativeElement;
            this.window.canvas = this.canvas;
            this.canvas.width = 1;
            this.canvas.height = 1;
            var canvas = this.canvas;
            canvas.width = 1;
            canvas.height = 1;
            if (this.window.width != 0 && this.window.height != 0 && this.window.width < 10000)
                this.imageData = canvas.getContext('2d').createImageData(this.window.width, this.window.height);
        }
    };
    WindowComponent.prototype.close = function () {
        this.wmService.destroyWindow(this.window);
    };
    WindowComponent.prototype.toggleMaximize = function () {
        this.window.toggleMaximize();
    };
    WindowComponent.prototype.minimize = function () {
        this.window.minimize();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__window__["a" /* Window */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__window__["a" /* Window */]) === 'function' && _a) || Object)
    ], WindowComponent.prototype, "window", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* ViewChild */])('canvas'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _b) || Object)
    ], WindowComponent.prototype, "cvs", void 0);
    WindowComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'window',
            template: __webpack_require__(488),
            styles: [__webpack_require__(480)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__wm_service__["a" /* WmService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__wm_service__["a" /* WmService */]) === 'function' && _c) || Object])
    ], WindowComponent);
    return WindowComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=window.component.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 474:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n    float: left;\n}\n.icon {\n    text-align: center;\n}\na {\n    height: 85px;\n    text-decoration: none;\n    border: solid 1px transparent;\n    display: block;\n    padding: 3px;\n    margin: 20px 0 0 0;\n    color: #ffffff;\n    text-shadow: 0.2em 0.1em 0.3em #000000;\n    text-align: center;\n    width: 85px;\n}\nimg {\n    height: 64px;\n}\na:hover {\n    border: solid 1px #bbd6ec;\n    -webkit-border-radius: 3px;\n    box-shadow: inset 0 0 1px #fff;\n    -webkit-box-shadow: inset 0 0 1px #fff;\n    background-color: #5caae8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 476:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    display: block;\n    position: relative;\n}\nul {\n    list-style: none;\n    position: absolute;\n    left: 20px;\n    top: 10px;\n}\nli {\n    float: left;\n    margin-left: 30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 477:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".startpopup {\n    border-radius: 5px;\n    box-shadow: inset 0 0 1px #fff;\n    background-color: #619bb9;\n\n    background: -webkit-linear-gradient(top, rgba(50, 123, 165, 0.75), rgba(46, 75, 90, 0.75) 50%, rgba(92, 176, 220, 0.75));\n    background: linear-gradient(to bottom, rgba(50, 123, 165, 0.75), rgba(46, 75, 90, 0.75) 50%, rgba(92, 176, 220, 0.75));\n    border: solid 1px #102A3E;\n    display: inline-block;\n    position: absolute;\n    margin: 100px 0 0 0px;\n    overflow: visible;\n    bottom: 41px;\n    left: 0;\n}\n.start-logo {\n    margin-left: 5px;\n    position: absolute;\n}\n.applications {\n    box-shadow: 0 0 1px #fff;\n    border-radius: 3px;\n    background: white;\n    border: solid 1px #365167;\n    display: block;\n    float: left;\n    margin: 7px;\n}\n.applications ul {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    min-height: 360px;\n}\n.applications li a {\n    border: solid 1px #fff;\n    color: #4b4b4b;\n    display: block;\n    margin: 3px;\n    min-width: 220px;\n    padding: 3px;\n    text-decoration: none;\n}\n.applications li a:hover {\n    border-radius: 3px;\n    box-shadow: inset 0 0 1px #fff;\n    background-color: #cfe3fd;\n\n    background: -webkit-linear-gradient(top, #dcebfd, #c2dcfd);\n    background: linear-gradient(to bottom, #dcebfd, #c2dcfd);\n    border: solid 1px #7da2ce;\n}\n.applications li a img {\n    border: 0;\n    margin: 0 5px 0 0;\n    vertical-align: middle;\n    width: 40px;\n    height: 40px;\n}\n\n.search form {\n    background: #E4F4FC;\n    border-top: 2px solid #BEE6FD;\n    padding: 10px 0;\n    border-radius: 0 0 5px 5px;\n    display: block;\n    padding: 3px;\n    height: 30px;\n    margin: 0;\n}\n\n.search input {\n    background: white;\n    border: 1px solid #AAA;\n    padding: 3px 5px;\n    margin: 0 14px;\n    font: italic 12px Calibri,Arial,Sans-Serif;\n    color: #999;\n    width: 188px;\n    position: relative;\n    outline: none;\n}\n.sysdir {\n    margin: 7px;\n    margin-top: -30px;\n    float: left;\n    display: block;\n    padding: 0;\n    list-style: none;\n}\n.sysdir li a {\n    border: solid 1px transparent;\n    display: block;\n    margin: 5px 0;\n    position: relative;\n    color: #fff;\n    text-decoration: none;\n    min-width: 120px;\n}\n\n.sysdir li a:hover {\n    border-radius: 3px;\n    box-shadow: inset 0 0 1px #fff;\n    border: solid 1px #000;\n    background-color: #658da0;\n    background: -webkit-linear-gradient(center left, rgba(81,115,132,0.15), rgba(121,163,184,0.1) 50%, rgba(81,115,132,0.1));\n    background: linear-gradient(center left, rgba(81,115,132,0.15), rgba(121,163,184,0.1) 50%, rgba(81,115,132,0.1));\n}\n\n.sysdir li a span {\n    padding: 5px;\n    display: block;\n}\n\n.sysdir li.user {\n    text-align: center;\n}\n.user .frame {\n    padding: 3px 5px 5px 3px;\n    height: 48px;\n    width: 48px;\n    border-radius: 5px;\n    box-shadow: 0px 0px 13px #333;\n    border: 1px solid #272848;\n    margin: 0 auto;\n}\n\n.user .frame-inner {\n    background: url(\"/assets/images/logo_default_430x430.jpg\") no-repeat;\n    background-size: cover;\n    border: 1px solid #333;\n    height: 100%;\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 478:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n    height: 40px;\n    max-width: 40px;\n    margin-right: 2px;\n    float: left;\n    display: block;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 479:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n    width: 100%;\n    height: 41px;\n    left: 0;\n    bottom: 0;\n    z-index: 999;\n    display: block;\n    position: absolute;\n    background-color: #619bb9;\n    background: -webkit-linear-gradient(25deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));\n    background: linear-gradient(65deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));\n    border-top: 1px solid rgba(0, 0, 0, 0.5);\n    box-shadow: inset 0 1px 0px rgba(255, 255, 255, 0.4);\n}\n.fullscreen {\n    float: right;\n    line-height: 40px;\n    color: #fff;\n    cursor: pointer;\n}\n.datetime {\n    width: 70px;\n    display: block;\n    float: right;\n    color: white;\n    text-align: center;\n    padding: 5px;\n}\n.icons {\n    margin-left: 50px;\n}\n.icons li {\n    display: block;\n    float: left;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ":host {\n    position: absolute;\n    z-index: 2;\n    left: 0;\n    top: 0;\n    width: 850px;\n    height: 506px;\n    border: solid 1px #619bb9;\n    overflow: hidden;\n    display: inline-block;\n}\n:host.bare {\n    border: 0;\n}\n.window-layout {\n    display: table;\n    border-spacing: 5px;\n    border-collapse: separate;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n}\n.top-row {\n    width: 100%;\n    display: table-row;\n    height: 27px;\n    z-index: 1;\n}\n.top {\n    width: 100%;\n    padding: 5px 0px;\n    height: 25px;\n    display: table-cell;\n    overflow: hidden;\n}\n.title {\n    line-height: 20px;\n    display: block;\n    overflow: hidden;\n    text-align: center;\n    color: #fff;\n}\n.buttons {\n    float: right;\n    cursor: pointer;\n}\n.minimize{\n    float: right;\n    display: inline-block;\n    width: 29px;\n    height: 19px;\n    background: -webkit-linear-gradient(top, #D3CED8 50%,#a69eae 50%);\n    background: linear-gradient(to bottom, #D3CED8 50%,#a69eae 50%);\n    text-align: center;\n    color: #fff;\n    border-radius: 0 0 0 2px;\n    border: 1px solid #555;\n    border-top-width: 0px;\n    border-right-width: 0px;\n    text-shadow: -1px 0 #444, 0 1px #444, 1px 0 #444, 0 -1px #444;\n    font-size: 30px;\n    line-height: 16px;\n}\n.maximize {\n    /*\n    display: inline-block;\n    width: 16px;\n    height: 18px;\n    cursor: pointer;\n    background: url('/assets/maximize_focused_normal.png') no-repeat center center;\n\n    &:hover {\n      background: url('/assets/maximize_focused_prelight.png') no-repeat center center;\n    }\n    &:active {\n      background: url('/assets/maximize_focused_pressed.png') no-repeat center center;\n    }\n    */\n    display: inline-block;\n    width: 27px;\n    height: 19px;\n    text-align: center;\n    float: right;\n    background: -webkit-linear-gradient(top, #D3CED8 50%,#a69eae 50%);\n    background: linear-gradient(to bottom, #D3CED8 50%,#a69eae 50%);\n    color: #fff;\n    font-weight: bolder;\n    border: 1px solid #555;\n    border-top-width: 0;\n    border-right-width: 0;\n    text-shadow: -1px 0 #444, 0 1px #444, 1px 0 #444, 0 -1px #444;\n    font-size: 19px;\n    line-height: 14px;\n\n}\n.close {\n    /*display: inline-block;\n    width: 16px;\n    height: 18px;\n    background: url('/assets/close_focused_normal.png') no-repeat center center;\n\n    &:hover {\n      background: url('/assets/close_focused_prelight.png') no-repeat center center;\n    }\n    &:active {\n      background: url('/assets/close_focused_pressed.png') no-repeat center center;\n    }*/\n    display: inline-block;\n    width: 48px;\n    height: 19px;\n    float: right;\n    background: -webkit-linear-gradient(top, #f85032 50%,#e73827 50%);\n    background: linear-gradient(to bottom, #f85032 50%,#e73827 50%);\n    text-align: center;\n    color: #fff;\n    border-radius: 0 3px 3px 0;\n    border: 1px solid #555;\n    text-shadow: -1px 0 #444, 0 1px #444, 1px 0 #444, 0 -1px #444;\n    border-top-width: 0;\n}\n\n\n\n.content-row {\n    display: table-row;\n    z-index: 1;\n}\n.content {\n    display: table-cell;\n// height: 100%;\n//width: 100%;\n    overflow: hidden;\n    background: #fff;\n}\n\n\n.resize {\n    position: absolute;\n    display: block;\n    z-index: -1;\n    top: 0;\n    left: -8px;\n    right: -8px;\n    bottom: -8px;\n    cursor: move;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 482:
/***/ (function(module, exports) {

module.exports = "<desktop></desktop>\n"

/***/ }),

/***/ 483:
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:;\" (dblclick)=\"dblClick()\">\n    <img src=\"{{app.logo}}\" style=\"height: 48px;\" ><br />{{app.name}}\n</a>"

/***/ }),

/***/ 484:
/***/ (function(module, exports) {

module.exports = "<window *ngFor=\"let window of windows\" id=\"wd-{{window.id}}\" [window]=\"window\" [class.bare]=\"window.bare\" [style.width]=\"window.width+'px'\" [style.height]=\"window.height+'px'\"\n        [style.left]=\"window.x+'px'\" [style.top]=\"window.y+'px'\" [style.display]=\"window.visible?'block':'none'\" [style.zIndex]=\"window.zIndex\" (click)=\"active(window)\"></window>\n<ul>\n  <li *ngFor=\"let app of apps\">\n    <desktop-icon-item [app]=\"app\"></desktop-icon-item>\n  </li>\n</ul>\n<taskbar (notify)='onStartmenuClick($event)'></taskbar>\n<process *ngFor=\"let process of processes\" [process]=\"process\" id=\"proc-{{process.pid}}\"></process>\n<div class=\"loading-mask\" id=\"loading-mask\">\n  <p>Loading...</p>\n  <canvas id=\"loadingcanvas\" width=\"300\" height=\"300\"></canvas>\n</div>\n\n"

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

module.exports = "\n<img (click)=\"onStartClick()\" class=\"start-logo\" src=\"/assets/images/start.png\">\n<div *ngIf=\"active\" class=\"startpopup\">\n    <div class=\"applications\">\n        <ul id=\"app-list\">\n            <li *ngFor=\"let app of apps\" (click)=\"run(app)\"><a href=\"#\"><img src=\"{{app.logo}}\" alt=\"\">{{app.name}}</a></li>\n        </ul>\n\n        <div class=\"search\">\n            <form action=\"\">\n                <input type=\"text\" placeholder=\"Search programs and files\">\n            </form>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ 486:
/***/ (function(module, exports) {

module.exports = "\n<a href=\"#\">\n    <img src=\"{{process.app.logo}}\" style=\"width:100%\" (click)=\"unMinimize()\">\n</a>"

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

module.exports = "<startmenu></startmenu>\n\n<ul class=\"icons\">\n    <li *ngFor=\"let process of processes\">\n        <taskbar-icon-item [process]=\"process\"></taskbar-icon-item>\n    </li>\n</ul>\n<div class=\"datetime\" style=\"display: block;float: right;\">\n    <div>{{time}}</div>\n    <div>{{date}}</div>\n</div>\n<div class=\"fullscreen\" (click)=\"fullscreen()\">口</div>"

/***/ }),

/***/ 488:
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"window-layout\" [style.display]=\"window.bare?'none':'block'\">\n  <div class=\"top-row\">\n    <div class=\"top\">\n      <div class=\"buttons\">\n        <div class=\"close\" (click)=\"close()\">✖</div>\n        <div class=\"maximize\" *ngIf=\"window.maximizable\" (click)=\"toggleMaximize()\">□</div>\n        <div class=\"minimize\" *ngIf=\"window.minimizable\" (click)=\"minimize()\">-</div>\n      </div>\n      <div class=\"title\">{{window.title}}</div>\n    </div>\n  </div>\n\n  <div class=\"content-row\">\n    <div class=\"content\" *ngIf=\"!window.src\" [innerHTML]=\"window.content\"></div>\n    <iframe *ngIf=\"window.src\" [src]=\"window.src\" frameBorder=\"0\" width=\"100%\" height=\"100%\"></iframe>\n  </div>\n\n</div>\n\n<canvas #canvas width=\"1\" height=\"1\"></canvas>\n"

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(302);


/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__process__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__system_config_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__session_service__ = __webpack_require__(283);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProcessManagerService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProcessManagerService = (function () {
    function ProcessManagerService(http, scService, sessService) {
        this.http = http;
        this.scService = scService;
        this.sessService = sessService;
        this.pid = 1;
        this.processes = [];
    }
    ProcessManagerService.prototype.getProcesses = function () {
        return this.processes;
    };
    ProcessManagerService.prototype.getActiveProcess = function () {
        for (var i in this.processes) {
            if (this.processes[i].active) {
                return this.processes[i];
            }
        }
        return null;
    };
    ProcessManagerService.prototype.randomIntFromInterval = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    ProcessManagerService.prototype.runApp = function (app) {
        var me = this;
        document.getElementById('loading-mask').style.display = 'block';
        setTimeout(function () {
            document.getElementById('loading-mask').style.display = 'none';
        }, 3500);
        var port = me.randomIntFromInterval(10000, 30000);
        var display = me.randomIntFromInterval(10, 10000);
        //var cmd = 'sudo docker run -ti -d --net host --privileged -e DISPLAY=:' + display + ' -e PORT=' + port + ' -e APP=gedit cloudwarehouse/demo';
        var cmd = app.dockerImage;
        me.sessService.send('run', cmd, function (resp) {
            var process = new __WEBPACK_IMPORTED_MODULE_1__process__["a" /* Process */]({
                pid: me.pid++,
                entry: '/assets/js/cloudware.js',
                app: app,
                instance: null,
                token: resp,
                port: port
            });
            setTimeout(function () {
                me.processes.push(process);
                me.activeProcess(process);
            }, 0);
        });
    };
    ProcessManagerService.prototype.extrateData = function (app, res) {
        var me = this;
        var body = res.json();
        console.log(body);
        var port = body.port;
        var process = new __WEBPACK_IMPORTED_MODULE_1__process__["a" /* Process */]({
            pid: me.pid++,
            entry: '/assets/js/cloudware.js',
            app: app,
            instance: null,
            token: Math.random(),
            port: port
        });
        me.processes.push(process);
        me.activeProcess(process);
    };
    ProcessManagerService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    ProcessManagerService.prototype.activeProcess = function (process) {
        this.processes.forEach(function (proc) {
            proc.active = false;
        });
        process.active = true;
    };
    ProcessManagerService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__system_config_service__["a" /* SystemConfigService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__system_config_service__["a" /* SystemConfigService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__session_service__["a" /* SessionService */]) === 'function' && _c) || Object])
    ], ProcessManagerService);
    return ProcessManagerService;
    var _a, _b, _c;
}());
//# sourceMappingURL=process-manager.service.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__window__ = __webpack_require__(284);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WmService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WmService = (function () {
    function WmService() {
        this.windows = [];
        this.zIndex = 2;
    }
    WmService.prototype.getWindows = function () {
        return this.windows;
    };
    WmService.prototype.createWindow = function (opts) {
        var window = new __WEBPACK_IMPORTED_MODULE_1__window__["a" /* Window */](opts);
        if (!window.id)
            window.id = Math.floor(Math.random() * 10000);
        window.zIndex = this.zIndex++;
        this.windows.push(window);
        return Promise.resolve(window);
    };
    WmService.prototype.showWindow = function (window) {
        window.visible = true;
        return Promise.resolve(window);
    };
    WmService.prototype.destroyWindow = function (window) {
        for (var i in this.windows) {
            if (window == this.windows[i]) {
                this.windows.splice(parseInt(i), 1);
                break;
            }
        }
    };
    WmService.prototype.maximizeWindow = function (window) {
        window.maximize();
    };
    WmService.prototype.activeWindow = function (window) {
        window.zIndex = this.zIndex++;
    };
    WmService.prototype.getWindowById = function (id) {
        for (var i in this.windows) {
            if (this.windows[i].id == id) {
                return this.windows[i];
            }
        }
        return null;
    };
    WmService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], WmService);
    return WmService;
}());
//# sourceMappingURL=wm.service.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.bundle.js.map