(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
function get(url, success, error) {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        success(httpRequest.responseText);
      } else {
        error();
      }
    }
  };
  httpRequest.open('GET', url);
  httpRequest.send();
};

},{}],2:[function(require,module,exports){
'use strict';

var _locator = require('./locator');

var locator = _interopRequireWildcard(_locator);

var _router = require('./router');

var router = _interopRequireWildcard(_router);

var _url = require('./url');

var url = _interopRequireWildcard(_url);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

locator.start(function () {
  var request = url.parse(location.hash);
  router.route(request);
});

},{"./locator":4,"./router":6,"./url":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;

var _ajax = require('./ajax');

var ajax = _interopRequireWildcard(_ajax);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var article = document.querySelector('article');
var recent = ['Hello', 'Hi', 'My-Wildlife-Worries'];

function handler(request) {
  article.innerHTML = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = recent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var name = _step.value;

      var post = document.createElement('a');
      post.className = 'post';
      post.href = '#post/' + name;
      ajax.get('posts/' + name + '.html', function (postCopy) {
        return function (response) {
          var html = response.substr(0, 300);
          postCopy.innerHTML = html.length < 300 ? html : html + '...';
          article.appendChild(postCopy);
        };
      }(post));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
};

},{"./ajax":1}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = start;
exports.stop = stop;
function start(handler) {
  window.onhashchange = handler;
};

function stop() {
  window.onhashchange = null;
};

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handler = handler;

var _ajax = require('./ajax');

var ajax = _interopRequireWildcard(_ajax);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var article = document.querySelector('article');

function handler(request) {
  ajax.get('posts/' + request.option + '.html', function (response) {
    article.innerHTML = response;
  });
};

},{"./ajax":1}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = route;

var _home = require('./home');

var home = _interopRequireWildcard(_home);

var _post = require('./post');

var post = _interopRequireWildcard(_post);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var rules = {
  "": home.handler,
  "#post": post.handler
};

function route(request) {
  var path = request.path;

  if (rules[path]) {
    rules[path](request);
  } else {
    alert(404);
  }
}

},{"./home":3,"./post":5}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
function parse(url) {
  var tmp = url.split('/');
  return {
    path: tmp[0],
    option: tmp[1]
  };
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhamF4LmpzIiwic3JjXFxqc1xcYXBwLmpzIiwic3JjXFxqc1xcaG9tZS5qcyIsInNyY1xcanNcXGxvY2F0b3IuanMiLCJzcmNcXGpzXFxwb3N0LmpzIiwic3JjXFxqc1xccm91dGVyLmpzIiwic3JjXFxqc1xcdXJsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7UUNBZ0I7QUFBVCxTQUFTLEdBQVQsQ0FBYyxHQUFkLEVBQW1CLE9BQW5CLEVBQTRCLEtBQTVCLEVBQW1DO0FBQ3hDLE1BQUksY0FBYyxJQUFJLGNBQUosRUFBZCxDQURvQztBQUV4QyxjQUFZLGtCQUFaLEdBQWlDLFlBQVc7QUFDMUMsUUFBSSxZQUFZLFVBQVosS0FBMkIsZUFBZSxJQUFmLEVBQXFCO0FBQ2xELFVBQUksWUFBWSxNQUFaLEtBQXVCLEdBQXZCLEVBQTRCO0FBQzlCLGdCQUFRLFlBQVksWUFBWixDQUFSLENBRDhCO09BQWhDLE1BR0s7QUFDSCxnQkFERztPQUhMO0tBREY7R0FEK0IsQ0FGTztBQVl4QyxjQUFZLElBQVosQ0FBaUIsS0FBakIsRUFBd0IsR0FBeEIsRUFad0M7QUFheEMsY0FBWSxJQUFaLEdBYndDO0NBQW5DOzs7Ozs7O0lDQUs7Ozs7SUFDQTs7OztJQUNBOzs7O0FBRVosUUFBUSxLQUFSLENBQWUsWUFBTTtBQUNuQixNQUFJLFVBQVUsSUFBSSxLQUFKLENBQVUsU0FBUyxJQUFULENBQXBCLENBRGU7QUFFbkIsU0FBTyxLQUFQLENBQWEsT0FBYixFQUZtQjtDQUFOLENBQWY7Ozs7Ozs7O1FDQWdCOzs7O0lBSko7Ozs7QUFDWixJQUFJLFVBQVUsU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQVY7QUFDSixJQUFJLFNBQVMsQ0FBQyxPQUFELEVBQVUsSUFBVixFQUFnQixxQkFBaEIsQ0FBVDs7QUFFRyxTQUFTLE9BQVQsQ0FBa0IsT0FBbEIsRUFBMkI7QUFDaEMsVUFBUSxTQUFSLEdBQW9CLEVBQXBCLENBRGdDOzs7Ozs7QUFFaEMseUJBQWlCLGdDQUFqQixvR0FBeUI7VUFBaEIsbUJBQWdCOztBQUN2QixVQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQVAsQ0FEbUI7QUFFdkIsV0FBSyxTQUFMLEdBQWlCLE1BQWpCLENBRnVCO0FBR3ZCLFdBQUssSUFBTCxjQUFxQixJQUFyQixDQUh1QjtBQUl2QixXQUFLLEdBQUwsWUFBa0IsY0FBbEIsRUFBZ0MsVUFBVyxRQUFWLEVBQW9CO0FBQ25ELGVBQU8sVUFBVSxRQUFWLEVBQW9CO0FBQ3pCLGNBQUksT0FBTyxTQUFTLE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsR0FBbkIsQ0FBUCxDQURxQjtBQUV6QixtQkFBUyxTQUFULEdBQXFCLEtBQUssTUFBTCxHQUFjLEdBQWQsR0FBb0IsSUFBcEIsR0FBMkIsT0FBTyxLQUFQLENBRnZCO0FBR3pCLGtCQUFRLFdBQVIsQ0FBb0IsUUFBcEIsRUFIeUI7U0FBcEIsQ0FENEM7T0FBcEIsQ0FNOUIsSUFONkIsQ0FBaEMsRUFKdUI7S0FBekI7Ozs7Ozs7Ozs7Ozs7O0dBRmdDO0NBQTNCOzs7Ozs7OztRQ0pTO1FBSUE7QUFKVCxTQUFTLEtBQVQsQ0FBZ0IsT0FBaEIsRUFBeUI7QUFDOUIsU0FBTyxZQUFQLEdBQXNCLE9BQXRCLENBRDhCO0NBQXpCOztBQUlBLFNBQVMsSUFBVCxHQUFpQjtBQUN0QixTQUFPLFlBQVAsR0FBc0IsSUFBdEIsQ0FEc0I7Q0FBakI7Ozs7Ozs7O1FDRFM7Ozs7SUFISjs7OztBQUNaLElBQUksVUFBVSxTQUFTLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBVjs7QUFFRyxTQUFTLE9BQVQsQ0FBaUIsT0FBakIsRUFBMEI7QUFDL0IsT0FBSyxHQUFMLFlBQWtCLFFBQVEsTUFBUixVQUFsQixFQUF5QyxVQUFVLFFBQVYsRUFBb0I7QUFDM0QsWUFBUSxTQUFSLEdBQW9CLFFBQXBCLENBRDJEO0dBQXBCLENBQXpDLENBRCtCO0NBQTFCOzs7Ozs7OztRQ0tTOzs7O0lBUko7Ozs7SUFDQTs7OztBQUVaLElBQUksUUFBUTtBQUNWLE1BQUksS0FBSyxPQUFMO0FBQ0osV0FBUyxLQUFLLE9BQUw7Q0FGUDs7QUFLRyxTQUFTLEtBQVQsQ0FBZ0IsT0FBaEIsRUFBeUI7QUFDOUIsTUFBSSxPQUFPLFFBQVEsSUFBUixDQURtQjs7QUFHOUIsTUFBSSxNQUFNLElBQU4sQ0FBSixFQUFpQjtBQUNmLFVBQU0sSUFBTixFQUFZLE9BQVosRUFEZTtHQUFqQixNQUdLO0FBQ0gsVUFBTSxHQUFOLEVBREc7R0FITDtDQUhLOzs7Ozs7OztRQ1JTO0FBQVQsU0FBUyxLQUFULENBQWdCLEdBQWhCLEVBQXFCO0FBQzFCLE1BQUksTUFBTSxJQUFJLEtBQUosQ0FBVSxHQUFWLENBQU4sQ0FEc0I7QUFFMUIsU0FBTztBQUNMLFVBQU8sSUFBSSxDQUFKLENBQVA7QUFDQSxZQUFTLElBQUksQ0FBSixDQUFUO0dBRkYsQ0FGMEI7Q0FBckIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiZXhwb3J0IGZ1bmN0aW9uIGdldCAodXJsLCBzdWNjZXNzLCBlcnJvcikge1xyXG4gIHZhciBodHRwUmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gIGh0dHBSZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgaWYgKGh0dHBSZXF1ZXN0LnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUpIHtcclxuICAgICAgaWYgKGh0dHBSZXF1ZXN0LnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgc3VjY2VzcyhodHRwUmVxdWVzdC5yZXNwb25zZVRleHQpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIGVycm9yKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIGh0dHBSZXF1ZXN0Lm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgaHR0cFJlcXVlc3Quc2VuZCgpO1xyXG59OyIsImltcG9ydCAqIGFzIGxvY2F0b3IgZnJvbSAnLi9sb2NhdG9yJztcclxuaW1wb3J0ICogYXMgcm91dGVyIGZyb20gJy4vcm91dGVyJztcclxuaW1wb3J0ICogYXMgdXJsIGZyb20gJy4vdXJsJztcclxuXHJcbmxvY2F0b3Iuc3RhcnQoICgpID0+IHtcclxuICB2YXIgcmVxdWVzdCA9IHVybC5wYXJzZShsb2NhdGlvbi5oYXNoKTtcclxuICByb3V0ZXIucm91dGUocmVxdWVzdCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgKiBhcyBhamF4IGZyb20gJy4vYWpheCc7XHJcbnZhciBhcnRpY2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXJ0aWNsZScpO1xyXG52YXIgcmVjZW50ID0gWydIZWxsbycsICdIaScsICdNeS1XaWxkbGlmZS1Xb3JyaWVzJ107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlciAocmVxdWVzdCkge1xyXG4gIGFydGljbGUuaW5uZXJIVE1MID0gJyc7XHJcbiAgZm9yICh2YXIgbmFtZSBvZiByZWNlbnQpIHtcclxuICAgIHZhciBwb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgcG9zdC5jbGFzc05hbWUgPSAncG9zdCc7XHJcbiAgICBwb3N0LmhyZWYgPSBgI3Bvc3QvJHtuYW1lfWA7XHJcbiAgICBhamF4LmdldChgcG9zdHMvJHtuYW1lfS5odG1sYCwgIChmdW5jdGlvbiAocG9zdENvcHkpIHtcclxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChyZXNwb25zZSkgeyAgICAgIFxyXG4gICAgICAgIHZhciBodG1sID0gcmVzcG9uc2Uuc3Vic3RyKDAsIDMwMCk7XHJcbiAgICAgICAgcG9zdENvcHkuaW5uZXJIVE1MID0gaHRtbC5sZW5ndGggPCAzMDAgPyBodG1sIDogaHRtbCArICcuLi4nO1xyXG4gICAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQocG9zdENvcHkpO1xyXG4gICAgICB9O1xyXG4gICAgfSkocG9zdCkpO1xyXG4gIH1cclxufTsiLCJleHBvcnQgZnVuY3Rpb24gc3RhcnQgKGhhbmRsZXIpIHtcclxuICB3aW5kb3cub25oYXNoY2hhbmdlID0gaGFuZGxlcjtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdG9wICgpIHtcclxuICB3aW5kb3cub25oYXNoY2hhbmdlID0gbnVsbDtcclxufTtcclxuIiwiaW1wb3J0ICogYXMgYWpheCBmcm9tICcuL2FqYXgnO1xyXG52YXIgYXJ0aWNsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2FydGljbGUnKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVyKHJlcXVlc3QpIHtcclxuICBhamF4LmdldChgcG9zdHMvJHtyZXF1ZXN0Lm9wdGlvbn0uaHRtbGAsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgYXJ0aWNsZS5pbm5lckhUTUwgPSByZXNwb25zZTtcclxuICB9KTtcclxufTsiLCJpbXBvcnQgKiBhcyBob21lIGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCAqIGFzIHBvc3QgZnJvbSAnLi9wb3N0JztcclxuXHJcbnZhciBydWxlcyA9IHtcclxuICBcIlwiOiBob21lLmhhbmRsZXIsXHJcbiAgXCIjcG9zdFwiOiBwb3N0LmhhbmRsZXJcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvdXRlIChyZXF1ZXN0KSB7XHJcbiAgdmFyIHBhdGggPSByZXF1ZXN0LnBhdGg7XHJcbiAgXHJcbiAgaWYgKHJ1bGVzW3BhdGhdKSB7XHJcbiAgICBydWxlc1twYXRoXShyZXF1ZXN0KTtcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICBhbGVydCg0MDQpO1xyXG4gIH1cclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2UgKHVybCkge1xyXG4gIHZhciB0bXAgPSB1cmwuc3BsaXQoJy8nKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aCA6IHRtcFswXSwgXHJcbiAgICBvcHRpb24gOiB0bXBbMV1cclxuICB9O1xyXG59OyJdfQ==
