

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

var css_248z = ".btn {\n  background-color: #0e406a;\n  padding: 15px 25px;\n  color: #fff;\n  border: none;\n  outline: #fff;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 600;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.btn:hover {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n";
styleInject(css_248z);

var arrayToString = function (arr) {
    if (arr === void 0) { arr = []; }
    return arr.join(' ');
};

/**
 * @props
 *
 * className: adds classname to the HTML element
 *
 * id: add id to the HTML element
 *
 * style: adding custom styles to the HTML element
 *
 * type: type of button: 'button' | 'reset' | 'submit'
 *
 * onClick: onClick handler for button
 *
 * autoFocus: boolean
 *
 * props: provide addition props via this object
 */
function Button(_a) {
    var _b = _a.children, children = _b === void 0 ? '' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.id, id = _d === void 0 ? '' : _d, _e = _a.style, style = _e === void 0 ? {} : _e, _f = _a.onClick, onClick = _f === void 0 ? function () { return null; } : _f, _g = _a.props, props = _g === void 0 ? {} : _g, _h = _a.autoFocus, autoFocus = _h === void 0 ? false : _h;
    return (React.createElement(React.Fragment, null,
        React.createElement("button", __assign({ id: id, className: arrayToString(['btn', className !== null && className !== void 0 ? className : '']), style: __assign({}, style), onClick: onClick, autoFocus: autoFocus }, props), children)));
}

exports.Button = Button;
exports.ButtonProps = Button;
//# sourceMappingURL=index.js.map
