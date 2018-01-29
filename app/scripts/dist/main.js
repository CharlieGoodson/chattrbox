(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
    _classCallCheck(this, ChatApp);

    _wsClient2.default.init('ws://localhost:3001');

    _wsClient2.default.registerOpenHandler(function () {
        var message = new ChatMessage({ message: 'pow!' });
        _wsClient2.default.sendMessage(message.serialize());
    });
    _wsClient2.default.registerMessageHandler(function (data) {
        console.log(data);
    });
};

var ChatMessage = function () {
    function ChatMessage(_ref) {
        var m = _ref.message,
            _ref$user = _ref.user,
            u = _ref$user === undefined ? 'batman' : _ref$user,
            _ref$timestamp = _ref.timestamp,
            t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.message = m;
        this.user = u;
        this.timestamp = t;
    }

    _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
            return {
                user: this.user,
                message: this.message,
                timestamp: this.timestamp
            };
        }
    }]);

    return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var socket = void 0;

function init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
    socket.onopen = function () {
        console.log('open');
        handlerFunction();
    };
}

function registerMessageHandler(handlerFunction) {
    socket.onmessage = function (e) {
        console.log('message', e.data);
        var data = JSON.parse(e.data);
        handlerFunction(data);
    };
}

function sendMessage(payload) {
    socket.send(JSON.stringify(payload));
}

exports.default = {
    init: init,
    registerOpenHandler: registerOpenHandler,
    registerMessageHandler: registerMessageHandler,
    sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTSxPLEdBQ0YsbUJBQWM7QUFBQTs7QUFDVix1QkFBTyxJQUFQLENBQVkscUJBQVo7O0FBRUEsdUJBQU8sbUJBQVAsQ0FBMkIsWUFBTTtBQUM3QixZQUFJLFVBQVUsSUFBSSxXQUFKLENBQWdCLEVBQUUsU0FBUyxNQUFYLEVBQWhCLENBQWQ7QUFDQSwyQkFBTyxXQUFQLENBQW1CLFFBQVEsU0FBUixFQUFuQjtBQUNILEtBSEQ7QUFJQSx1QkFBTyxzQkFBUCxDQUE4QixVQUFDLElBQUQsRUFBVTtBQUNwQyxnQkFBUSxHQUFSLENBQVksSUFBWjtBQUNILEtBRkQ7QUFHSCxDOztJQUdDLFc7QUFDRiwrQkFJRztBQUFBLFlBSFUsQ0FHVixRQUhDLE9BR0Q7QUFBQSw2QkFGQyxJQUVEO0FBQUEsWUFGTyxDQUVQLDZCQUZTLFFBRVQ7QUFBQSxrQ0FEQyxTQUNEO0FBQUEsWUFEWSxDQUNaLGtDQURlLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUNkOztBQUFBOztBQUNDLGFBQUssT0FBTCxHQUFlLENBQWY7QUFDQSxhQUFLLElBQUwsR0FBWSxDQUFaO0FBQ0EsYUFBSyxTQUFMLEdBQWlCLENBQWpCO0FBQ0g7Ozs7b0NBRVc7QUFDUixtQkFBTztBQUNILHNCQUFNLEtBQUssSUFEUjtBQUVILHlCQUFTLEtBQUssT0FGWDtBQUdILDJCQUFXLEtBQUs7QUFIYixhQUFQO0FBS0g7Ozs7OztrQkFHVSxPOzs7OztBQ3BDZjs7Ozs7O0FBQ0E7Ozs7Ozs7O0FDREEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDZixhQUFTLElBQUksU0FBSixDQUFjLEdBQWQsQ0FBVDtBQUNBLFlBQVEsR0FBUixDQUFZLGVBQVo7QUFDSDs7QUFFRCxTQUFTLG1CQUFULENBQTZCLGVBQTdCLEVBQThDO0FBQzFDLFdBQU8sTUFBUCxHQUFnQixZQUFNO0FBQ2xCLGdCQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDSCxLQUhEO0FBSUg7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUM3QyxXQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDdEIsZ0JBQVEsR0FBUixDQUFZLFNBQVosRUFBdUIsRUFBRSxJQUF6QjtBQUNBLFlBQUksT0FBTyxLQUFLLEtBQUwsQ0FBVyxFQUFFLElBQWIsQ0FBWDtBQUNBLHdCQUFnQixJQUFoQjtBQUNILEtBSkQ7QUFLSDs7QUFFRCxTQUFTLFdBQVQsQ0FBcUIsT0FBckIsRUFBOEI7QUFDMUIsV0FBTyxJQUFQLENBQVksS0FBSyxTQUFMLENBQWUsT0FBZixDQUFaO0FBQ0g7O2tCQUVjO0FBQ1gsY0FEVztBQUVYLDRDQUZXO0FBR1gsa0RBSFc7QUFJWDtBQUpXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHNvY2tldCBmcm9tICcuL3dzLWNsaWVudCc7XHJcblxyXG5jbGFzcyBDaGF0QXBwIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHNvY2tldC5pbml0KCd3czovL2xvY2FsaG9zdDozMDAxJyk7XHJcblxyXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck9wZW5IYW5kbGVyKCgpID0+IHtcclxuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2UoeyBtZXNzYWdlOiAncG93IScgfSk7XHJcbiAgICAgICAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlLnNlcmlhbGl6ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzb2NrZXQucmVnaXN0ZXJNZXNzYWdlSGFuZGxlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIG1lc3NhZ2U6IG0sXHJcbiAgICAgICAgdXNlcjogdT0nYmF0bWFuJyxcclxuICAgICAgICB0aW1lc3RhbXA6IHQ9KG5ldyBEYXRlKCkpLmdldFRpbWUoKVxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XHJcbiAgICAgICAgdGhpcy51c2VyID0gdTtcclxuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2VyaWFsaXplKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcixcclxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHRoaXMudGltZXN0YW1wXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEFwcDsiLCJpbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XHJcbm5ldyBDaGF0QXBwKCk7IiwibGV0IHNvY2tldDtcclxuXHJcbmZ1bmN0aW9uIGluaXQodXJsKSB7XHJcbiAgICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XHJcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3Rlck9wZW5IYW5kbGVyKGhhbmRsZXJGdW5jdGlvbikge1xyXG4gICAgc29ja2V0Lm9ub3BlbiA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xyXG4gICAgICAgIGhhbmRsZXJGdW5jdGlvbigpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcclxuICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZS5kYXRhKTtcclxuICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UoZS5kYXRhKTtcclxuICAgICAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShwYXlsb2FkKSB7XHJcbiAgICBzb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeShwYXlsb2FkKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXQsXHJcbiAgICByZWdpc3Rlck9wZW5IYW5kbGVyLFxyXG4gICAgcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcixcclxuICAgIHNlbmRNZXNzYWdlXHJcbn0iXX0=
