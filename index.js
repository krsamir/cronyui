

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".btn {\r\n  background-color: #0e406a;\r\n  padding: 15px 25px;\r\n  color: #fff;\r\n  border: none;\r\n  outline: #fff;\r\n  border-radius: 4px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.btn:hover {\r\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\r\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n";
styleInject(css_248z$1);

var arrayToString = function (arr) {
    if (arr === void 0) { arr = []; }
    return arr.join(' ');
};

var Button = React.forwardRef(function (props, ref) {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", __assign({ ref: ref, className: arrayToString(['btn', (_a = props.className) !== null && _a !== void 0 ? _a : '']) }, props), props.children)));
});

var css_248z = ".inp{\r\n    padding: 10px 10px;\r\n    outline: none;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    /* border: 2px solid #ebebeb; */\r\n    border: 2px solid #0e406a;\r\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\r\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.inp:hover {\r\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\r\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\r\n}\r\n";
styleInject(css_248z);

var Input = React.forwardRef(function (props, ref) {
    var _a;
    return (React.createElement(React.Fragment, null,
        React.createElement("input", __assign({ ref: ref }, props, { className: arrayToString(["inp", (_a = props.className) !== null && _a !== void 0 ? _a : ""]) }))));
});

exports.Button = Button;
exports.ButtonProps = Button;
exports.Input = Input;
exports.InputProps = Input;
//# sourceMappingURL=index.js.map
