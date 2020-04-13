import React__default, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

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

var css = ".CallLog_showFiles__136HB {\r\n  margin: 0;\r\n}\r\n\r\n.CallLog_showFiles__136HB:hover {\r\n  text-decoration: underline;\r\n  cursor: pointer;\r\n  color: blue;\r\n}\r\n\r\n.CallLog_calllog__row__34tja td {\r\n  font-size: 14px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n";
var styles = { "showFiles": "CallLog_showFiles__136HB", "calllog__row": "CallLog_calllog__row__34tja" };
styleInject(css);

var callLog = function callLog(props) {
  var date = new Date(props.call_start_time);
  // let startDate = new Date(
  //   date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate()
  // );
  // console.log(startDate.toLocaleString());
  // let startTime = new Date(
  //   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
  // );

  return React__default.createElement(
    "tr",
    { className: styles.calllog__row },
    React__default.createElement(
      "td",
      null,
      props.room_id
    ),
    React__default.createElement(
      "td",
      { className: "text-muted" },
      "22 Feb 2020"
    ),
    React__default.createElement(
      "td",
      null,
      date.toLocaleTimeString()
    ),
    React__default.createElement(
      "td",
      null,
      convertToHMS((new Date(props.call_end_time).getTime() - new Date(props.call_start_time).getTime()) / 1000)
    ),
    React__default.createElement(
      "td",
      null,
      props.to_phonenumber
    ),
    React__default.createElement(
      "td",
      null,
      props.files_count ? React__default.createElement("i", {
        onClick: props.showImage,
        className: "fa fa-file-image-o showFiles",
        "aria-hidden": "true"
      }) : null
    )
  );
};

function convertToHMS(seconds) {
  seconds = Number(seconds);
  var h = Math.floor(seconds / 3600);
  var m = Math.floor(seconds % 3600 / 60);
  var s = Math.floor(seconds % 3600 % 60);
  console.log(h, m, s);
  h = h > 0 ? h + (h == 1 ? "hr " : "hrs ") : "";
  m = m > 0 ? m + (m == 1 ? "min " : "mins ") : "";
  s = s > 0 ? s + "sec" : "";
  return h + m + s;
}

var css$1 = ".CallLogs_calllogs__thead__1li2X {\r\n}\r\n\r\n.CallLogs_calllogs__thead__1li2X th {\r\n  font-size: small;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n";
var styles$1 = { "calllogs__thead": "CallLogs_calllogs__thead__1li2X" };
styleInject(css$1);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

function getScrollbarWidth() {
  var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

  scrollDiv.style.position = 'absolute';
  scrollDiv.style.top = '-9999px';
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
function setScrollbarWidth(padding) {
  document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
}
function isBodyOverflowing() {
  return document.body.clientWidth < window.innerWidth;
}
function getOriginalBodyPadding() {
  var style = window.getComputedStyle(document.body, null);
  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
}
function conditionallyUpdateScrollbar() {
  var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

  if (isBodyOverflowing()) {
    setScrollbarWidth(bodyPadding + scrollbarWidth);
  }
}
var globalCssModule;
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
/**
 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
 */

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
/**
 * Returns a filtered copy of an object with only the specified keys.
 */

function pick(obj, keys) {
  var pickKeys = Array.isArray(keys) ? keys : [keys];
  var length = pickKeys.length;
  var key;
  var result = {};

  while (length > 0) {
    length -= 1;
    key = pickKeys[length];
    result[key] = obj[key];
  }

  return result;
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement, PropTypes.shape({
  current: PropTypes.any
})]);
var tagPropType = PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
}), PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.shape({
  $$typeof: PropTypes.symbol,
  render: PropTypes.func
})]))]);
/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
// These are all setup to match what is in the bootstrap _variables.scss
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

var TransitionTimeouts = {
  Fade: 150,
  // $transition-fade
  Collapse: 350,
  // $transition-collapse
  Modal: 300,
  // $modal-transition
  Carousel: 600 // $carousel-transition

}; // Duplicated Transition.propType keys to ensure that Reactstrap builds
// for distribution properly exclude these keys for nested child HTML attributes
// since `react-transition-group` removes propTypes in production builds.

var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
var TransitionStatuses = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited'
};
var keyCodes = {
  esc: 27,
  space: 32,
  enter: 13,
  tab: 9,
  up: 38,
  down: 40,
  home: 36,
  end: 35,
  n: 78,
  p: 80
};
var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function isReactRefObj(target) {
  if (target && typeof target === 'object') {
    return 'current' in target;
  }

  return false;
}

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return Object.prototype.toString.call(value);
}
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }

  var tag = getTag(value);
  return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
}
function findDOMElements(target) {
  if (isReactRefObj(target)) {
    return target.current;
  }

  if (isFunction(target)) {
    return target();
  }

  if (typeof target === 'string' && canUseDOM) {
    var selection = document.querySelectorAll(target);

    if (!selection.length) {
      selection = document.querySelectorAll("#" + target);
    }

    if (!selection.length) {
      throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
    }

    return selection;
  }

  return target;
}
function isArrayOrNodeList(els) {
  if (els === null) {
    return false;
  }

  return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
}
function getTarget(target, allElements) {
  var els = findDOMElements(target);

  if (allElements) {
    if (isArrayOrNodeList(els)) {
      return els;
    }

    if (els === null) {
      return [];
    }

    return [els];
  } else {
    if (isArrayOrNodeList(els)) {
      return els[0];
    }

    return els;
  }
}
var defaultToggleEvents = ['touchstart', 'click'];
function addMultipleEventListeners(_els, handler, _events, useCapture) {
  var els = _els;

  if (!isArrayOrNodeList(els)) {
    els = [els];
  }

  var events = _events;

  if (typeof events === 'string') {
    events = events.split(/\s+/);
  }

  if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
    throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
  }

  Array.prototype.forEach.call(events, function (event) {
    Array.prototype.forEach.call(els, function (el) {
      el.addEventListener(event, handler, useCapture);
    });
  });
  return function removeEvents() {
    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.removeEventListener(event, handler, useCapture);
      });
    });
  };
}
var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

var propTypes = {
  tag: tagPropType,
  fluid: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var rowColsPropType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var propTypes$1 = {
  tag: tagPropType,
  noGutters: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  form: PropTypes.bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};

var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$2 = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  widths: PropTypes.array
};

var propTypes$3 = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  full: PropTypes.bool,
  fixed: PropTypes.string,
  sticky: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

var propTypes$4 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$5 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$6 = {
  tag: tagPropType,
  type: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node
};

var propTypes$7 = {
  tabs: PropTypes.bool,
  pills: PropTypes.bool,
  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  horizontal: PropTypes.string,
  justified: PropTypes.bool,
  fill: PropTypes.bool,
  navbar: PropTypes.bool,
  card: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$8 = {
  tag: tagPropType,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes$9 = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  onClick: PropTypes.func,
  href: PropTypes.any
};
var defaultProps$9 = {
  tag: 'a'
};

var NavLink =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(NavLink, _React$Component);

  function NavLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = NavLink.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.href === '#') {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        active = _this$props.active,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'nav-link', {
      disabled: attributes.disabled,
      active: active
    }), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      onClick: this.onClick,
      className: classes
    }));
  };

  return NavLink;
}(React__default.Component);

NavLink.propTypes = propTypes$9;
NavLink.defaultProps = defaultProps$9;

var propTypes$a = {
  tag: tagPropType,
  listTag: tagPropType,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  'aria-label': PropTypes.string
};

var propTypes$b = {
  tag: tagPropType,
  active: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$c = {
  active: PropTypes.bool,
  'aria-label': PropTypes.string,
  block: PropTypes.bool,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  size: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  close: PropTypes.bool
};
var defaultProps$c = {
  color: 'secondary',
  tag: 'button'
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = React__default.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classnames(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return React__default.createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(React__default.Component);

Button.propTypes = propTypes$c;
Button.defaultProps = defaultProps$c;

var propTypes$d = {
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  defaultValue: PropTypes.bool
};
var defaultProps$d = {
  defaultValue: false
};

var ButtonToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ButtonToggle, _React$Component);

  function ButtonToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      toggled: props.defaultValue,
      focus: false
    };
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = ButtonToggle.prototype;

  _proto.onBlur = function onBlur(e) {
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }

    this.setState({
      focus: false
    });
  };

  _proto.onFocus = function onFocus(e) {
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }

    this.setState({
      focus: true
    });
  };

  _proto.onClick = function onClick(e) {
    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.setState(function (_ref) {
      var toggled = _ref.toggled;
      return {
        toggled: !toggled
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className"]);

    var classes = mapToCssModules(classnames(className, {
      focus: this.state.focus
    }), this.props.cssModule);
    return React__default.createElement(Button, _extends({
      active: this.state.toggled,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onClick: this.onClick,
      className: classes
    }, attributes));
  };

  return ButtonToggle;
}(React__default.Component);

ButtonToggle.propTypes = propTypes$d;
ButtonToggle.defaultProps = defaultProps$d;

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose$1;

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _assertThisInitialized$1(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized$1;

function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose$1;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

var toStr = Object.prototype.toString;

var isArguments = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};

var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr$1 = Object.prototype.toString;
	var isArgs = isArguments; // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr$1.call(object) === '[object Function]';
		var isArguments$$1 = isArgs(object);
		var isString = isObject && toStr$1.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments$$1) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments$$1 && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
var implementation = keysShim;

var slice = Array.prototype.slice;


var origKeys = Object.keys;
var keysShim$1 = origKeys ? function keys(o) { return origKeys(o); } : implementation;

var originalKeys = Object.keys;

keysShim$1.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArguments(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim$1;
	}
	return Object.keys || keysShim$1;
};

var objectKeys = keysShim$1;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr$2 = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr$2.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr$2.call(value) !== '[object Array]' &&
		toStr$2.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

// http://www.ecma-international.org/ecma-262/6.0/#sec-object.is

var numberIsNaN = function (value) {
	return value !== value;
};

var objectIs = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice$1 = Array.prototype.slice;
var toStr$3 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$1 = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr$3.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice$1.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice$1.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice$1.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

var functionBind = Function.prototype.bind || implementation$1;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
	try {
		var lastIndex = value.lastIndex;
		value.lastIndex = 0; // eslint-disable-line no-param-reassign

		regexExec.call(value);
		return true;
	} catch (e) {
		return false;
	} finally {
		value.lastIndex = lastIndex; // eslint-disable-line no-param-reassign
	}
};
var toStr$4 = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag$1 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var isRegex = function isRegex(value) {
	if (!value || typeof value !== 'object') {
		return false;
	}
	if (!hasToStringTag$1) {
		return toStr$4.call(value) === regexClass;
	}

	var descriptor = gOPD(value, 'lastIndex');
	var hasLastIndexDataProperty = descriptor && src(descriptor, 'value');
	if (!hasLastIndexDataProperty) {
		return false;
	}

	return tryRegexExecCall(value);
};

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr$5 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction$1 = function (fn) {
	return typeof fn === 'function' && toStr$5.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty$1 = function (object, name, value, predicate) {
	if (name in object && (!isFunction$1(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = objectKeys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty$1(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

var defineProperties_1 = defineProperties;

/* eslint complexity: [2, 18], max-statements: [2, 33] */
var shams = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

var origSymbol = commonjsGlobal.Symbol;


var hasSymbols$1 = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return shams();
};

/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined$1;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols$2 = hasSymbols$1();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto
var generatorFunction = undefined$1;
var asyncFunction = undefined$1;
var asyncGenFunction = undefined$1;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined$1 : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined$1 : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols$2 ? getProto([][Symbol.iterator]()) : undefined$1,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined$1,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': undefined$1,
	'%AsyncGenerator%': undefined$1,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': undefined$1,
	'%AsyncIteratorPrototype%': undefined$1,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined$1 : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined$1 : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined$1 : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined$1 : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined$1 : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': undefined$1,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': undefined$1,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined$1 : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined$1 : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined$1 : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined$1 : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols$2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined$1,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined$1,
	'%Map%': typeof Map === 'undefined' ? undefined$1 : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined$1 : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined$1 : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined$1 : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined$1 : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined$1 : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined$1 : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined$1 : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined$1 : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined$1 : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols$2 ? undefined$1 : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined$1 : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined$1 : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols$2 ? getProto(''[Symbol.iterator]()) : undefined$1,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols$2 ? Symbol : undefined$1,
	'%SymbolPrototype%': hasSymbols$2 ? Symbol.prototype : undefined$1,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined$1,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined$1 : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined$1 : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined$1 : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined$1 : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined$1 : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined$1 : WeakSet.prototype
};


var $replace = functionBind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

var GetIntrinsic = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};

var $Function = GetIntrinsic('%Function%');
var $apply = $Function.apply;
var $call = $Function.call;

var callBind = function callBind() {
	return functionBind.apply($call, arguments);
};

var apply = function applyBind() {
	return functionBind.apply($apply, arguments);
};
callBind.apply = apply;

var $Object = Object;
var $TypeError$1 = TypeError;

var implementation$2 = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError$1('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};

var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;
var $gOPD$1 = Object.getOwnPropertyDescriptor;
var $TypeError$2 = TypeError;

var polyfill = function getPolyfill() {
	if (!supportsDescriptors$1) {
		throw new $TypeError$2('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD$1(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation$2;
};

var supportsDescriptors$2 = defineProperties_1.supportsDescriptors;

var gOPD$1 = Object.getOwnPropertyDescriptor;
var defineProperty$2 = Object.defineProperty;
var TypeErr = TypeError;
var getProto$1 = Object.getPrototypeOf;
var regex = /a/;

var shim = function shimFlags() {
	if (!supportsDescriptors$2 || !getProto$1) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill$$1 = polyfill();
	var proto = getProto$1(regex);
	var descriptor = gOPD$1(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill$$1) {
		defineProperty$2(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill$$1
		});
	}
	return polyfill$$1;
};

var flagsBound = callBind(implementation$2);

defineProperties_1(flagsBound, {
	getPolyfill: polyfill,
	implementation: implementation$2,
	shim: shim
});

var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr$6 = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag$2 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var isDateObject = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag$2 ? tryDateObject(value) : toStr$6.call(value) === dateClass;
};

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? objectIs(actual, expected) : actual === expected) {
    return true;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? objectIs(actual, expected) : actual == expected;
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }
  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;
  if (typeof a !== typeof b) { return false; }
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) { return false; }

  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) { return false; }

  if (isArguments$1(a) !== isArguments$1(b)) { return false; }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if (aIsRegex || bIsRegex) {
    return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
  }

  if (isDateObject(a) && isDateObject(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) { // happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; }
  }
  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) { return false; }
  }

  return true;
}

var deepEqual_1 = deepEqual;

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }
  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction$2(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */
function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width']) + parseFloat(styles['border' + sideB + 'Width']);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$3 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop);
    var marginLeft = parseFloat(styles.marginLeft);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  var parentNode = getParentNode(element);
  if (!parentNode) {
    return false;
  }
  return isFixed(parentNode);
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction$2(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);

  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized]);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width']);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$3(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$3(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;

    // flips variation if reference element overflows boundaries
    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    // flips variation if popper content overflows boundaries
    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);

    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty$3({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty$3({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty$3({}, side, reference[side]),
      end: defineProperty$3({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',
    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,
    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction$2(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

var key = '__global_unique_id__';

var gud = function() {
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
};

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

var implementation$3 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(PropTypes);



var _gud2 = _interopRequireDefault(gud);



var _warning2 = _interopRequireDefault(warning_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (process.env.NODE_ENV !== 'production') {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(React__default.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(React__default.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];
});

unwrapExports(implementation$3);

var lib = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _react2 = _interopRequireDefault(React__default);



var _implementation2 = _interopRequireDefault(implementation$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];
});

var createContext = unwrapExports(lib);

var ManagerReferenceNodeContext = createContext();
var ManagerReferenceNodeSetterContext = createContext();

var Manager =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(Manager, _React$Component);

  function Manager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty(assertThisInitialized(_this), "referenceNode", void 0);

    defineProperty(assertThisInitialized(_this), "setReferenceNode", function (newReferenceNode) {
      if (newReferenceNode && _this.referenceNode !== newReferenceNode) {
        _this.referenceNode = newReferenceNode;

        _this.forceUpdate();
      }
    });

    return _this;
  }

  var _proto = Manager.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.referenceNode = null;
  };

  _proto.render = function render() {
    return createElement(ManagerReferenceNodeContext.Provider, {
      value: this.referenceNode
    }, createElement(ManagerReferenceNodeSetterContext.Provider, {
      value: this.setReferenceNode
    }, this.props.children));
  };

  return Manager;
}(Component);

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === "function") {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Does a shallow equality check of two objects by comparing the reference
 * equality of each value.
 */

var shallowEqual = function shallowEqual(objA, objB) {
  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (bKeys.length !== aKeys.length) {
    return false;
  }

  for (var i = 0; i < bKeys.length; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === "function") {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};

var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};
var initialArrowStyle = {};
var InnerPopper =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerPopper, _React$Component);

  function InnerPopper() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty(assertThisInitialized(_this), "state", {
      data: undefined,
      placement: undefined
    });

    defineProperty(assertThisInitialized(_this), "popperInstance", void 0);

    defineProperty(assertThisInitialized(_this), "popperNode", null);

    defineProperty(assertThisInitialized(_this), "arrowNode", null);

    defineProperty(assertThisInitialized(_this), "setPopperNode", function (popperNode) {
      if (!popperNode || _this.popperNode === popperNode) return;
      setRef(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    });

    defineProperty(assertThisInitialized(_this), "setArrowNode", function (arrowNode) {
      _this.arrowNode = arrowNode;
    });

    defineProperty(assertThisInitialized(_this), "updateStateModifier", {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({
          data: data,
          placement: placement
        });

        return data;
      }
    });

    defineProperty(assertThisInitialized(_this), "getOptions", function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: _extends_1({}, _this.props.modifiers, {
          arrow: _extends_1({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: {
            enabled: false
          },
          updateStateModifier: _this.updateStateModifier
        })
      };
    });

    defineProperty(assertThisInitialized(_this), "getPopperStyle", function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : _extends_1({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    });

    defineProperty(assertThisInitialized(_this), "getPopperPlacement", function () {
      return !_this.state.data ? undefined : _this.state.placement;
    });

    defineProperty(assertThisInitialized(_this), "getArrowStyle", function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    });

    defineProperty(assertThisInitialized(_this), "getOutOfBoundariesState", function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    });

    defineProperty(assertThisInitialized(_this), "destroyPopperInstance", function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();

      _this.popperInstance = null;
    });

    defineProperty(assertThisInitialized(_this), "updatePopperInstance", function () {
      _this.destroyPopperInstance();

      var _assertThisInitialize = assertThisInitialized(_this),
          popperNode = _assertThisInitialize.popperNode;

      var referenceElement = _this.props.referenceElement;
      if (!referenceElement || !popperNode) return;
      _this.popperInstance = new Popper(referenceElement, popperNode, _this.getOptions());
    });

    defineProperty(assertThisInitialized(_this), "scheduleUpdate", function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    });

    return _this;
  }

  var _proto = InnerPopper.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed || !deepEqual_1(this.props.modifiers, prevProps.modifiers, {
      strict: true
    })) {
      // develop only check that modifiers isn't being updated needlessly
      if (process.env.NODE_ENV === "development") {
        if (this.props.modifiers !== prevProps.modifiers && this.props.modifiers != null && prevProps.modifiers != null && shallowEqual(this.props.modifiers, prevProps.modifiers)) {
          console.warn("'modifiers' prop reference updated even though all values appear the same.\nConsider memoizing the 'modifiers' object to avoid needless rendering.");
        }
      }

      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    } // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.


    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
    this.destroyPopperInstance();
  };

  _proto.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(Component);

defineProperty(InnerPopper, "defaultProps", {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
});
function Popper$1(_ref) {
  var referenceElement = _ref.referenceElement,
      props = objectWithoutPropertiesLoose(_ref, ["referenceElement"]);

  return createElement(ManagerReferenceNodeContext.Consumer, null, function (referenceNode) {
    return createElement(InnerPopper, _extends_1({
      referenceElement: referenceElement !== undefined ? referenceElement : referenceNode
    }, props));
  });
}

var InnerReference =
/*#__PURE__*/
function (_React$Component) {
  inheritsLoose(InnerReference, _React$Component);

  function InnerReference() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    defineProperty(assertThisInitialized(_this), "refHandler", function (node) {
      setRef(_this.props.innerRef, node);
      safeInvoke(_this.props.setReferenceNode, node);
    });

    return _this;
  }

  var _proto = InnerReference.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    setRef(this.props.innerRef, null);
  };

  _proto.render = function render() {
    warning_1(Boolean(this.props.setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({
      ref: this.refHandler
    });
  };

  return InnerReference;
}(Component);

function Reference(props) {
  return createElement(ManagerReferenceNodeSetterContext.Consumer, null, function (setReferenceNode) {
    return createElement(InnerReference, _extends_1({
      setReferenceNode: setReferenceNode
    }, props));
  });
}

// Public components
 // Public types

/**
 * DropdownContext
 * {
 *  toggle: PropTypes.func.isRequired,
 *  isOpen: PropTypes.bool.isRequired,
 *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
 *  inNavbar: PropTypes.bool.isRequired,
 *  disabled: PropTypes.bool
 * }
 */

var DropdownContext = React__default.createContext({});

var propTypes$e = {
  a11y: PropTypes.bool,
  disabled: PropTypes.bool,
  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
  group: PropTypes.bool,
  isOpen: PropTypes.bool,
  nav: PropTypes.bool,
  active: PropTypes.bool,
  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
  size: PropTypes.string,
  tag: tagPropType,
  toggle: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  inNavbar: PropTypes.bool,
  setActiveFromChild: PropTypes.bool
};
var defaultProps$e = {
  a11y: true,
  isOpen: false,
  direction: 'down',
  nav: false,
  active: false,
  addonType: false,
  inNavbar: false,
  setActiveFromChild: false
};
var preventDefaultKeys = [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down, keyCodes.end, keyCodes.home];

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
    _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.containerRef = React__default.createRef();
    return _this;
  }

  var _proto = Dropdown.prototype;

  _proto.getContextValue = function getContextValue() {
    return {
      toggle: this.toggle,
      isOpen: this.props.isOpen,
      direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
      inNavbar: this.props.inNavbar,
      disabled: this.props.disabled
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.handleProps();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.isOpen !== prevProps.isOpen) {
      this.handleProps();
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.removeEvents();
  };

  _proto.getContainer = function getContainer() {
    return this.containerRef.current;
  };

  _proto.getMenuCtrl = function getMenuCtrl() {
    if (this._$menuCtrl) return this._$menuCtrl;
    this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
    return this._$menuCtrl;
  };

  _proto.getMenuItems = function getMenuItems() {
    return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
  };

  _proto.addEvents = function addEvents() {
    var _this2 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.addEventListener(event, _this2.handleDocumentClick, true);
    });
  };

  _proto.removeEvents = function removeEvents() {
    var _this3 = this;

    ['click', 'touchstart', 'keyup'].forEach(function (event) {
      return document.removeEventListener(event, _this3.handleDocumentClick, true);
    });
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
    var container = this.getContainer();

    if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
      return;
    }

    this.toggle(e);
  };

  _proto.handleKeyDown = function handleKeyDown(e) {
    var _this4 = this;

    if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && (e.target.getAttribute('role') !== 'menuitem' || !this.props.a11y)) {
      return;
    }

    if (preventDefaultKeys.indexOf(e.which) !== -1 || e.which >= 48 && e.which <= 90) {
      e.preventDefault();
    }

    if (this.props.disabled) return;

    if (this.getMenuCtrl() === e.target) {
      if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
        this.toggle(e);
        setTimeout(function () {
          return _this4.getMenuItems()[0].focus();
        });
      } else if (this.props.isOpen && e.which === keyCodes.esc) {
        this.toggle(e);
      }
    }

    if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
      if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
        this.toggle(e);
        this.getMenuCtrl().focus();
      } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
        e.target.click();
        this.getMenuCtrl().focus();
      } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
        var $menuitems = this.getMenuItems();
        var index = $menuitems.indexOf(e.target);

        if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
          index = index !== 0 ? index - 1 : $menuitems.length - 1;
        } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
          index = index === $menuitems.length - 1 ? 0 : index + 1;
        }

        $menuitems[index].focus();
      } else if (keyCodes.end === e.which) {
        var _$menuitems = this.getMenuItems();

        _$menuitems[_$menuitems.length - 1].focus();
      } else if (keyCodes.home === e.which) {
        var _$menuitems2 = this.getMenuItems();

        _$menuitems2[0].focus();
      } else if (e.which >= 48 && e.which <= 90) {
        var _$menuitems3 = this.getMenuItems();

        var charPressed = String.fromCharCode(e.which).toLowerCase();

        for (var i = 0; i < _$menuitems3.length; i += 1) {
          var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

          if (firstLetter === charPressed) {
            _$menuitems3[i].focus();

            break;
          }
        }
      }
    }
  };

  _proto.handleProps = function handleProps() {
    if (this.props.isOpen) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    var _classNames, _ref;

    var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        direction = _omit.direction,
        isOpen = _omit.isOpen,
        group = _omit.group,
        size = _omit.size,
        nav = _omit.nav,
        setActiveFromChild = _omit.setActiveFromChild,
        active = _omit.active,
        addonType = _omit.addonType,
        tag = _omit.tag,
        attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

    var Tag = tag || (nav ? 'li' : 'div');
    var subItemIsActive = false;

    if (setActiveFromChild) {
      React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
        if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
      });
    }

    var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
    return React__default.createElement(DropdownContext.Provider, {
      value: this.getContextValue()
    }, React__default.createElement(Manager, null, React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
      onKeyDown: this.handleKeyDown,
      className: classes
    }))));
  };

  return Dropdown;
}(React__default.Component);

Dropdown.propTypes = propTypes$e;
Dropdown.defaultProps = defaultProps$e;

var propTypes$f = {
  children: PropTypes.node
};

var ButtonDropdown = function ButtonDropdown(props) {
  return React__default.createElement(Dropdown, _extends({
    group: true
  }, props));
};

ButtonDropdown.propTypes = propTypes$f;

var propTypes$g = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};

var propTypes$h = {
  tag: tagPropType,
  'aria-label': PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  role: PropTypes.string
};

var propTypes$i = {
  children: PropTypes.node,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  tag: tagPropType,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.bool
};
var defaultProps$h = {
  tag: 'button',
  toggle: true
};

var DropdownItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownItem, _React$Component);

  function DropdownItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownItem.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.props.header || this.props.divider) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    if (this.props.toggle) {
      this.context.toggle(e);
    }
  };

  _proto.getTabIndex = function getTabIndex() {
    if (this.props.disabled || this.props.header || this.props.divider) {
      return '-1';
    }

    return '0';
  };

  _proto.render = function render() {
    var tabIndex = this.getTabIndex();
    var role = tabIndex > -1 ? 'menuitem' : undefined;

    var _omit = omit(this.props, ['toggle']),
        className = _omit.className,
        cssModule = _omit.cssModule,
        divider = _omit.divider,
        Tag = _omit.tag,
        header = _omit.header,
        active = _omit.active,
        props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

    var classes = mapToCssModules(classnames(className, {
      disabled: props.disabled,
      'dropdown-item': !divider && !header,
      active: active,
      'dropdown-header': header,
      'dropdown-divider': divider
    }), cssModule);

    if (Tag === 'button') {
      if (header) {
        Tag = 'h6';
      } else if (divider) {
        Tag = 'div';
      } else if (props.href) {
        Tag = 'a';
      }
    }

    return React__default.createElement(Tag, _extends({
      type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
    }, props, {
      tabIndex: tabIndex,
      role: role,
      className: classes,
      onClick: this.onClick
    }));
  };

  return DropdownItem;
}(React__default.Component);

DropdownItem.propTypes = propTypes$i;
DropdownItem.defaultProps = defaultProps$h;
DropdownItem.contextType = DropdownContext;

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty$1(target, key, source[key]);
    });
  }

  return target;
}

var propTypes$j = {
  tag: tagPropType,
  children: PropTypes.node.isRequired,
  right: PropTypes.bool,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  persist: PropTypes.bool,
  positionFixed: PropTypes.bool
};
var defaultProps$i = {
  tag: 'div',
  flip: true
};
var noFlipModifier = {
  flip: {
    enabled: false
  }
};
var directionPositionMap = {
  up: 'top',
  left: 'left',
  right: 'right',
  down: 'bottom'
};

var DropdownMenu =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownMenu, _React$Component);

  function DropdownMenu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = DropdownMenu.prototype;

  _proto.render = function render() {
    var _this = this;

    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        right = _this$props.right,
        tag = _this$props.tag,
        flip = _this$props.flip,
        modifiers = _this$props.modifiers,
        persist = _this$props.persist,
        positionFixed = _this$props.positionFixed,
        attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed"]);

    var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
      'dropdown-menu-right': right,
      show: this.context.isOpen
    }), cssModule);
    var Tag = tag;

    if (persist || this.context.isOpen && !this.context.inNavbar) {
      var position1 = directionPositionMap[this.context.direction] || 'bottom';
      var position2 = right ? 'end' : 'start';
      var poperPlacement = position1 + "-" + position2;
      var poperModifiers = !flip ? _objectSpread({}, modifiers, {}, noFlipModifier) : modifiers;
      var popperPositionFixed = !!positionFixed;
      return React__default.createElement(Popper$1, {
        placement: poperPlacement,
        modifiers: poperModifiers,
        positionFixed: popperPositionFixed
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement;
        return React__default.createElement(Tag, _extends({
          tabIndex: "-1",
          role: "menu",
          ref: ref,
          style: style
        }, attrs, {
          "aria-hidden": !_this.context.isOpen,
          className: classes,
          "x-placement": placement
        }));
      });
    }

    return React__default.createElement(Tag, _extends({
      tabIndex: "-1",
      role: "menu"
    }, attrs, {
      "aria-hidden": !this.context.isOpen,
      className: classes,
      "x-placement": attrs.placement
    }));
  };

  return DropdownMenu;
}(React__default.Component);
DropdownMenu.propTypes = propTypes$j;
DropdownMenu.defaultProps = defaultProps$i;
DropdownMenu.contextType = DropdownContext;

var propTypes$k = {
  caret: PropTypes.bool,
  color: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  'aria-haspopup': PropTypes.bool,
  split: PropTypes.bool,
  tag: tagPropType,
  nav: PropTypes.bool
};
var defaultProps$j = {
  'aria-haspopup': true,
  color: 'secondary'
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(DropdownToggle, _React$Component);

  function DropdownToggle(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = DropdownToggle.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled || this.context.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.nav && !this.props.tag) {
      e.preventDefault();
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }

    this.context.toggle(e);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        className = _this$props.className,
        color = _this$props.color,
        cssModule = _this$props.cssModule,
        caret = _this$props.caret,
        split = _this$props.split,
        nav = _this$props.nav,
        tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag", "innerRef"]);

    var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
    var classes = mapToCssModules(classnames(className, {
      'dropdown-toggle': caret || split,
      'dropdown-toggle-split': split,
      'nav-link': nav
    }), cssModule);
    var children = props.children || React__default.createElement("span", {
      className: "sr-only"
    }, ariaLabel);
    var Tag;

    if (nav && !tag) {
      Tag = 'a';
      props.href = '#';
    } else if (!tag) {
      Tag = Button;
      props.color = color;
      props.cssModule = cssModule;
    } else {
      Tag = tag;
    }

    if (this.context.inNavbar) {
      return React__default.createElement(Tag, _extends({}, props, {
        className: classes,
        onClick: this.onClick,
        "aria-expanded": this.context.isOpen,
        children: children
      }));
    }

    return React__default.createElement(Reference, {
      innerRef: innerRef
    }, function (_ref) {
      var _ref2;

      var ref = _ref.ref;
      return React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
        className: classes,
        onClick: _this2.onClick,
        "aria-expanded": _this2.context.isOpen,
        children: children
      }));
    });
  };

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = propTypes$k;
DropdownToggle.defaultProps = defaultProps$j;
DropdownToggle.contextType = DropdownContext;

var interopRequireDefault = createCommonjsModule(function (module) {
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
});

unwrapExports(interopRequireDefault);

var hasClass_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];
});

unwrapExports(hasClass_1);

var addClass_1 = createCommonjsModule(function (module, exports) {



exports.__esModule = true;
exports.default = addClass;

var _hasClass = interopRequireDefault(hasClass_1);

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];
});

unwrapExports(addClass_1);

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

var removeClass = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill$1(Component$$1) {
  var prototype = Component$$1.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component$$1.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component$$1;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component$$1.displayName || Component$$1.name;
    var newApiName =
      typeof Component$$1.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component$$1.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component$$1;
}

var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
  polyfill: polyfill$1
});

var PropTypes$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : null;
exports.timeoutsShape = timeoutsShape;
var classNamesShape = process.env.NODE_ENV !== 'production' ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : null;
exports.classNamesShape = classNamesShape;
});

unwrapExports(PropTypes$1);
var PropTypes_1 = PropTypes$1.classNamesShape;
var PropTypes_2 = PropTypes$1.timeoutsShape;

var Transition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes$$1 = _interopRequireWildcard(PropTypes);

var _react = _interopRequireDefault(React__default);

var _reactDom = _interopRequireDefault(ReactDOM);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes$$1.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes$$1.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes$$1.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes$$1.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes$$1.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes$$1.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes$$1.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = PropTypes$1.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes$$1.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes$$1.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes$$1.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes$$1.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes$$1.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes$$1.func // Name the function so it is clearer in the documentation

} : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

exports.default = _default;
});

unwrapExports(Transition_1);
var Transition_2 = Transition_1.EXITING;
var Transition_3 = Transition_1.ENTERED;
var Transition_4 = Transition_1.ENTERING;
var Transition_5 = Transition_1.EXITED;
var Transition_6 = Transition_1.UNMOUNTED;

var CSSTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var PropTypes$$1 = _interopRequireWildcard(PropTypes);

var _addClass = _interopRequireDefault(addClass_1);

var _removeClass = _interopRequireDefault(removeClass);

var _react = _interopRequireDefault(React__default);

var _Transition = _interopRequireDefault(Transition_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass$$1 = function removeClass$$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass$$1(node, className);
    activeClassName && removeClass$$1(node, activeClassName);
    doneClassName && removeClass$$1(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: PropTypes$1.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes$$1.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes$$1.func
}) : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(CSSTransition_1);

var ChildMapping = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;



/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) React__default.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, React__default.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, React__default.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, React__default.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, React__default.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
});

unwrapExports(ChildMapping);
var ChildMapping_1 = ChildMapping.getChildMapping;
var ChildMapping_2 = ChildMapping.mergeChildMappings;
var ChildMapping_3 = ChildMapping.getInitialChildMapping;
var ChildMapping_4 = ChildMapping.getNextChildMapping;

var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

var _react = _interopRequireDefault(React__default);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component$$1 = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component$$1 === null) {
      return children;
    }

    return _react.default.createElement(Component$$1, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(TransitionGroup_1);

var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(PropTypes);

var _react = _interopRequireDefault(React__default);



var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, ReactDOM.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes = process.env.NODE_ENV !== "production" ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];
});

unwrapExports(ReplaceTransition_1);

var reactTransitionGroup = createCommonjsModule(function (module) {

var _CSSTransition = _interopRequireDefault(CSSTransition_1);

var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

var _Transition = _interopRequireDefault(Transition_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};
});

unwrapExports(reactTransitionGroup);
var reactTransitionGroup_1 = reactTransitionGroup.Transition;
var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

var propTypes$l = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  baseClass: PropTypes.string,
  baseClassActive: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
});

var defaultProps$k = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  tag: 'div',
  baseClass: 'fade',
  baseClassActive: 'show',
  timeout: TransitionTimeouts.Fade,
  appear: true,
  enter: true,
  exit: true,
  in: true
});

function Fade(props) {
  var Tag = props.tag,
      baseClass = props.baseClass,
      baseClassActive = props.baseClassActive,
      className = props.className,
      cssModule = props.cssModule,
      children = props.children,
      innerRef = props.innerRef,
      otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
  var childProps = omit(otherProps, TransitionPropTypeKeys);
  return React__default.createElement(reactTransitionGroup_1, transitionProps, function (status) {
    var isActive = status === 'entered';
    var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
    return React__default.createElement(Tag, _extends({
      className: classes
    }, childProps, {
      ref: innerRef
    }), children);
  });
}

Fade.propTypes = propTypes$l;
Fade.defaultProps = defaultProps$k;

var propTypes$m = {
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$n = {
  tag: tagPropType,
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  outline: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

var propTypes$o = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$p = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$q = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$r = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

var propTypes$s = {
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$t = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$u = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$v = {
  tag: tagPropType,
  top: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$w = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var CarouselItem =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CarouselItem, _React$Component);

  function CarouselItem(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      startAnimation: false
    };
    _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
    _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
    _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CarouselItem.prototype;

  _proto.onEnter = function onEnter(node, isAppearing) {
    this.setState({
      startAnimation: false
    });
    this.props.onEnter(node, isAppearing);
  };

  _proto.onEntering = function onEntering(node, isAppearing) {
    // getting this variable triggers a reflow
    var offsetHeight = node.offsetHeight;
    this.setState({
      startAnimation: true
    });
    this.props.onEntering(node, isAppearing);
    return offsetHeight;
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      startAnimation: false
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    this.setState({
      startAnimation: true
    });
    node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        isIn = _this$props.in,
        children = _this$props.children,
        cssModule = _this$props.cssModule,
        slide = _this$props.slide,
        Tag = _this$props.tag,
        className = _this$props.className,
        transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
      enter: slide,
      exit: slide,
      in: isIn,
      onEnter: this.onEnter,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var direction = _this2.context.direction;
      var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
      var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
      var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
      var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
      return React__default.createElement(Tag, {
        className: itemClasses
      }, children);
    });
  };

  return CarouselItem;
}(React__default.Component);

CarouselItem.propTypes = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  tag: tagPropType,
  in: PropTypes.bool,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  slide: PropTypes.bool,
  className: PropTypes.string
});
CarouselItem.defaultProps = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  tag: 'div',
  timeout: TransitionTimeouts.Carousel,
  slide: true
});
CarouselItem.contextTypes = {
  direction: PropTypes.string
};

var SWIPE_THRESHOLD = 40;

var Carousel =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Carousel, _React$Component);

  function Carousel(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
    _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
    _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
    _this.handleTouchStart = _this.handleTouchStart.bind(_assertThisInitialized(_this));
    _this.handleTouchEnd = _this.handleTouchEnd.bind(_assertThisInitialized(_this));
    _this.touchStartX = 0;
    _this.touchStartY = 0;
    _this.state = {
      activeIndex: _this.props.activeIndex,
      direction: 'right',
      indicatorClicked: false
    };
    return _this;
  }

  var _proto = Carousel.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      direction: this.state.direction
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    // Set up the cycle
    if (this.props.ride === 'carousel') {
      this.setInterval();
    } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


    document.addEventListener('keyup', this.handleKeyPress);
  };

  Carousel.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    var newState = null;
    var activeIndex = prevState.activeIndex,
        direction = prevState.direction,
        indicatorClicked = prevState.indicatorClicked;

    if (nextProps.activeIndex !== activeIndex) {
      // Calculate the direction to turn
      if (nextProps.activeIndex === activeIndex + 1) {
        direction = 'right';
      } else if (nextProps.activeIndex === activeIndex - 1) {
        direction = 'left';
      } else if (nextProps.activeIndex < activeIndex) {
        direction = indicatorClicked ? 'left' : 'right';
      } else if (nextProps.activeIndex !== activeIndex) {
        direction = indicatorClicked ? 'right' : 'left';
      }

      newState = {
        activeIndex: nextProps.activeIndex,
        direction: direction,
        indicatorClicked: false
      };
    }

    return newState;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (prevState.activeIndex === this.state.activeIndex) return;
    this.setInterval(this.props);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearInterval();
    document.removeEventListener('keyup', this.handleKeyPress);
  };

  _proto.setInterval = function (_setInterval) {
    function setInterval() {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (props) {
    if (props === void 0) {
      props = this.props;
    }

    // make sure not to have multiple intervals going...
    this.clearInterval();

    if (props.interval) {
      this.cycleInterval = setInterval(function () {
        props.next();
      }, parseInt(props.interval, 10));
    }
  });

  _proto.clearInterval = function (_clearInterval) {
    function clearInterval() {
      return _clearInterval.apply(this, arguments);
    }

    clearInterval.toString = function () {
      return _clearInterval.toString();
    };

    return clearInterval;
  }(function () {
    clearInterval(this.cycleInterval);
  });

  _proto.hoverStart = function hoverStart() {
    if (this.props.pause === 'hover') {
      this.clearInterval();
    }

    if (this.props.mouseEnter) {
      var _this$props;

      (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
    }
  };

  _proto.hoverEnd = function hoverEnd() {
    if (this.props.pause === 'hover') {
      this.setInterval();
    }

    if (this.props.mouseLeave) {
      var _this$props2;

      (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
    }
  };

  _proto.handleKeyPress = function handleKeyPress(evt) {
    if (this.props.keyboard) {
      if (evt.keyCode === 37) {
        this.props.previous();
      } else if (evt.keyCode === 39) {
        this.props.next();
      }
    }
  };

  _proto.handleTouchStart = function handleTouchStart(e) {
    if (!this.props.enableTouch) {
      return;
    }

    this.touchStartX = e.changedTouches[0].screenX;
    this.touchStartY = e.changedTouches[0].screenY;
  };

  _proto.handleTouchEnd = function handleTouchEnd(e) {
    if (!this.props.enableTouch) {
      return;
    }

    var currentX = e.changedTouches[0].screenX;
    var currentY = e.changedTouches[0].screenY;
    var diffX = Math.abs(this.touchStartX - currentX);
    var diffY = Math.abs(this.touchStartY - currentY); // Don't swipe if Y-movement is bigger than X-movement

    if (diffX < diffY) {
      return;
    }

    if (diffX < SWIPE_THRESHOLD) {
      return;
    }

    if (currentX < this.touchStartX) {
      this.props.next();
    } else {
      this.props.previous();
    }
  };

  _proto.renderItems = function renderItems(carouselItems, className) {
    var _this2 = this;

    var slide = this.props.slide;
    return React__default.createElement("div", {
      className: className
    }, carouselItems.map(function (item, index) {
      var isIn = index === _this2.state.activeIndex;
      return React__default.cloneElement(item, {
        in: isIn,
        slide: slide
      });
    }));
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props3 = this.props,
        cssModule = _this$props3.cssModule,
        slide = _this$props3.slide,
        className = _this$props3.className;
    var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
    var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

    var children = this.props.children.filter(function (child) {
      return child !== null && child !== undefined && typeof child !== 'boolean';
    });
    var slidesOnly = children.every(function (child) {
      return child.type === CarouselItem;
    }); // Rendering only slides

    if (slidesOnly) {
      return React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(children, innerClasses));
    } // Rendering slides and controls


    if (children[0] instanceof Array) {
      var _carouselItems = children[0];
      var _controlLeft = children[1];
      var _controlRight = children[2];
      return React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
    } // Rendering indicators, slides and controls


    var indicators = children[0];

    var wrappedOnClick = function wrappedOnClick(e) {
      if (typeof indicators.props.onClickHandler === 'function') {
        _this3.setState({
          indicatorClicked: true
        }, function () {
          return indicators.props.onClickHandler(e);
        });
      }
    };

    var wrappedIndicators = React__default.cloneElement(indicators, {
      onClickHandler: wrappedOnClick
    });
    var carouselItems = children[1];
    var controlLeft = children[2];
    var controlRight = children[3];
    return React__default.createElement("div", {
      className: outerClasses,
      onMouseEnter: this.hoverStart,
      onMouseLeave: this.hoverEnd,
      onTouchStart: this.handleTouchStart,
      onTouchEnd: this.handleTouchEnd
    }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
  };

  return Carousel;
}(React__default.Component);

Carousel.propTypes = {
  // the current active slide of the carousel
  activeIndex: PropTypes.number,
  // a function which should advance the carousel to the next slide (via activeIndex)
  next: PropTypes.func.isRequired,
  // a function which should advance the carousel to the previous slide (via activeIndex)
  previous: PropTypes.func.isRequired,
  // controls if the left and right arrow keys should control the carousel
  keyboard: PropTypes.bool,

  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
   */
  pause: PropTypes.oneOf(['hover', false]),
  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
  ride: PropTypes.oneOf(['carousel']),
  // the interval at which the carousel automatically cycles (default: 5000)
  // eslint-disable-next-line react/no-unused-prop-types
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
  children: PropTypes.array,
  // called when the mouse enters the Carousel
  mouseEnter: PropTypes.func,
  // called when the mouse exits the Carousel
  mouseLeave: PropTypes.func,
  // controls whether the slide animation on the Carousel works or not
  slide: PropTypes.bool,
  cssModule: PropTypes.object,
  className: PropTypes.string,
  enableTouch: PropTypes.bool
};
Carousel.defaultProps = {
  interval: 5000,
  pause: 'hover',
  keyboard: true,
  slide: true,
  enableTouch: true
};
Carousel.childContextTypes = {
  direction: PropTypes.string
};

var CarouselControl = function CarouselControl(props) {
  var direction = props.direction,
      onClickHandler = props.onClickHandler,
      cssModule = props.cssModule,
      directionText = props.directionText,
      className = props.className;
  var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
  var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
  var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
  return React__default.createElement("a", {
    className: anchorClasses,
    style: {
      cursor: "pointer"
    },
    role: "button",
    tabIndex: "0",
    onClick: function onClick(e) {
      e.preventDefault();
      onClickHandler();
    }
  }, React__default.createElement("span", {
    className: iconClasses,
    "aria-hidden": "true"
  }), React__default.createElement("span", {
    className: screenReaderClasses
  }, directionText || direction));
};

CarouselControl.propTypes = {
  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
  onClickHandler: PropTypes.func.isRequired,
  cssModule: PropTypes.object,
  directionText: PropTypes.string,
  className: PropTypes.string
};

var CarouselIndicators = function CarouselIndicators(props) {
  var items = props.items,
      activeIndex = props.activeIndex,
      cssModule = props.cssModule,
      onClickHandler = props.onClickHandler,
      className = props.className;
  var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
  var indicators = items.map(function (item, idx) {
    var indicatorClasses = mapToCssModules(classnames({
      active: activeIndex === idx
    }), cssModule);
    return React__default.createElement("li", {
      key: "" + (item.key || Object.values(item).join('')),
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler(idx);
      },
      className: indicatorClasses
    });
  });
  return React__default.createElement("ol", {
    className: listClasses
  }, indicators);
};

CarouselIndicators.propTypes = {
  items: PropTypes.array.isRequired,
  activeIndex: PropTypes.number.isRequired,
  cssModule: PropTypes.object,
  onClickHandler: PropTypes.func.isRequired,
  className: PropTypes.string
};

var CarouselCaption = function CarouselCaption(props) {
  var captionHeader = props.captionHeader,
      captionText = props.captionText,
      cssModule = props.cssModule,
      className = props.className;
  var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
  return React__default.createElement("div", {
    className: classes
  }, React__default.createElement("h3", null, captionHeader), React__default.createElement("p", null, captionText));
};

CarouselCaption.propTypes = {
  captionHeader: PropTypes.node,
  captionText: PropTypes.node.isRequired,
  cssModule: PropTypes.object,
  className: PropTypes.string
};

var propTypes$x = {
  items: PropTypes.array.isRequired,
  indicators: PropTypes.bool,
  controls: PropTypes.bool,
  autoPlay: PropTypes.bool,
  defaultActiveIndex: PropTypes.number,
  activeIndex: PropTypes.number,
  next: PropTypes.func,
  previous: PropTypes.func,
  goToIndex: PropTypes.func
};

var UncontrolledCarousel =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledCarousel, _Component);

  function UncontrolledCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.animating = false;
    _this.state = {
      activeIndex: props.defaultActiveIndex || 0
    };
    _this.next = _this.next.bind(_assertThisInitialized(_this));
    _this.previous = _this.previous.bind(_assertThisInitialized(_this));
    _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
    _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
    _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledCarousel.prototype;

  _proto.onExiting = function onExiting() {
    this.animating = true;
  };

  _proto.onExited = function onExited() {
    this.animating = false;
  };

  _proto.next = function next() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.previous = function previous() {
    if (this.animating) return;
    var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
    this.setState({
      activeIndex: nextIndex
    });
  };

  _proto.goToIndex = function goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({
      activeIndex: newIndex
    });
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        defaultActiveIndex = _this$props.defaultActiveIndex,
        autoPlay = _this$props.autoPlay,
        indicators = _this$props.indicators,
        controls = _this$props.controls,
        items = _this$props.items,
        goToIndex = _this$props.goToIndex,
        props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

    var activeIndex = this.state.activeIndex;
    var slides = items.map(function (item) {
      var key = item.key || item.src;
      return React__default.createElement(CarouselItem, {
        onExiting: _this2.onExiting,
        onExited: _this2.onExited,
        key: key
      }, React__default.createElement("img", {
        className: "d-block w-100",
        src: item.src,
        alt: item.altText
      }), React__default.createElement(CarouselCaption, {
        captionText: item.caption,
        captionHeader: item.header || item.caption
      }));
    });
    return React__default.createElement(Carousel, _extends({
      activeIndex: activeIndex,
      next: this.next,
      previous: this.previous,
      ride: autoPlay ? 'carousel' : undefined
    }, props), indicators && React__default.createElement(CarouselIndicators, {
      items: items,
      activeIndex: props.activeIndex || activeIndex,
      onClickHandler: goToIndex || this.goToIndex
    }), slides, controls && React__default.createElement(CarouselControl, {
      direction: "prev",
      directionText: "Previous",
      onClickHandler: props.previous || this.previous
    }), controls && React__default.createElement(CarouselControl, {
      direction: "next",
      directionText: "Next",
      onClickHandler: props.next || this.next
    }));
  };

  return UncontrolledCarousel;
}(Component);

UncontrolledCarousel.propTypes = propTypes$x;
UncontrolledCarousel.defaultProps = {
  controls: true,
  indicators: true,
  autoPlay: true
};

var propTypes$y = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$z = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$A = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$B = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.node,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  htmlFor: PropTypes.string,
  cssModule: PropTypes.object,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

var CustomFileInput =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CustomFileInput, _React$Component);

  function CustomFileInput(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      files: null
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = CustomFileInput.prototype;

  _proto.onChange = function onChange(e) {
    var input = e.target;
    var onChange = this.props.onChange;
    var files = this.getSelectedFiles(input);

    if (typeof onChange === 'function') {
      onChange.apply(void 0, arguments);
    }

    this.setState({
      files: files
    });
  };

  _proto.getSelectedFiles = function getSelectedFiles(input) {
    var multiple = this.props.multiple;

    if (multiple && input.files) {
      var files = [].slice.call(input.files);
      return files.map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf('fakepath') !== -1) {
      var parts = input.value.split('\\');
      return parts[parts.length - 1];
    }

    return input.value;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        label = _this$props.label,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        bsSize = _this$props.bsSize,
        innerRef = _this$props.innerRef,
        htmlFor = _this$props.htmlFor,
        type = _this$props.type,
        onChange = _this$props.onChange,
        dataBrowse = _this$props.dataBrowse,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "label", "valid", "invalid", "cssModule", "children", "bsSize", "innerRef", "htmlFor", "type", "onChange", "dataBrowse"]);

    var customClass = mapToCssModules(classnames(className, "custom-file"), cssModule);
    var validationClassNames = mapToCssModules(classnames(invalid && 'is-invalid', valid && 'is-valid'), cssModule);
    var labelHtmlFor = htmlFor || attributes.id;
    var files = this.state.files;
    return React__default.createElement("div", {
      className: customClass
    }, React__default.createElement("input", _extends({
      type: "file"
    }, attributes, {
      ref: innerRef,
      className: classnames(validationClassNames, mapToCssModules('custom-file-input', cssModule)),
      onChange: this.onChange
    })), React__default.createElement("label", {
      className: mapToCssModules('custom-file-label', cssModule),
      htmlFor: labelHtmlFor,
      "data-browse": dataBrowse
    }, files || label || 'Choose file'), children);
  };

  return CustomFileInput;
}(React__default.Component);

CustomFileInput.propTypes = propTypes$B;

var propTypes$C = {
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.node,
  inline: PropTypes.bool,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  bsSize: PropTypes.string,
  htmlFor: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array, PropTypes.func]),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

function noop() {}

var propTypes$D = {
  children: PropTypes.node.isRequired,
  popperClassName: PropTypes.string,
  placement: PropTypes.string,
  placementPrefix: PropTypes.string,
  arrowClassName: PropTypes.string,
  hideArrow: PropTypes.bool,
  tag: tagPropType,
  isOpen: PropTypes.bool.isRequired,
  cssModule: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  flip: PropTypes.bool,
  container: targetPropType,
  target: targetPropType.isRequired,
  modifiers: PropTypes.object,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  onClosed: PropTypes.func,
  fade: PropTypes.bool,
  transition: PropTypes.shape(Fade.propTypes)
};
var defaultProps$z = {
  boundariesElement: 'scrollParent',
  placement: 'auto',
  hideArrow: false,
  isOpen: false,
  offset: 0,
  fallbackPlacement: 'flip',
  flip: true,
  container: 'body',
  modifiers: {},
  onClosed: noop,
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps)
};

var PopperContent =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(PopperContent, _React$Component);

  function PopperContent(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
    _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    return _this;
  }

  PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  var _proto = PopperContent.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
      this._element.childNodes[0].focus();
    }
  };

  _proto.setTargetNode = function setTargetNode(node) {
    this.targetNode = typeof node === 'string' ? getTarget(node) : node;
  };

  _proto.getTargetNode = function getTargetNode() {
    return this.targetNode;
  };

  _proto.getContainerNode = function getContainerNode() {
    return getTarget(this.props.container);
  };

  _proto.getRef = function getRef(ref) {
    this._element = ref;
  };

  _proto.onClosed = function onClosed() {
    this.props.onClosed();
    this.setState({
      isOpen: false
    });
  };

  _proto.renderChildren = function renderChildren() {
    var _this$props = this.props,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        isOpen = _this$props.isOpen,
        flip = _this$props.flip,
        target = _this$props.target,
        offset = _this$props.offset,
        fallbackPlacement = _this$props.fallbackPlacement,
        placementPrefix = _this$props.placementPrefix,
        _arrowClassName = _this$props.arrowClassName,
        hideArrow = _this$props.hideArrow,
        _popperClassName = _this$props.popperClassName,
        tag = _this$props.tag,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        boundariesElement = _this$props.boundariesElement,
        onClosed = _this$props.onClosed,
        fade = _this$props.fade,
        transition = _this$props.transition,
        placement = _this$props.placement,
        attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition", "placement"]);

    var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
    var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);

    var extendedModifiers = _objectSpread({
      offset: {
        offset: offset
      },
      flip: {
        enabled: flip,
        behavior: fallbackPlacement
      },
      preventOverflow: {
        boundariesElement: boundariesElement
      }
    }, modifiers);

    var popperTransition = _objectSpread({}, Fade.defaultProps, {}, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
      in: isOpen,
      onExited: this.onClosed,
      tag: tag
    }), React__default.createElement(Popper$1, {
      referenceElement: this.targetNode,
      modifiers: extendedModifiers,
      placement: placement
    }, function (_ref) {
      var ref = _ref.ref,
          style = _ref.style,
          placement = _ref.placement,
          arrowProps = _ref.arrowProps;
      return React__default.createElement("div", {
        ref: ref,
        style: style,
        className: popperClassName,
        "x-placement": placement
      }, children, !hideArrow && React__default.createElement("span", {
        ref: arrowProps.ref,
        className: arrowClassName,
        style: arrowProps.style
      }));
    }));
  };

  _proto.render = function render() {
    this.setTargetNode(this.props.target);

    if (this.state.isOpen) {
      return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React__default.createElement("div", {
        ref: this.getRef
      }, this.renderChildren()), this.getContainerNode());
    }

    return null;
  };

  return PopperContent;
}(React__default.Component);

PopperContent.propTypes = propTypes$D;
PopperContent.defaultProps = defaultProps$z;

var PopperTargetHelper = function PopperTargetHelper(props, context) {
  context.popperManager.setTargetNode(getTarget(props.target));
  return null;
};

PopperTargetHelper.contextTypes = {
  popperManager: PropTypes.object.isRequired
};
PopperTargetHelper.propTypes = {
  target: targetPropType.isRequired
};

var propTypes$E = {
  placement: PropTypes.oneOf(PopperPlacements),
  target: targetPropType.isRequired,
  container: targetPropType,
  isOpen: PropTypes.bool,
  disabled: PropTypes.bool,
  hideArrow: PropTypes.bool,
  boundariesElement: PropTypes.oneOfType([PropTypes.string, DOMElement]),
  className: PropTypes.string,
  innerClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  popperClassName: PropTypes.string,
  cssModule: PropTypes.object,
  toggle: PropTypes.func,
  autohide: PropTypes.bool,
  placementPrefix: PropTypes.string,
  delay: PropTypes.oneOfType([PropTypes.shape({
    show: PropTypes.number,
    hide: PropTypes.number
  }), PropTypes.number]),
  modifiers: PropTypes.object,
  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object]),
  trigger: PropTypes.string,
  fade: PropTypes.bool,
  flip: PropTypes.bool
};
var DEFAULT_DELAYS = {
  show: 0,
  hide: 50
};
var defaultProps$A = {
  isOpen: false,
  hideArrow: false,
  autohide: false,
  delay: DEFAULT_DELAYS,
  toggle: function toggle() {},
  trigger: 'click',
  fade: true
};

function isInDOMSubtree(element, subtreeRoot) {
  return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
}

function isInDOMSubtrees(element, subtreeRoots) {
  if (subtreeRoots === void 0) {
    subtreeRoots = [];
  }

  return subtreeRoots && subtreeRoots.length && subtreeRoots.find(function (subTreeRoot) {
    return isInDOMSubtree(element, subTreeRoot);
  });
}

var TooltipPopoverWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TooltipPopoverWrapper, _React$Component);

  function TooltipPopoverWrapper(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._targets = [];
    _this.currentTargetElement = null;
    _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
    _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
    _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
    _this.show = _this.show.bind(_assertThisInitialized(_this));
    _this.hide = _this.hide.bind(_assertThisInitialized(_this));
    _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.isOpen
    };
    _this._isMounted = false;
    return _this;
  }

  var _proto = TooltipPopoverWrapper.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;
    this.updateTarget();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._isMounted = false;
    this.removeTargetEvents();
    this._targets = null;
    this.clearShowTimeout();
    this.clearHideTimeout();
  };

  TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.isOpen && !state.isOpen) {
      return {
        isOpen: props.isOpen
      };
    } else return null;
  };

  _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.state.isOpen && !this.props.isOpen) {
        this.toggle();
      }
    }
  };

  _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
    if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      e.persist();
      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    }
  };

  _proto.onEscKeyDown = function onEscKeyDown(e) {
    if (e.key === 'Escape') {
      this.hide(e);
    }
  };

  _proto.getRef = function getRef(ref) {
    var innerRef = this.props.innerRef;

    if (innerRef) {
      if (typeof innerRef === 'function') {
        innerRef(ref);
      } else if (typeof innerRef === 'object') {
        innerRef.current = ref;
      }
    }

    this._popover = ref;
  };

  _proto.getDelay = function getDelay(key) {
    var delay = this.props.delay;

    if (typeof delay === 'object') {
      return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
    }

    return delay;
  };

  _proto.show = function show(e) {
    if (!this.props.isOpen) {
      this.clearShowTimeout();
      this.currentTargetElement = e ? e.currentTarget || e.target : null;

      if (e && e.composedPath && typeof e.composedPath === 'function') {
        var path = e.composedPath();
        this.currentTargetElement = path && path[0] || this.currentTargetElement;
      }

      this.toggle(e);
    }
  };

  _proto.showWithDelay = function showWithDelay(e) {
    if (this._hideTimeout) {
      this.clearHideTimeout();
    }

    this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
  };

  _proto.hide = function hide(e) {
    if (this.props.isOpen) {
      this.clearHideTimeout();
      this.currentTargetElement = null;
      this.toggle(e);
    }
  };

  _proto.hideWithDelay = function hideWithDelay(e) {
    if (this._showTimeout) {
      this.clearShowTimeout();
    }

    this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
  };

  _proto.clearShowTimeout = function clearShowTimeout() {
    clearTimeout(this._showTimeout);
    this._showTimeout = undefined;
  };

  _proto.clearHideTimeout = function clearHideTimeout() {
    clearTimeout(this._hideTimeout);
    this._hideTimeout = undefined;
  };

  _proto.handleDocumentClick = function handleDocumentClick(e) {
    var triggers = this.props.trigger.split(' ');

    if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
        this.hideWithDelay(e);
      } else if (!this.props.isOpen) {
        this.showWithDelay(e);
      }
    } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      if (!this.props.isOpen) {
        this.showWithDelay(e);
      } else {
        this.hideWithDelay(e);
      }
    }
  };

  _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.addEventListener(type, handler, isBubble);
    });
  };

  _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
    this._targets.forEach(function (target) {
      target.removeEventListener(type, handler, isBubble);
    });
  };

  _proto.addTargetEvents = function addTargetEvents() {
    if (this.props.trigger) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('manual') === -1) {
        if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
          document.addEventListener('click', this.handleDocumentClick, true);
        }

        if (this._targets && this._targets.length) {
          if (triggers.indexOf('hover') > -1) {
            this.addEventOnTargets('mouseover', this.showWithDelay, true);
            this.addEventOnTargets('mouseout', this.hideWithDelay, true);
          }

          if (triggers.indexOf('focus') > -1) {
            this.addEventOnTargets('focusin', this.show, true);
            this.addEventOnTargets('focusout', this.hide, true);
          }

          this.addEventOnTargets('keydown', this.onEscKeyDown, true);
        }
      }
    }
  };

  _proto.removeTargetEvents = function removeTargetEvents() {
    if (this._targets) {
      this.removeEventOnTargets('mouseover', this.showWithDelay, true);
      this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
      this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
      this.removeEventOnTargets('focusin', this.show, true);
      this.removeEventOnTargets('focusout', this.hide, true);
    }

    document.removeEventListener('click', this.handleDocumentClick, true);
  };

  _proto.updateTarget = function updateTarget() {
    var newTarget = getTarget(this.props.target, true);

    if (newTarget !== this._targets) {
      this.removeTargetEvents();
      this._targets = newTarget ? Array.from(newTarget) : [];
      this.currentTargetElement = this.currentTargetElement || this._targets[0];
      this.addTargetEvents();
    }
  };

  _proto.toggle = function toggle(e) {
    if (this.props.disabled || !this._isMounted) {
      return e && e.preventDefault();
    }

    return this.props.toggle(e);
  };

  _proto.render = function render() {
    if (!this.props.isOpen) {
      return null;
    }

    this.updateTarget();
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        innerClassName = _this$props.innerClassName,
        isOpen = _this$props.isOpen,
        hideArrow = _this$props.hideArrow,
        boundariesElement = _this$props.boundariesElement,
        placement = _this$props.placement,
        placementPrefix = _this$props.placementPrefix,
        arrowClassName = _this$props.arrowClassName,
        popperClassName = _this$props.popperClassName,
        container = _this$props.container,
        modifiers = _this$props.modifiers,
        offset = _this$props.offset,
        fade = _this$props.fade,
        flip = _this$props.flip;
    var attributes = omit(this.props, Object.keys(propTypes$E));
    var popperClasses = mapToCssModules(popperClassName, cssModule);
    var classes = mapToCssModules(innerClassName, cssModule);
    return React__default.createElement(PopperContent, {
      className: className,
      target: this.currentTargetElement || this._targets[0],
      isOpen: isOpen,
      hideArrow: hideArrow,
      boundariesElement: boundariesElement,
      placement: placement,
      placementPrefix: placementPrefix,
      arrowClassName: arrowClassName,
      popperClassName: popperClasses,
      container: container,
      modifiers: modifiers,
      offset: offset,
      cssModule: cssModule,
      fade: fade,
      flip: flip
    }, React__default.createElement("div", _extends({}, attributes, {
      ref: this.getRef,
      className: classes,
      role: "tooltip",
      onMouseOver: this.onMouseOverTooltipContent,
      onMouseLeave: this.onMouseLeaveTooltipContent,
      onKeyDown: this.onEscKeyDown
    })));
  };

  return TooltipPopoverWrapper;
}(React__default.Component);

TooltipPopoverWrapper.propTypes = propTypes$E;
TooltipPopoverWrapper.defaultProps = defaultProps$A;

var defaultProps$B = {
  placement: 'right',
  placementPrefix: 'bs-popover',
  trigger: 'click'
};

var Popover = function Popover(props) {
  var popperClasses = classnames('popover', 'show', props.popperClassName);
  var classes = classnames('popover-inner', props.innerClassName);
  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Popover.propTypes = propTypes$E;
Popover.defaultProps = defaultProps$B;

var omitKeys = ['defaultOpen'];

var UncontrolledPopover =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledPopover, _Component);

  function UncontrolledPopover(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledPopover.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Popover, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys)));
  };

  return UncontrolledPopover;
}(Component);
UncontrolledPopover.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, Popover.propTypes);

var propTypes$F = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$G = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$H = {
  children: PropTypes.node,
  bar: PropTypes.bool,
  multi: PropTypes.bool,
  tag: tagPropType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  animated: PropTypes.bool,
  striped: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string,
  barClassName: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$I = {
  children: PropTypes.node.isRequired,
  node: PropTypes.any
};

var Portal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Portal, _React$Component);

  function Portal() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Portal.prototype;

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.defaultNode) {
      document.body.removeChild(this.defaultNode);
    }

    this.defaultNode = null;
  };

  _proto.render = function render() {
    if (!canUseDOM) {
      return null;
    }

    if (!this.props.node && !this.defaultNode) {
      this.defaultNode = document.createElement('div');
      document.body.appendChild(this.defaultNode);
    }

    return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
  };

  return Portal;
}(React__default.Component);

Portal.propTypes = propTypes$I;

function noop$1() {}

var FadePropTypes = PropTypes.shape(Fade.propTypes);
var propTypes$J = {
  isOpen: PropTypes.bool,
  autoFocus: PropTypes.bool,
  centered: PropTypes.bool,
  scrollable: PropTypes.bool,
  size: PropTypes.string,
  toggle: PropTypes.func,
  keyboard: PropTypes.bool,
  role: PropTypes.string,
  labelledBy: PropTypes.string,
  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
  onEnter: PropTypes.func,
  onExit: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
  wrapClassName: PropTypes.string,
  modalClassName: PropTypes.string,
  backdropClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  external: PropTypes.node,
  fade: PropTypes.bool,
  cssModule: PropTypes.object,
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  backdropTransition: FadePropTypes,
  modalTransition: FadePropTypes,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func]),
  unmountOnClose: PropTypes.bool,
  returnFocusAfterClose: PropTypes.bool
};
var propsToOmit = Object.keys(propTypes$J);
var defaultProps$F = {
  isOpen: false,
  autoFocus: true,
  centered: false,
  scrollable: false,
  role: 'dialog',
  backdrop: true,
  keyboard: true,
  zIndex: 1050,
  fade: true,
  onOpened: noop$1,
  onClosed: noop$1,
  modalTransition: {
    timeout: TransitionTimeouts.Modal
  },
  backdropTransition: {
    mountOnEnter: true,
    timeout: TransitionTimeouts.Fade // uses standard fade transition

  },
  unmountOnClose: true,
  returnFocusAfterClose: true
};

var Modal =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Modal, _React$Component);

  function Modal(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._element = null;
    _this._originalBodyPadding = null;
    _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
    _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
    _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
    _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
    _this.handleStaticBackdropAnimation = _this.handleStaticBackdropAnimation.bind(_assertThisInitialized(_this));
    _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
    _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
    _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
    _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
    _this.clearBackdropAnimationTimeout = _this.clearBackdropAnimationTimeout.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: false,
      showStaticBackdropAnimation: false
    };
    return _this;
  }

  var _proto = Modal.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        isOpen = _this$props.isOpen,
        autoFocus = _this$props.autoFocus,
        onEnter = _this$props.onEnter;

    if (isOpen) {
      this.init();
      this.setState({
        isOpen: true
      });

      if (autoFocus) {
        this.setFocus();
      }
    }

    if (onEnter) {
      onEnter();
    }

    this._isMounted = true;
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props.isOpen && !prevProps.isOpen) {
      this.init();
      this.setState({
        isOpen: true
      }); // let render() renders Modal Dialog first

      return;
    } // now Modal Dialog is rendered and we can refer this._element and this._dialog


    if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
      this.setFocus();
    }

    if (this._element && prevProps.zIndex !== this.props.zIndex) {
      this._element.style.zIndex = this.props.zIndex;
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.clearBackdropAnimationTimeout();

    if (this.props.onExit) {
      this.props.onExit();
    }

    if (this._element) {
      this.destroy();

      if (this.props.isOpen) {
        this.close();
      }
    }

    this._isMounted = false;
  };

  _proto.onOpened = function onOpened(node, isAppearing) {
    this.props.onOpened();
    (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
  };

  _proto.onClosed = function onClosed(node) {
    var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

    this.props.onClosed();
    (this.props.modalTransition.onExited || noop$1)(node);

    if (unmountOnClose) {
      this.destroy();
    }

    this.close();

    if (this._isMounted) {
      this.setState({
        isOpen: false
      });
    }
  };

  _proto.setFocus = function setFocus() {
    if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
      this._dialog.parentNode.focus();
    }
  };

  _proto.getFocusableChildren = function getFocusableChildren() {
    return this._element.querySelectorAll(focusableElements.join(', '));
  };

  _proto.getFocusedChild = function getFocusedChild() {
    var currentFocus;
    var focusableChildren = this.getFocusableChildren();

    try {
      currentFocus = document.activeElement;
    } catch (err) {
      currentFocus = focusableChildren[0];
    }

    return currentFocus;
  } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
  ;

  _proto.handleBackdropClick = function handleBackdropClick(e) {
    if (e.target === this._mouseDownElement) {
      e.stopPropagation();
      var backdrop = this._dialog ? this._dialog.parentNode : null;

      if (backdrop && e.target === backdrop && this.props.backdrop === 'static') {
        this.handleStaticBackdropAnimation();
      }

      if (!this.props.isOpen || this.props.backdrop !== true) return;

      if (backdrop && e.target === backdrop && this.props.toggle) {
        this.props.toggle(e);
      }
    }
  };

  _proto.handleTab = function handleTab(e) {
    if (e.which !== 9) return;
    var focusableChildren = this.getFocusableChildren();
    var totalFocusable = focusableChildren.length;
    if (totalFocusable === 0) return;
    var currentFocus = this.getFocusedChild();
    var focusedIndex = 0;

    for (var i = 0; i < totalFocusable; i += 1) {
      if (focusableChildren[i] === currentFocus) {
        focusedIndex = i;
        break;
      }
    }

    if (e.shiftKey && focusedIndex === 0) {
      e.preventDefault();
      focusableChildren[totalFocusable - 1].focus();
    } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
      e.preventDefault();
      focusableChildren[0].focus();
    }
  };

  _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
    this._mouseDownElement = e.target;
  };

  _proto.handleEscape = function handleEscape(e) {
    if (this.props.isOpen && e.keyCode === keyCodes.esc && this.props.toggle) {
      if (this.props.keyboard) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      } else if (this.props.backdrop === 'static') {
        e.preventDefault();
        e.stopPropagation();
        this.handleStaticBackdropAnimation();
      }
    }
  };

  _proto.handleStaticBackdropAnimation = function handleStaticBackdropAnimation() {
    var _this2 = this;

    this.clearBackdropAnimationTimeout();
    this.setState({
      showStaticBackdropAnimation: true
    });
    this._backdropAnimationTimeout = setTimeout(function () {
      _this2.setState({
        showStaticBackdropAnimation: false
      });
    }, 100);
  };

  _proto.init = function init() {
    try {
      this._triggeringElement = document.activeElement;
    } catch (err) {
      this._triggeringElement = null;
    }

    if (!this._element) {
      this._element = document.createElement('div');

      this._element.setAttribute('tabindex', '-1');

      this._element.style.position = 'relative';
      this._element.style.zIndex = this.props.zIndex;
      document.body.appendChild(this._element);
    }

    this._originalBodyPadding = getOriginalBodyPadding();
    conditionallyUpdateScrollbar();

    if (Modal.openCount === 0) {
      document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
    }

    Modal.openCount += 1;
  };

  _proto.destroy = function destroy() {
    if (this._element) {
      document.body.removeChild(this._element);
      this._element = null;
    }

    this.manageFocusAfterClose();
  };

  _proto.manageFocusAfterClose = function manageFocusAfterClose() {
    if (this._triggeringElement) {
      var returnFocusAfterClose = this.props.returnFocusAfterClose;
      if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
      this._triggeringElement = null;
    }
  };

  _proto.close = function close() {
    if (Modal.openCount <= 1) {
      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

      var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
    }

    this.manageFocusAfterClose();
    Modal.openCount = Math.max(0, Modal.openCount - 1);
    setScrollbarWidth(this._originalBodyPadding);
  };

  _proto.renderModalDialog = function renderModalDialog() {
    var _classNames,
        _this3 = this;

    var attributes = omit(this.props, propsToOmit);
    var dialogBaseClass = 'modal-dialog';
    return React__default.createElement("div", _extends({}, attributes, {
      className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
      role: "document",
      ref: function ref(c) {
        _this3._dialog = c;
      }
    }), React__default.createElement("div", {
      className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
    }, this.props.children));
  };

  _proto.render = function render() {
    var unmountOnClose = this.props.unmountOnClose;

    if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
      var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
      this._element.style.display = isModalHidden ? 'none' : 'block';
      var _this$props2 = this.props,
          wrapClassName = _this$props2.wrapClassName,
          modalClassName = _this$props2.modalClassName,
          backdropClassName = _this$props2.backdropClassName,
          cssModule = _this$props2.cssModule,
          isOpen = _this$props2.isOpen,
          backdrop = _this$props2.backdrop,
          role = _this$props2.role,
          labelledBy = _this$props2.labelledBy,
          external = _this$props2.external,
          innerRef = _this$props2.innerRef;
      var modalAttributes = {
        onClick: this.handleBackdropClick,
        onMouseDown: this.handleBackdropMouseDown,
        onKeyUp: this.handleEscape,
        onKeyDown: this.handleTab,
        style: {
          display: 'block'
        },
        'aria-labelledby': labelledBy,
        role: role,
        tabIndex: '-1'
      };
      var hasTransition = this.props.fade;

      var modalTransition = _objectSpread({}, Fade.defaultProps, {}, this.props.modalTransition, {
        baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
        timeout: hasTransition ? this.props.modalTransition.timeout : 0
      });

      var backdropTransition = _objectSpread({}, Fade.defaultProps, {}, this.props.backdropTransition, {
        baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
        timeout: hasTransition ? this.props.backdropTransition.timeout : 0
      });

      var Backdrop = backdrop && (hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
        in: isOpen && !!backdrop,
        cssModule: cssModule,
        className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
      })) : React__default.createElement("div", {
        className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
      }));
      return React__default.createElement(Portal, {
        node: this._element
      }, React__default.createElement("div", {
        className: mapToCssModules(wrapClassName)
      }, React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
        in: isOpen,
        onEntered: this.onOpened,
        onExited: this.onClosed,
        cssModule: cssModule,
        className: mapToCssModules(classnames('modal', modalClassName, this.state.showStaticBackdropAnimation && 'modal-static'), cssModule),
        innerRef: innerRef
      }), external, this.renderModalDialog()), Backdrop));
    }

    return null;
  };

  _proto.clearBackdropAnimationTimeout = function clearBackdropAnimationTimeout() {
    if (this._backdropAnimationTimeout) {
      clearTimeout(this._backdropAnimationTimeout);
      this._backdropAnimationTimeout = undefined;
    }
  };

  return Modal;
}(React__default.Component);

Modal.propTypes = propTypes$J;
Modal.defaultProps = defaultProps$F;
Modal.openCount = 0;

var propTypes$K = {
  tag: tagPropType,
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object
};

var propTypes$L = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$H = {
  tag: 'div'
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'modal-body'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalBody.propTypes = propTypes$L;
ModalBody.defaultProps = defaultProps$H;

var propTypes$M = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$I = {
  tag: 'div'
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'modal-footer'), cssModule);
  return React__default.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

ModalFooter.propTypes = propTypes$M;
ModalFooter.defaultProps = defaultProps$I;

var defaultProps$J = {
  placement: 'top',
  autohide: true,
  placementPrefix: 'bs-tooltip',
  trigger: 'hover focus'
};

var Tooltip = function Tooltip(props) {
  var popperClasses = classnames('tooltip', 'show', props.popperClassName);
  var classes = classnames('tooltip-inner', props.innerClassName);
  return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
    popperClassName: popperClasses,
    innerClassName: classes
  }));
};

Tooltip.propTypes = propTypes$E;
Tooltip.defaultProps = defaultProps$J;

var propTypes$N = {
  className: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  dark: PropTypes.bool,
  hover: PropTypes.bool,
  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: tagPropType,
  responsiveTag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
};
var defaultProps$K = {
  tag: 'table',
  responsiveTag: 'div'
};

var Table = function Table(props) {
  var className = props.className,
      cssModule = props.cssModule,
      size = props.size,
      bordered = props.bordered,
      borderless = props.borderless,
      striped = props.striped,
      dark = props.dark,
      hover = props.hover,
      responsive = props.responsive,
      Tag = props.tag,
      ResponsiveTag = props.responsiveTag,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

  var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
  var table = React__default.createElement(Tag, _extends({}, attributes, {
    ref: innerRef,
    className: classes
  }));

  if (responsive) {
    var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
    return React__default.createElement(ResponsiveTag, {
      className: responsiveClassName
    }, table);
  }

  return table;
};

Table.propTypes = propTypes$N;
Table.defaultProps = defaultProps$K;

var propTypes$O = {
  tag: tagPropType,
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  horizontal: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

var propTypes$P = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$M = {
  tag: 'form'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(Component);

Form.propTypes = propTypes$P;
Form.defaultProps = defaultProps$M;

var propTypes$Q = {
  children: PropTypes.node,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  valid: PropTypes.bool,
  tooltip: PropTypes.bool
};

var propTypes$R = {
  children: PropTypes.node,
  row: PropTypes.bool,
  check: PropTypes.bool,
  inline: PropTypes.bool,
  disabled: PropTypes.bool,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$S = {
  children: PropTypes.node,
  inline: PropTypes.bool,
  tag: tagPropType,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$T = {
  children: PropTypes.node,
  type: PropTypes.string,
  size: PropTypes.string,
  bsSize: PropTypes.string,
  valid: PropTypes.bool,
  invalid: PropTypes.bool,
  tag: tagPropType,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
  plaintext: PropTypes.bool,
  addon: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$Q = {
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Input;
}(React__default.Component);

Input.propTypes = propTypes$T;
Input.defaultProps = defaultProps$Q;

var propTypes$U = {
  tag: tagPropType,
  size: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$V = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$W = {
  tag: tagPropType,
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$X = {
  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
  children: PropTypes.node
};

var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
  size: stringOrNumberProp$1,
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$Y = {
  children: PropTypes.node,
  hidden: PropTypes.bool,
  check: PropTypes.bool,
  size: PropTypes.string,
  for: PropTypes.string,
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: PropTypes.array
};

var propTypes$Z = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  tag: tagPropType,
  top: PropTypes.bool
};

var propTypes$_ = {
  children: PropTypes.node,
  className: PropTypes.string,
  listClassName: PropTypes.string,
  cssModule: PropTypes.object,
  size: PropTypes.string,
  tag: tagPropType,
  listTag: tagPropType,
  'aria-label': PropTypes.string
};

var propTypes$10 = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  disabled: PropTypes.bool,
  tag: tagPropType
};

var propTypes$11 = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
  tag: tagPropType
};

/**
 * TabContext
 * {
 *  activeTabId: PropTypes.any
 * }
 */

var TabContext = React__default.createContext({});

var propTypes$12 = {
  tag: tagPropType,
  activeTab: PropTypes.any,
  className: PropTypes.string,
  cssModule: PropTypes.object
};
var defaultProps$Y = {
  tag: 'div'
};

var TabContent =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(TabContent, _Component);

  TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.activeTab !== nextProps.activeTab) {
      return {
        activeTab: nextProps.activeTab
      };
    }

    return null;
  };

  function TabContent(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      activeTab: _this.props.activeTab
    };
    return _this;
  }

  var _proto = TabContent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        Tag = _this$props.tag;
    var attributes = omit(this.props, Object.keys(propTypes$12));
    var classes = mapToCssModules(classnames('tab-content', className), cssModule);
    return React__default.createElement(TabContext.Provider, {
      value: {
        activeTabId: this.state.activeTab
      }
    }, React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    })));
  };

  return TabContent;
}(Component);

polyfill$1(TabContent);
TabContent.propTypes = propTypes$12;
TabContent.defaultProps = defaultProps$Y;

var propTypes$13 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  tabId: PropTypes.any
};

var propTypes$14 = {
  tag: tagPropType,
  fluid: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object
};

var propTypes$15 = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  cssModule: PropTypes.object,
  color: PropTypes.string,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$10 = {
  color: 'success',
  isOpen: true,
  tag: 'div',
  closeAriaLabel: 'Close',
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

function Alert(props) {
  var className = props.className,
      closeClassName = props.closeClassName,
      closeAriaLabel = props.closeAriaLabel,
      cssModule = props.cssModule,
      Tag = props.tag,
      color = props.color,
      isOpen = props.isOpen,
      toggle = props.toggle,
      children = props.children,
      transition = props.transition,
      fade = props.fade,
      innerRef = props.innerRef,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

  var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
    'alert-dismissible': toggle
  }), cssModule);
  var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

  var alertTransition = _objectSpread({}, Fade.defaultProps, {}, transition, {
    baseClass: fade ? transition.baseClass : '',
    timeout: fade ? transition.timeout : 0
  });

  return React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
    tag: Tag,
    className: classes,
    in: isOpen,
    role: "alert",
    innerRef: innerRef
  }), toggle ? React__default.createElement("button", {
    type: "button",
    className: closeClasses,
    "aria-label": closeAriaLabel,
    onClick: toggle
  }, React__default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")) : null, children);
}

Alert.propTypes = propTypes$15;
Alert.defaultProps = defaultProps$10;

var propTypes$16 = {
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  tag: tagPropType,
  transition: PropTypes.shape(Fade.propTypes),
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};
var defaultProps$11 = {
  isOpen: true,
  tag: 'div',
  fade: true,
  transition: _objectSpread({}, Fade.defaultProps, {
    unmountOnExit: true
  })
};

var propTypes$17 = {
  tag: tagPropType,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.func])
};

var propTypes$18 = {
  tag: tagPropType,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  wrapTag: tagPropType,
  toggle: PropTypes.func,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.node,
  closeAriaLabel: PropTypes.string,
  charCode: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  close: PropTypes.object
};

var _transitionStatusToCl;

var propTypes$19 = _objectSpread({}, reactTransitionGroup_1.propTypes, {
  isOpen: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  tag: tagPropType,
  className: PropTypes.node,
  navbar: PropTypes.bool,
  cssModule: PropTypes.object,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.object])
});

var defaultProps$14 = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
  isOpen: false,
  appear: false,
  enter: true,
  exit: true,
  tag: 'div',
  timeout: TransitionTimeouts.Collapse
});

var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

function getTransitionClass(status) {
  return transitionStatusToClassHash[status] || 'collapse';
}

function getHeight(node) {
  return node.scrollHeight;
}

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Collapse, _Component);

  function Collapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      height: null
    };
    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
      _this[name] = _this[name].bind(_assertThisInitialized(_this));
    });
    return _this;
  }

  var _proto = Collapse.prototype;

  _proto.onEntering = function onEntering(node, isAppearing) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onEntering(node, isAppearing);
  };

  _proto.onEntered = function onEntered(node, isAppearing) {
    this.setState({
      height: null
    });
    this.props.onEntered(node, isAppearing);
  };

  _proto.onExit = function onExit(node) {
    this.setState({
      height: getHeight(node)
    });
    this.props.onExit(node);
  };

  _proto.onExiting = function onExiting(node) {
    // getting this variable triggers a reflow
    var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

    this.setState({
      height: 0
    });
    this.props.onExiting(node);
  };

  _proto.onExited = function onExited(node) {
    this.setState({
      height: null
    });
    this.props.onExited(node);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        Tag = _this$props.tag,
        isOpen = _this$props.isOpen,
        className = _this$props.className,
        navbar = _this$props.navbar,
        cssModule = _this$props.cssModule,
        children = _this$props.children,
        innerRef = _this$props.innerRef,
        otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

    var height = this.state.height;
    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
      in: isOpen,
      onEntering: this.onEntering,
      onEntered: this.onEntered,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }), function (status) {
      var collapseClass = getTransitionClass(status);
      var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
      var style = height === null ? null : {
        height: height
      };
      return React__default.createElement(Tag, _extends({}, childProps, {
        style: _objectSpread({}, childProps.style, {}, style),
        className: classes,
        ref: _this2.props.innerRef
      }), children);
    });
  };

  return Collapse;
}(Component);

Collapse.propTypes = propTypes$19;
Collapse.defaultProps = defaultProps$14;

var propTypes$1a = {
  tag: tagPropType,
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.string,
  action: PropTypes.bool,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var propTypes$1b = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var propTypes$1c = {
  tag: tagPropType,
  className: PropTypes.any,
  cssModule: PropTypes.object
};

var UncontrolledAlert =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledAlert, _Component);

  function UncontrolledAlert(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: true
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledAlert.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Alert, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, this.props));
  };

  return UncontrolledAlert;
}(Component);

var omitKeys$1 = ['defaultOpen'];

var UncontrolledButtonDropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledButtonDropdown, _Component);

  function UncontrolledButtonDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledButtonDropdown.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(ButtonDropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$1)));
  };

  return UncontrolledButtonDropdown;
}(Component);
UncontrolledButtonDropdown.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, ButtonDropdown.propTypes);

var omitKeys$2 = ['toggleEvents', 'defaultOpen'];
var propTypes$1d = {
  defaultOpen: PropTypes.bool,
  toggler: PropTypes.string.isRequired,
  toggleEvents: PropTypes.arrayOf(PropTypes.string)
};
var defaultProps$18 = {
  toggleEvents: defaultToggleEvents
};

var UncontrolledCollapse =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledCollapse, _Component);

  function UncontrolledCollapse(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.togglers = null;
    _this.removeEventListeners = null;
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    return _this;
  }

  var _proto = UncontrolledCollapse.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.togglers = findDOMElements(this.props.toggler);

    if (this.togglers.length) {
      this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.togglers.length && this.removeEventListeners) {
      this.removeEventListeners();
    }
  };

  _proto.toggle = function toggle(e) {
    this.setState(function (_ref) {
      var isOpen = _ref.isOpen;
      return {
        isOpen: !isOpen
      };
    });
    e.preventDefault();
  };

  _proto.render = function render() {
    return React__default.createElement(Collapse, _extends({
      isOpen: this.state.isOpen
    }, omit(this.props, omitKeys$2)));
  };

  return UncontrolledCollapse;
}(Component);

UncontrolledCollapse.propTypes = propTypes$1d;
UncontrolledCollapse.defaultProps = defaultProps$18;

var omitKeys$3 = ['defaultOpen'];

var UncontrolledDropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledDropdown, _Component);

  function UncontrolledDropdown(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledDropdown.prototype;

  _proto.toggle = function toggle(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });

    if (this.props.onToggle) {
      this.props.onToggle(e, !this.state.isOpen);
    }
  };

  _proto.render = function render() {
    return React__default.createElement(Dropdown, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$3)));
  };

  return UncontrolledDropdown;
}(Component);
UncontrolledDropdown.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool,
  onToggle: PropTypes.func
}, Dropdown.propTypes);

var omitKeys$4 = ['defaultOpen'];

var UncontrolledTooltip =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(UncontrolledTooltip, _Component);

  function UncontrolledTooltip(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      isOpen: props.defaultOpen || false
    };
    _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = UncontrolledTooltip.prototype;

  _proto.toggle = function toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  _proto.render = function render() {
    return React__default.createElement(Tooltip, _extends({
      isOpen: this.state.isOpen,
      toggle: this.toggle
    }, omit(this.props, omitKeys$4)));
  };

  return UncontrolledTooltip;
}(Component);
UncontrolledTooltip.propTypes = _objectSpread({
  defaultOpen: PropTypes.bool
}, Tooltip.propTypes);

var propTypes$1e = {
  tag: tagPropType,
  type: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  children: PropTypes.string
};

var classCallCheck$1 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var callLogs = function callLogs(props) {
  console.log(props.content);
  var tableRows = props.content.data.map(function (cont) {
    return React__default.createElement(callLog, _extends$2({}, cont, { showImage: props.showImage }));
  });

  return React__default.createElement(
    Table,
    { style: { width: 1000, margin: "auto" } },
    React__default.createElement(
      "thead",
      { className: styles$1.calllogs__thead },
      React__default.createElement(
        "tr",
        null,
        React__default.createElement(
          "th",
          null,
          React__default.createElement("i", { "class": "fa fa-id-card-o", "aria-hidden": "true" }),
          " Room ID"
        ),
        React__default.createElement(
          "th",
          null,
          React__default.createElement("i", { "class": "fa fa-calendar", "aria-hidden": "true" }),
          " Start Date"
        ),
        React__default.createElement(
          "th",
          null,
          React__default.createElement("i", { "class": "fa fa-hourglass-end", "aria-hidden": "true" }),
          " Start Time"
        ),
        React__default.createElement(
          "th",
          null,
          React__default.createElement("i", { "class": "fa fa-clock-o", "aria-hidden": "true" }),
          " Duration"
        ),
        React__default.createElement(
          "th",
          null,
          React__default.createElement("i", { "class": "fa fa-phone", "aria-hidden": "true" }),
          " To"
        ),
        React__default.createElement(
          "th",
          null,
          "Files"
        )
      )
    ),
    React__default.createElement(
      "tbody",
      null,
      tableRows
    )
  );
};

var css$2 = ".Layout_Button__M6ez4 {\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 15px;\r\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\r\n  outline: none;\r\n}\r\n\r\n.Layout_Button__M6ez4:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.Layout_Button__M6ez4:active {\r\n  background-color: black;\r\n  color: #ddd;\r\n  outline: none;\r\n}\r\n";
var styles$2 = { "Button": "Layout_Button__M6ez4" };
styleInject(css$2);

var Layout = function (_React$Component) {
  inherits(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck$1(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      callData: null,
      showImage: false,
      screenshots: []
    }, _this.loadNextPage = function () {
      fetch(_this.state.callData.next_page_url, {
        headers: new Headers({
          "x-token": localStorage.getItem("token")
        })
      }).then(function (res) {
        // console.log(res.json());
        return res.json();
      }).then(function (res) {
        console.log(res);
        _this.setState({
          callData: res.data
        });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.loadPreviousPage = function () {
      fetch(_this.state.callData.prev_page_url, {
        headers: new Headers({
          "x-token": localStorage.getItem("token")
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        _this.setState({ callData: res.data });
      }).catch(function (err) {
        return console.log(err);
      });
    }, _this.toggleShowImage = function () {
      var images = [];
      if (!_this.state.showImage) {
        _this.getScreenshots("54-1584007036151").then(function (res) {
          res.data.map(function (img) {
            images.push("https://blinkin-production.s3.eu-central-1.amazonaws.com/public/images/chat_images/" + img.file_name + img.file_extension);
          });
        });
      }
      _this.setState(function (prevState) {
        return {
          showImage: !prevState.showImage,
          screenshots: images
        };
      });
    }, _this.getScreenshots = function (roomId) {
      return fetch("https://staging-framework.blinkin.io/v1/calls/get-files/" + roomId, {
        headers: new Headers({
          "x-token": localStorage.getItem("token")
        })
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        return res.data;
      });
    }, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass$1(Layout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      fetch("https://staging-framework.blinkin.io/v1/calls/get-own-call-logs", {
        headers: new Headers({
          "x-token": localStorage.getItem("token")
        })
      }).then(function (res) {
        console.log(res);
        return res.json();
      }).then(function (res) {
        console.log(res);
        _this2.setState({ callData: res.data });
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var callLogs$$1 = null;
      var prevButton = null;
      var nextButton = null;
      var multipleImages = this.state.screenshots.map(function (img) {
        return React__default.createElement(
          ModalBody,
          null,
          " ",
          React__default.createElement("img", {
            width: "400px",
            style: { display: "block", margin: "auto" },
            src: img
          }),
          React__default.createElement(
            ModalFooter,
            null,
            "Here At BlinkIn"
          )
        );
      });

      if (this.state.callData) {
        if (this.state.callData.current_page > 1) {
          prevButton = React__default.createElement(
            Button,
            {
              color: "info",
              className: styles$2.Button,
              onClick: this.loadPreviousPage
            },
            "Previous Page"
          );
        }
        if (this.state.callData.current_page !== this.state.callData.last_page) {
          nextButton = React__default.createElement(
            Button,
            { color: "info", className: "Button", onClick: this.loadNextPage },
            "Next Page"
          );
        }
        callLogs$$1 = React__default.createElement(
          "div",
          null,
          React__default.createElement(callLogs, {
            content: this.state.callData,
            showImage: this.toggleShowImage
          }),
          prevButton,
          this.state.callData.current_page,
          nextButton,
          React__default.createElement(
            Modal,
            { isOpen: this.state.showImage, toggle: this.toggleShowImage },
            multipleImages
          )
        );
      }
      return callLogs$$1;
    }
  }]);
  return Layout;
}(React__default.Component);

var css$3 = "/*!\n * Bootstrap v4.4.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */:root{--blue:#007bff;--indigo:#6610f2;--purple:#6f42c1;--pink:#e83e8c;--red:#dc3545;--orange:#fd7e14;--yellow:#ffc107;--green:#28a745;--teal:#20c997;--cyan:#17a2b8;--white:#fff;--gray:#6c757d;--gray-dark:#343a40;--primary:#007bff;--secondary:#6c757d;--success:#28a745;--info:#17a2b8;--warning:#ffc107;--danger:#dc3545;--light:#f8f9fa;--dark:#343a40;--breakpoint-xs:0;--breakpoint-sm:576px;--breakpoint-md:768px;--breakpoint-lg:992px;--breakpoint-xl:1200px;--font-family-sans-serif:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-family-monospace:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace}*,::after,::before{box-sizing:border-box}html{font-family:sans-serif;line-height:1.15;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:transparent}article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-size:1rem;font-weight:400;line-height:1.5;color:#212529;text-align:left;background-color:#fff}[tabindex=\"-1\"]:focus:not(:focus-visible){outline:0!important}hr{box-sizing:content-box;height:0;overflow:visible}h1,h2,h3,h4,h5,h6{margin-top:0;margin-bottom:.5rem}p{margin-top:0;margin-bottom:1rem}abbr[data-original-title],abbr[title]{text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;cursor:help;border-bottom:0;-webkit-text-decoration-skip-ink:none;text-decoration-skip-ink:none}address{margin-bottom:1rem;font-style:normal;line-height:inherit}dl,ol,ul{margin-top:0;margin-bottom:1rem}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}dt{font-weight:700}dd{margin-bottom:.5rem;margin-left:0}blockquote{margin:0 0 1rem}b,strong{font-weight:bolder}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}a{color:#007bff;text-decoration:none;background-color:transparent}a:hover{color:#0056b3;text-decoration:underline}a:not([href]){color:inherit;text-decoration:none}a:not([href]):hover{color:inherit;text-decoration:none}code,kbd,pre,samp{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;font-size:1em}pre{margin-top:0;margin-bottom:1rem;overflow:auto}figure{margin:0 0 1rem}img{vertical-align:middle;border-style:none}svg{overflow:hidden;vertical-align:middle}table{border-collapse:collapse}caption{padding-top:.75rem;padding-bottom:.75rem;color:#6c757d;text-align:left;caption-side:bottom}th{text-align:inherit}label{display:inline-block;margin-bottom:.5rem}button{border-radius:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}button,input,optgroup,select,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}select{word-wrap:normal}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]:not(:disabled),[type=reset]:not(:disabled),[type=submit]:not(:disabled),button:not(:disabled){cursor:pointer}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{padding:0;border-style:none}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=date],input[type=datetime-local],input[type=month],input[type=time]{-webkit-appearance:listbox}textarea{overflow:auto;resize:vertical}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;max-width:100%;padding:0;margin-bottom:.5rem;font-size:1.5rem;line-height:inherit;color:inherit;white-space:normal}progress{vertical-align:baseline}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{outline-offset:-2px;-webkit-appearance:none}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}output{display:inline-block}summary{display:list-item;cursor:pointer}template{display:none}[hidden]{display:none!important}.bootstrap-min_h1__JLbN0,.bootstrap-min_h2__1Yx4I,.bootstrap-min_h3__2tb_F,.bootstrap-min_h4__mJbUm,.bootstrap-min_h5__pPsEc,.bootstrap-min_h6__2NPYy,h1,h2,h3,h4,h5,h6{margin-bottom:.5rem;font-weight:500;line-height:1.2}.bootstrap-min_h1__JLbN0,h1{font-size:2.5rem}.bootstrap-min_h2__1Yx4I,h2{font-size:2rem}.bootstrap-min_h3__2tb_F,h3{font-size:1.75rem}.bootstrap-min_h4__mJbUm,h4{font-size:1.5rem}.bootstrap-min_h5__pPsEc,h5{font-size:1.25rem}.bootstrap-min_h6__2NPYy,h6{font-size:1rem}.bootstrap-min_lead__3zmFd{font-size:1.25rem;font-weight:300}.bootstrap-min_display-1__106EL{font-size:6rem;font-weight:300;line-height:1.2}.bootstrap-min_display-2__mHrDh{font-size:5.5rem;font-weight:300;line-height:1.2}.bootstrap-min_display-3__3uUy7{font-size:4.5rem;font-weight:300;line-height:1.2}.bootstrap-min_display-4__NrGcs{font-size:3.5rem;font-weight:300;line-height:1.2}hr{margin-top:1rem;margin-bottom:1rem;border:0;border-top:1px solid rgba(0,0,0,.1)}.bootstrap-min_small__2gJYW,small{font-size:80%;font-weight:400}.bootstrap-min_mark__1gm-C,mark{padding:.2em;background-color:#fcf8e3}.bootstrap-min_list-unstyled__3EX6R{padding-left:0;list-style:none}.bootstrap-min_list-inline__TCNFj{padding-left:0;list-style:none}.bootstrap-min_list-inline-item__3W8W2{display:inline-block}.bootstrap-min_list-inline-item__3W8W2:not(:last-child){margin-right:.5rem}.bootstrap-min_initialism__3zCIV{font-size:90%;text-transform:uppercase}.bootstrap-min_blockquote__2-erm{margin-bottom:1rem;font-size:1.25rem}.bootstrap-min_blockquote-footer__1Wn9S{display:block;font-size:80%;color:#6c757d}.bootstrap-min_blockquote-footer__1Wn9S::before{content:\"\\2014\\A0\"}.bootstrap-min_img-fluid__ZUm7A{max-width:100%;height:auto}.bootstrap-min_img-thumbnail__2LZov{padding:.25rem;background-color:#fff;border:1px solid #dee2e6;border-radius:.25rem;max-width:100%;height:auto}.bootstrap-min_figure__2GcEm{display:inline-block}.bootstrap-min_figure-img__2L-Fx{margin-bottom:.5rem;line-height:1}.bootstrap-min_figure-caption__1zehO{font-size:90%;color:#6c757d}code{font-size:87.5%;color:#e83e8c;word-wrap:break-word}a>code{color:inherit}kbd{padding:.2rem .4rem;font-size:87.5%;color:#fff;background-color:#212529;border-radius:.2rem}kbd kbd{padding:0;font-size:100%;font-weight:700}pre{display:block;font-size:87.5%;color:#212529}pre code{font-size:inherit;color:inherit;word-break:normal}.bootstrap-min_pre-scrollable__1sRNU{max-height:340px;overflow-y:scroll}.bootstrap-min_container__3i4Ca{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.bootstrap-min_container__3i4Ca{max-width:540px}}@media (min-width:768px){.bootstrap-min_container__3i4Ca{max-width:720px}}@media (min-width:992px){.bootstrap-min_container__3i4Ca{max-width:960px}}@media (min-width:1200px){.bootstrap-min_container__3i4Ca{max-width:1140px}}.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_container-md__kncAJ,.bootstrap-min_container-sm__tKUII,.bootstrap-min_container-xl__2wVN4{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.bootstrap-min_container__3i4Ca,.bootstrap-min_container-sm__tKUII{max-width:540px}}@media (min-width:768px){.bootstrap-min_container__3i4Ca,.bootstrap-min_container-md__kncAJ,.bootstrap-min_container-sm__tKUII{max-width:720px}}@media (min-width:992px){.bootstrap-min_container__3i4Ca,.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_container-md__kncAJ,.bootstrap-min_container-sm__tKUII{max-width:960px}}@media (min-width:1200px){.bootstrap-min_container__3i4Ca,.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_container-md__kncAJ,.bootstrap-min_container-sm__tKUII,.bootstrap-min_container-xl__2wVN4{max-width:1140px}}.bootstrap-min_row__2048F{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.bootstrap-min_no-gutters__2cHQS{margin-right:0;margin-left:0}.bootstrap-min_no-gutters__2cHQS>.bootstrap-min_col__RU1cZ,.bootstrap-min_no-gutters__2cHQS>[class*=col-]{padding-right:0;padding-left:0}.bootstrap-min_col__RU1cZ,.bootstrap-min_col-1__6Qqlk,.bootstrap-min_col-10__3qdzx,.bootstrap-min_col-11__humUF,.bootstrap-min_col-12__16adp,.bootstrap-min_col-2__t1tH5,.bootstrap-min_col-3__2Qh34,.bootstrap-min_col-4__1uyBp,.bootstrap-min_col-5__1Cc2H,.bootstrap-min_col-6__3mVHX,.bootstrap-min_col-7__3z3Qw,.bootstrap-min_col-8__2v9P1,.bootstrap-min_col-9__Xi24b,.bootstrap-min_col-auto__2A5d2,.bootstrap-min_col-lg__1w0iC,.bootstrap-min_col-lg-1__3uad4,.bootstrap-min_col-lg-10__1yTjU,.bootstrap-min_col-lg-11__foFwG,.bootstrap-min_col-lg-12__1Vspn,.bootstrap-min_col-lg-2__1b4lq,.bootstrap-min_col-lg-3__3KCMa,.bootstrap-min_col-lg-4__3gZYS,.bootstrap-min_col-lg-5__2ewkc,.bootstrap-min_col-lg-6__15QrV,.bootstrap-min_col-lg-7__vKsWR,.bootstrap-min_col-lg-8__AZTLn,.bootstrap-min_col-lg-9__2459q,.bootstrap-min_col-lg-auto__11W6e,.bootstrap-min_col-md__AwNqC,.bootstrap-min_col-md-1__3I_2A,.bootstrap-min_col-md-10__1j5LU,.bootstrap-min_col-md-11__1RZFk,.bootstrap-min_col-md-12__2ymaN,.bootstrap-min_col-md-2__p0Q41,.bootstrap-min_col-md-3__1gEUG,.bootstrap-min_col-md-4__A8ARb,.bootstrap-min_col-md-5__15DVD,.bootstrap-min_col-md-6__1vbTi,.bootstrap-min_col-md-7__2QmfU,.bootstrap-min_col-md-8__3iK48,.bootstrap-min_col-md-9__2Apy1,.bootstrap-min_col-md-auto__Eh3F2,.bootstrap-min_col-sm__2eezo,.bootstrap-min_col-sm-1__2zUq3,.bootstrap-min_col-sm-10__36KiQ,.bootstrap-min_col-sm-11__2NDic,.bootstrap-min_col-sm-12__2voWg,.bootstrap-min_col-sm-2__1tKJK,.bootstrap-min_col-sm-3__28kxC,.bootstrap-min_col-sm-4__1jB7H,.bootstrap-min_col-sm-5__223ow,.bootstrap-min_col-sm-6__1V2Ts,.bootstrap-min_col-sm-7__1TWhA,.bootstrap-min_col-sm-8__p8PTP,.bootstrap-min_col-sm-9__3y-wC,.bootstrap-min_col-sm-auto__3eXkk,.bootstrap-min_col-xl__3x8LH,.bootstrap-min_col-xl-1__2VwYK,.bootstrap-min_col-xl-10__2ZUYg,.bootstrap-min_col-xl-11__3TMI9,.bootstrap-min_col-xl-12__3jtDi,.bootstrap-min_col-xl-2__1B8HE,.bootstrap-min_col-xl-3__1O7op,.bootstrap-min_col-xl-4__2_zwC,.bootstrap-min_col-xl-5__2-83a,.bootstrap-min_col-xl-6__3A7tk,.bootstrap-min_col-xl-7__2hvqJ,.bootstrap-min_col-xl-8__3K2Mi,.bootstrap-min_col-xl-9__1BHV0,.bootstrap-min_col-xl-auto__1bfNf{position:relative;width:100%;padding-right:15px;padding-left:15px}.bootstrap-min_col__RU1cZ{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.bootstrap-min_row-cols-1__17s3x>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_row-cols-2__3HOa1>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_row-cols-3__1VtF9>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_row-cols-4__3Z8ZM>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_row-cols-5__2gesp>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.bootstrap-min_row-cols-6__3pUo8>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-auto__2A5d2{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.bootstrap-min_col-1__6Qqlk{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.bootstrap-min_col-2__t1tH5{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-3__2Qh34{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_col-4__1uyBp{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_col-5__1Cc2H{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.bootstrap-min_col-6__3mVHX{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_col-7__3z3Qw{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.bootstrap-min_col-8__2v9P1{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.bootstrap-min_col-9__Xi24b{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.bootstrap-min_col-10__3qdzx{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.bootstrap-min_col-11__humUF{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.bootstrap-min_col-12__16adp{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_order-first__28lWR{-ms-flex-order:-1;order:-1}.bootstrap-min_order-last__3g_t_{-ms-flex-order:13;order:13}.bootstrap-min_order-0__3cuZw{-ms-flex-order:0;order:0}.bootstrap-min_order-1__2KDdd{-ms-flex-order:1;order:1}.bootstrap-min_order-2__30UBH{-ms-flex-order:2;order:2}.bootstrap-min_order-3__2c9Qo{-ms-flex-order:3;order:3}.bootstrap-min_order-4__1qR7U{-ms-flex-order:4;order:4}.bootstrap-min_order-5__1-g8r{-ms-flex-order:5;order:5}.bootstrap-min_order-6__2fzs6{-ms-flex-order:6;order:6}.bootstrap-min_order-7__3sTcN{-ms-flex-order:7;order:7}.bootstrap-min_order-8__3vwOs{-ms-flex-order:8;order:8}.bootstrap-min_order-9__2aDvf{-ms-flex-order:9;order:9}.bootstrap-min_order-10__3taRp{-ms-flex-order:10;order:10}.bootstrap-min_order-11__2l38Z{-ms-flex-order:11;order:11}.bootstrap-min_order-12__2SSvU{-ms-flex-order:12;order:12}.bootstrap-min_offset-1__3mzBL{margin-left:8.333333%}.bootstrap-min_offset-2__3maGy{margin-left:16.666667%}.bootstrap-min_offset-3__1nSf-{margin-left:25%}.bootstrap-min_offset-4__3yZ-m{margin-left:33.333333%}.bootstrap-min_offset-5__q9yNr{margin-left:41.666667%}.bootstrap-min_offset-6__TvaUa{margin-left:50%}.bootstrap-min_offset-7__2M1zt{margin-left:58.333333%}.bootstrap-min_offset-8__2RgJK{margin-left:66.666667%}.bootstrap-min_offset-9__1uFuD{margin-left:75%}.bootstrap-min_offset-10__h18sf{margin-left:83.333333%}.bootstrap-min_offset-11__zX4oX{margin-left:91.666667%}@media (min-width:576px){.bootstrap-min_col-sm__2eezo{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.bootstrap-min_row-cols-sm-1__1YI-->*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_row-cols-sm-2__1rG6J>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_row-cols-sm-3__AHK-_>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_row-cols-sm-4__lhzlF>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_row-cols-sm-5__2n7yS>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.bootstrap-min_row-cols-sm-6__2XI-H>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-sm-auto__3eXkk{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.bootstrap-min_col-sm-1__2zUq3{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.bootstrap-min_col-sm-2__1tKJK{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-sm-3__28kxC{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_col-sm-4__1jB7H{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_col-sm-5__223ow{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.bootstrap-min_col-sm-6__1V2Ts{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_col-sm-7__1TWhA{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.bootstrap-min_col-sm-8__p8PTP{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.bootstrap-min_col-sm-9__3y-wC{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.bootstrap-min_col-sm-10__36KiQ{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.bootstrap-min_col-sm-11__2NDic{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.bootstrap-min_col-sm-12__2voWg{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_order-sm-first__2k17P{-ms-flex-order:-1;order:-1}.bootstrap-min_order-sm-last__3q1xs{-ms-flex-order:13;order:13}.bootstrap-min_order-sm-0__2M61G{-ms-flex-order:0;order:0}.bootstrap-min_order-sm-1__2_70j{-ms-flex-order:1;order:1}.bootstrap-min_order-sm-2__3EAm4{-ms-flex-order:2;order:2}.bootstrap-min_order-sm-3__1mq1Y{-ms-flex-order:3;order:3}.bootstrap-min_order-sm-4__OCbRg{-ms-flex-order:4;order:4}.bootstrap-min_order-sm-5__1fPNh{-ms-flex-order:5;order:5}.bootstrap-min_order-sm-6__2VW6d{-ms-flex-order:6;order:6}.bootstrap-min_order-sm-7__3rWwI{-ms-flex-order:7;order:7}.bootstrap-min_order-sm-8__3kR4-{-ms-flex-order:8;order:8}.bootstrap-min_order-sm-9__1BsBm{-ms-flex-order:9;order:9}.bootstrap-min_order-sm-10__1Dw2N{-ms-flex-order:10;order:10}.bootstrap-min_order-sm-11__MsvfW{-ms-flex-order:11;order:11}.bootstrap-min_order-sm-12__37zpc{-ms-flex-order:12;order:12}.bootstrap-min_offset-sm-0__n3CzS{margin-left:0}.bootstrap-min_offset-sm-1__6tb4G{margin-left:8.333333%}.bootstrap-min_offset-sm-2__2bc2d{margin-left:16.666667%}.bootstrap-min_offset-sm-3__2DS7I{margin-left:25%}.bootstrap-min_offset-sm-4__3tUmd{margin-left:33.333333%}.bootstrap-min_offset-sm-5__WtsaI{margin-left:41.666667%}.bootstrap-min_offset-sm-6__1W2G-{margin-left:50%}.bootstrap-min_offset-sm-7__2i9yj{margin-left:58.333333%}.bootstrap-min_offset-sm-8__1O0yq{margin-left:66.666667%}.bootstrap-min_offset-sm-9__3xR1G{margin-left:75%}.bootstrap-min_offset-sm-10__B-s1V{margin-left:83.333333%}.bootstrap-min_offset-sm-11__3jxwU{margin-left:91.666667%}}@media (min-width:768px){.bootstrap-min_col-md__AwNqC{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.bootstrap-min_row-cols-md-1__-k6Y6>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_row-cols-md-2__2TOZg>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_row-cols-md-3__3UoEo>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_row-cols-md-4__ZsNCQ>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_row-cols-md-5__1Yybp>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.bootstrap-min_row-cols-md-6__1XtR5>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-md-auto__Eh3F2{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.bootstrap-min_col-md-1__3I_2A{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.bootstrap-min_col-md-2__p0Q41{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-md-3__1gEUG{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_col-md-4__A8ARb{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_col-md-5__15DVD{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.bootstrap-min_col-md-6__1vbTi{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_col-md-7__2QmfU{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.bootstrap-min_col-md-8__3iK48{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.bootstrap-min_col-md-9__2Apy1{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.bootstrap-min_col-md-10__1j5LU{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.bootstrap-min_col-md-11__1RZFk{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.bootstrap-min_col-md-12__2ymaN{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_order-md-first__1WWCe{-ms-flex-order:-1;order:-1}.bootstrap-min_order-md-last__mR5Bp{-ms-flex-order:13;order:13}.bootstrap-min_order-md-0__28tzJ{-ms-flex-order:0;order:0}.bootstrap-min_order-md-1__223p3{-ms-flex-order:1;order:1}.bootstrap-min_order-md-2__XCAHB{-ms-flex-order:2;order:2}.bootstrap-min_order-md-3__2271W{-ms-flex-order:3;order:3}.bootstrap-min_order-md-4__9OXRm{-ms-flex-order:4;order:4}.bootstrap-min_order-md-5__3wS7j{-ms-flex-order:5;order:5}.bootstrap-min_order-md-6__384rx{-ms-flex-order:6;order:6}.bootstrap-min_order-md-7__1GQjS{-ms-flex-order:7;order:7}.bootstrap-min_order-md-8__16Cus{-ms-flex-order:8;order:8}.bootstrap-min_order-md-9__1bqgE{-ms-flex-order:9;order:9}.bootstrap-min_order-md-10__wGaq4{-ms-flex-order:10;order:10}.bootstrap-min_order-md-11__1DvqF{-ms-flex-order:11;order:11}.bootstrap-min_order-md-12__Sl-FS{-ms-flex-order:12;order:12}.bootstrap-min_offset-md-0__SPrVN{margin-left:0}.bootstrap-min_offset-md-1__1kjsF{margin-left:8.333333%}.bootstrap-min_offset-md-2__1Z5-x{margin-left:16.666667%}.bootstrap-min_offset-md-3__E0BCz{margin-left:25%}.bootstrap-min_offset-md-4__1ffco{margin-left:33.333333%}.bootstrap-min_offset-md-5__1G_Uz{margin-left:41.666667%}.bootstrap-min_offset-md-6__1cQki{margin-left:50%}.bootstrap-min_offset-md-7__nXnvU{margin-left:58.333333%}.bootstrap-min_offset-md-8__3E9v2{margin-left:66.666667%}.bootstrap-min_offset-md-9__3Gqfq{margin-left:75%}.bootstrap-min_offset-md-10__9higS{margin-left:83.333333%}.bootstrap-min_offset-md-11__19ak1{margin-left:91.666667%}}@media (min-width:992px){.bootstrap-min_col-lg__1w0iC{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.bootstrap-min_row-cols-lg-1__pJ1M5>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_row-cols-lg-2__Yzghm>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_row-cols-lg-3__32Drx>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_row-cols-lg-4__E7tDH>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_row-cols-lg-5__HwOOz>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.bootstrap-min_row-cols-lg-6__1g-CY>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-lg-auto__11W6e{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.bootstrap-min_col-lg-1__3uad4{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.bootstrap-min_col-lg-2__1b4lq{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-lg-3__3KCMa{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_col-lg-4__3gZYS{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_col-lg-5__2ewkc{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.bootstrap-min_col-lg-6__15QrV{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_col-lg-7__vKsWR{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.bootstrap-min_col-lg-8__AZTLn{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.bootstrap-min_col-lg-9__2459q{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.bootstrap-min_col-lg-10__1yTjU{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.bootstrap-min_col-lg-11__foFwG{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.bootstrap-min_col-lg-12__1Vspn{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_order-lg-first__3zjdY{-ms-flex-order:-1;order:-1}.bootstrap-min_order-lg-last__ZajyN{-ms-flex-order:13;order:13}.bootstrap-min_order-lg-0__3jzDG{-ms-flex-order:0;order:0}.bootstrap-min_order-lg-1__1aowm{-ms-flex-order:1;order:1}.bootstrap-min_order-lg-2__3e2tv{-ms-flex-order:2;order:2}.bootstrap-min_order-lg-3__32qP5{-ms-flex-order:3;order:3}.bootstrap-min_order-lg-4__2tFzW{-ms-flex-order:4;order:4}.bootstrap-min_order-lg-5__10eHM{-ms-flex-order:5;order:5}.bootstrap-min_order-lg-6__3D81p{-ms-flex-order:6;order:6}.bootstrap-min_order-lg-7__2yqLZ{-ms-flex-order:7;order:7}.bootstrap-min_order-lg-8__n02o0{-ms-flex-order:8;order:8}.bootstrap-min_order-lg-9__2R-MI{-ms-flex-order:9;order:9}.bootstrap-min_order-lg-10__Sp1WV{-ms-flex-order:10;order:10}.bootstrap-min_order-lg-11__1TOZ6{-ms-flex-order:11;order:11}.bootstrap-min_order-lg-12__3V7kY{-ms-flex-order:12;order:12}.bootstrap-min_offset-lg-0__26L4O{margin-left:0}.bootstrap-min_offset-lg-1__32GA9{margin-left:8.333333%}.bootstrap-min_offset-lg-2__2URYH{margin-left:16.666667%}.bootstrap-min_offset-lg-3__23Skv{margin-left:25%}.bootstrap-min_offset-lg-4__13--v{margin-left:33.333333%}.bootstrap-min_offset-lg-5__1i8tr{margin-left:41.666667%}.bootstrap-min_offset-lg-6__poDMj{margin-left:50%}.bootstrap-min_offset-lg-7__2mMsa{margin-left:58.333333%}.bootstrap-min_offset-lg-8__10gUw{margin-left:66.666667%}.bootstrap-min_offset-lg-9__1bD10{margin-left:75%}.bootstrap-min_offset-lg-10___S191{margin-left:83.333333%}.bootstrap-min_offset-lg-11__mlrVt{margin-left:91.666667%}}@media (min-width:1200px){.bootstrap-min_col-xl__3x8LH{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;max-width:100%}.bootstrap-min_row-cols-xl-1__3NXKH>*{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_row-cols-xl-2__3dSan>*{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_row-cols-xl-3__2x4F8>*{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_row-cols-xl-4__19pch>*{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_row-cols-xl-5__1fm4s>*{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}.bootstrap-min_row-cols-xl-6__2NiAs>*{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-xl-auto__1bfNf{-ms-flex:0 0 auto;flex:0 0 auto;width:auto;max-width:100%}.bootstrap-min_col-xl-1__2VwYK{-ms-flex:0 0 8.333333%;flex:0 0 8.333333%;max-width:8.333333%}.bootstrap-min_col-xl-2__1B8HE{-ms-flex:0 0 16.666667%;flex:0 0 16.666667%;max-width:16.666667%}.bootstrap-min_col-xl-3__1O7op{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.bootstrap-min_col-xl-4__2_zwC{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.bootstrap-min_col-xl-5__2-83a{-ms-flex:0 0 41.666667%;flex:0 0 41.666667%;max-width:41.666667%}.bootstrap-min_col-xl-6__3A7tk{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.bootstrap-min_col-xl-7__2hvqJ{-ms-flex:0 0 58.333333%;flex:0 0 58.333333%;max-width:58.333333%}.bootstrap-min_col-xl-8__3K2Mi{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}.bootstrap-min_col-xl-9__1BHV0{-ms-flex:0 0 75%;flex:0 0 75%;max-width:75%}.bootstrap-min_col-xl-10__2ZUYg{-ms-flex:0 0 83.333333%;flex:0 0 83.333333%;max-width:83.333333%}.bootstrap-min_col-xl-11__3TMI9{-ms-flex:0 0 91.666667%;flex:0 0 91.666667%;max-width:91.666667%}.bootstrap-min_col-xl-12__3jtDi{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.bootstrap-min_order-xl-first__ABKvU{-ms-flex-order:-1;order:-1}.bootstrap-min_order-xl-last__1ZQll{-ms-flex-order:13;order:13}.bootstrap-min_order-xl-0__3ctkz{-ms-flex-order:0;order:0}.bootstrap-min_order-xl-1__1hivV{-ms-flex-order:1;order:1}.bootstrap-min_order-xl-2__A8Fn-{-ms-flex-order:2;order:2}.bootstrap-min_order-xl-3__2iYrp{-ms-flex-order:3;order:3}.bootstrap-min_order-xl-4__2KWup{-ms-flex-order:4;order:4}.bootstrap-min_order-xl-5__19az2{-ms-flex-order:5;order:5}.bootstrap-min_order-xl-6__woc4X{-ms-flex-order:6;order:6}.bootstrap-min_order-xl-7__1kC3g{-ms-flex-order:7;order:7}.bootstrap-min_order-xl-8__2_Gls{-ms-flex-order:8;order:8}.bootstrap-min_order-xl-9__2ySo7{-ms-flex-order:9;order:9}.bootstrap-min_order-xl-10__zDPAG{-ms-flex-order:10;order:10}.bootstrap-min_order-xl-11__2-I-m{-ms-flex-order:11;order:11}.bootstrap-min_order-xl-12__1DZgb{-ms-flex-order:12;order:12}.bootstrap-min_offset-xl-0__3Ppx4{margin-left:0}.bootstrap-min_offset-xl-1__38A2i{margin-left:8.333333%}.bootstrap-min_offset-xl-2__1astV{margin-left:16.666667%}.bootstrap-min_offset-xl-3__3RLKt{margin-left:25%}.bootstrap-min_offset-xl-4__17-jt{margin-left:33.333333%}.bootstrap-min_offset-xl-5__1PhYG{margin-left:41.666667%}.bootstrap-min_offset-xl-6__1fV-o{margin-left:50%}.bootstrap-min_offset-xl-7__3DDhO{margin-left:58.333333%}.bootstrap-min_offset-xl-8__2lsdA{margin-left:66.666667%}.bootstrap-min_offset-xl-9__2nccN{margin-left:75%}.bootstrap-min_offset-xl-10__2wDrA{margin-left:83.333333%}.bootstrap-min_offset-xl-11__2E-O3{margin-left:91.666667%}}.bootstrap-min_table__GrZsg{width:100%;margin-bottom:1rem;color:#212529}.bootstrap-min_table__GrZsg td,.bootstrap-min_table__GrZsg th{padding:.75rem;vertical-align:top;border-top:1px solid #dee2e6}.bootstrap-min_table__GrZsg thead th{vertical-align:bottom;border-bottom:2px solid #dee2e6}.bootstrap-min_table__GrZsg tbody+tbody{border-top:2px solid #dee2e6}.bootstrap-min_table-sm__1Ill8 td,.bootstrap-min_table-sm__1Ill8 th{padding:.3rem}.bootstrap-min_table-bordered__jf6La{border:1px solid #dee2e6}.bootstrap-min_table-bordered__jf6La td,.bootstrap-min_table-bordered__jf6La th{border:1px solid #dee2e6}.bootstrap-min_table-bordered__jf6La thead td,.bootstrap-min_table-bordered__jf6La thead th{border-bottom-width:2px}.bootstrap-min_table-borderless__anXdR tbody+tbody,.bootstrap-min_table-borderless__anXdR td,.bootstrap-min_table-borderless__anXdR th,.bootstrap-min_table-borderless__anXdR thead th{border:0}.bootstrap-min_table-striped__15ObI tbody tr:nth-of-type(odd){background-color:rgba(0,0,0,.05)}.bootstrap-min_table-hover__2boCp tbody tr:hover{color:#212529;background-color:rgba(0,0,0,.075)}.bootstrap-min_table-primary__3SO7x,.bootstrap-min_table-primary__3SO7x>td,.bootstrap-min_table-primary__3SO7x>th{background-color:#b8daff}.bootstrap-min_table-primary__3SO7x tbody+tbody,.bootstrap-min_table-primary__3SO7x td,.bootstrap-min_table-primary__3SO7x th,.bootstrap-min_table-primary__3SO7x thead th{border-color:#7abaff}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-primary__3SO7x:hover{background-color:#9fcdff}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-primary__3SO7x:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-primary__3SO7x:hover>th{background-color:#9fcdff}.bootstrap-min_table-secondary__1ZpUz,.bootstrap-min_table-secondary__1ZpUz>td,.bootstrap-min_table-secondary__1ZpUz>th{background-color:#d6d8db}.bootstrap-min_table-secondary__1ZpUz tbody+tbody,.bootstrap-min_table-secondary__1ZpUz td,.bootstrap-min_table-secondary__1ZpUz th,.bootstrap-min_table-secondary__1ZpUz thead th{border-color:#b3b7bb}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-secondary__1ZpUz:hover{background-color:#c8cbcf}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-secondary__1ZpUz:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-secondary__1ZpUz:hover>th{background-color:#c8cbcf}.bootstrap-min_table-success__3AAEa,.bootstrap-min_table-success__3AAEa>td,.bootstrap-min_table-success__3AAEa>th{background-color:#c3e6cb}.bootstrap-min_table-success__3AAEa tbody+tbody,.bootstrap-min_table-success__3AAEa td,.bootstrap-min_table-success__3AAEa th,.bootstrap-min_table-success__3AAEa thead th{border-color:#8fd19e}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-success__3AAEa:hover{background-color:#b1dfbb}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-success__3AAEa:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-success__3AAEa:hover>th{background-color:#b1dfbb}.bootstrap-min_table-info__x680H,.bootstrap-min_table-info__x680H>td,.bootstrap-min_table-info__x680H>th{background-color:#bee5eb}.bootstrap-min_table-info__x680H tbody+tbody,.bootstrap-min_table-info__x680H td,.bootstrap-min_table-info__x680H th,.bootstrap-min_table-info__x680H thead th{border-color:#86cfda}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-info__x680H:hover{background-color:#abdde5}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-info__x680H:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-info__x680H:hover>th{background-color:#abdde5}.bootstrap-min_table-warning__3DXJT,.bootstrap-min_table-warning__3DXJT>td,.bootstrap-min_table-warning__3DXJT>th{background-color:#ffeeba}.bootstrap-min_table-warning__3DXJT tbody+tbody,.bootstrap-min_table-warning__3DXJT td,.bootstrap-min_table-warning__3DXJT th,.bootstrap-min_table-warning__3DXJT thead th{border-color:#ffdf7e}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-warning__3DXJT:hover{background-color:#ffe8a1}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-warning__3DXJT:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-warning__3DXJT:hover>th{background-color:#ffe8a1}.bootstrap-min_table-danger__9FPT1,.bootstrap-min_table-danger__9FPT1>td,.bootstrap-min_table-danger__9FPT1>th{background-color:#f5c6cb}.bootstrap-min_table-danger__9FPT1 tbody+tbody,.bootstrap-min_table-danger__9FPT1 td,.bootstrap-min_table-danger__9FPT1 th,.bootstrap-min_table-danger__9FPT1 thead th{border-color:#ed969e}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-danger__9FPT1:hover{background-color:#f1b0b7}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-danger__9FPT1:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-danger__9FPT1:hover>th{background-color:#f1b0b7}.bootstrap-min_table-light__16t3P,.bootstrap-min_table-light__16t3P>td,.bootstrap-min_table-light__16t3P>th{background-color:#fdfdfe}.bootstrap-min_table-light__16t3P tbody+tbody,.bootstrap-min_table-light__16t3P td,.bootstrap-min_table-light__16t3P th,.bootstrap-min_table-light__16t3P thead th{border-color:#fbfcfc}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-light__16t3P:hover{background-color:#ececf6}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-light__16t3P:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-light__16t3P:hover>th{background-color:#ececf6}.bootstrap-min_table-dark__ip9nb,.bootstrap-min_table-dark__ip9nb>td,.bootstrap-min_table-dark__ip9nb>th{background-color:#c6c8ca}.bootstrap-min_table-dark__ip9nb tbody+tbody,.bootstrap-min_table-dark__ip9nb td,.bootstrap-min_table-dark__ip9nb th,.bootstrap-min_table-dark__ip9nb thead th{border-color:#95999c}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-dark__ip9nb:hover{background-color:#b9bbbe}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-dark__ip9nb:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-dark__ip9nb:hover>th{background-color:#b9bbbe}.bootstrap-min_table-active__3Q_TP,.bootstrap-min_table-active__3Q_TP>td,.bootstrap-min_table-active__3Q_TP>th{background-color:rgba(0,0,0,.075)}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-active__3Q_TP:hover{background-color:rgba(0,0,0,.075)}.bootstrap-min_table-hover__2boCp .bootstrap-min_table-active__3Q_TP:hover>td,.bootstrap-min_table-hover__2boCp .bootstrap-min_table-active__3Q_TP:hover>th{background-color:rgba(0,0,0,.075)}.bootstrap-min_table__GrZsg .bootstrap-min_thead-dark__269Fy th{color:#fff;background-color:#343a40;border-color:#454d55}.bootstrap-min_table__GrZsg .bootstrap-min_thead-light__3mJqb th{color:#495057;background-color:#e9ecef;border-color:#dee2e6}.bootstrap-min_table-dark__ip9nb{color:#fff;background-color:#343a40}.bootstrap-min_table-dark__ip9nb td,.bootstrap-min_table-dark__ip9nb th,.bootstrap-min_table-dark__ip9nb thead th{border-color:#454d55}.bootstrap-min_table-dark__ip9nb.bootstrap-min_table-bordered__jf6La{border:0}.bootstrap-min_table-dark__ip9nb.bootstrap-min_table-striped__15ObI tbody tr:nth-of-type(odd){background-color:rgba(255,255,255,.05)}.bootstrap-min_table-dark__ip9nb.bootstrap-min_table-hover__2boCp tbody tr:hover{color:#fff;background-color:rgba(255,255,255,.075)}@media (max-width:575.98px){.bootstrap-min_table-responsive-sm__337J0{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.bootstrap-min_table-responsive-sm__337J0>.bootstrap-min_table-bordered__jf6La{border:0}}@media (max-width:767.98px){.bootstrap-min_table-responsive-md__3g9P4{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.bootstrap-min_table-responsive-md__3g9P4>.bootstrap-min_table-bordered__jf6La{border:0}}@media (max-width:991.98px){.bootstrap-min_table-responsive-lg__bpkWR{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.bootstrap-min_table-responsive-lg__bpkWR>.bootstrap-min_table-bordered__jf6La{border:0}}@media (max-width:1199.98px){.bootstrap-min_table-responsive-xl__1QLe-{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.bootstrap-min_table-responsive-xl__1QLe->.bootstrap-min_table-bordered__jf6La{border:0}}.bootstrap-min_table-responsive__3JORC{display:block;width:100%;overflow-x:auto;-webkit-overflow-scrolling:touch}.bootstrap-min_table-responsive__3JORC>.bootstrap-min_table-bordered__jf6La{border:0}.bootstrap-min_form-control__fANnP{display:block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #ced4da;border-radius:.25rem;transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_form-control__fANnP{transition:none}}.bootstrap-min_form-control__fANnP::-ms-expand{background-color:transparent;border:0}.bootstrap-min_form-control__fANnP:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.bootstrap-min_form-control__fANnP:focus{color:#495057;background-color:#fff;border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_form-control__fANnP::-webkit-input-placeholder{color:#6c757d;opacity:1}.bootstrap-min_form-control__fANnP::-moz-placeholder{color:#6c757d;opacity:1}.bootstrap-min_form-control__fANnP:-ms-input-placeholder{color:#6c757d;opacity:1}.bootstrap-min_form-control__fANnP::-ms-input-placeholder{color:#6c757d;opacity:1}.bootstrap-min_form-control__fANnP::placeholder{color:#6c757d;opacity:1}.bootstrap-min_form-control__fANnP:disabled,.bootstrap-min_form-control__fANnP[readonly]{background-color:#e9ecef;opacity:1}select.bootstrap-min_form-control__fANnP:focus::-ms-value{color:#495057;background-color:#fff}.bootstrap-min_form-control-file__3Hngc,.bootstrap-min_form-control-range__1n97V{display:block;width:100%}.bootstrap-min_col-form-label__1z8uf{padding-top:calc(.375rem + 1px);padding-bottom:calc(.375rem + 1px);margin-bottom:0;font-size:inherit;line-height:1.5}.bootstrap-min_col-form-label-lg__2Qksr{padding-top:calc(.5rem + 1px);padding-bottom:calc(.5rem + 1px);font-size:1.25rem;line-height:1.5}.bootstrap-min_col-form-label-sm__2wdq-{padding-top:calc(.25rem + 1px);padding-bottom:calc(.25rem + 1px);font-size:.875rem;line-height:1.5}.bootstrap-min_form-control-plaintext__3Vm1h{display:block;width:100%;padding:.375rem 0;margin-bottom:0;font-size:1rem;line-height:1.5;color:#212529;background-color:transparent;border:solid transparent;border-width:1px 0}.bootstrap-min_form-control-plaintext__3Vm1h.bootstrap-min_form-control-lg__3soHr,.bootstrap-min_form-control-plaintext__3Vm1h.bootstrap-min_form-control-sm__2nCKg{padding-right:0;padding-left:0}.bootstrap-min_form-control-sm__2nCKg{height:calc(1.5em + .5rem + 2px);padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.bootstrap-min_form-control-lg__3soHr{height:calc(1.5em + 1rem + 2px);padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}select.bootstrap-min_form-control__fANnP[multiple],select.bootstrap-min_form-control__fANnP[size]{height:auto}textarea.bootstrap-min_form-control__fANnP{height:auto}.bootstrap-min_form-group__1njHb{margin-bottom:1rem}.bootstrap-min_form-text__306pf{display:block;margin-top:.25rem}.bootstrap-min_form-row__24oCs{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-5px;margin-left:-5px}.bootstrap-min_form-row__24oCs>.bootstrap-min_col__RU1cZ,.bootstrap-min_form-row__24oCs>[class*=col-]{padding-right:5px;padding-left:5px}.bootstrap-min_form-check__3sVw_{position:relative;display:block;padding-left:1.25rem}.bootstrap-min_form-check-input__3DDZ-{position:absolute;margin-top:.3rem;margin-left:-1.25rem}.bootstrap-min_form-check-input__3DDZ-:disabled~.bootstrap-min_form-check-label__3xBdx,.bootstrap-min_form-check-input__3DDZ-[disabled]~.bootstrap-min_form-check-label__3xBdx{color:#6c757d}.bootstrap-min_form-check-label__3xBdx{margin-bottom:0}.bootstrap-min_form-check-inline__2b2Vf{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;padding-left:0;margin-right:.75rem}.bootstrap-min_form-check-inline__2b2Vf .bootstrap-min_form-check-input__3DDZ-{position:static;margin-top:0;margin-right:.3125rem;margin-left:0}.bootstrap-min_valid-feedback__14GzG{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#28a745}.bootstrap-min_valid-tooltip__NuBPF{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(40,167,69,.9);border-radius:.25rem}.bootstrap-min_is-valid__SWhYo~.bootstrap-min_valid-feedback__14GzG,.bootstrap-min_is-valid__SWhYo~.bootstrap-min_valid-tooltip__NuBPF,.bootstrap-min_was-validated__3iU3L :valid~.bootstrap-min_valid-feedback__14GzG,.bootstrap-min_was-validated__3iU3L :valid~.bootstrap-min_valid-tooltip__NuBPF{display:block}.bootstrap-min_form-control__fANnP.bootstrap-min_is-valid__SWhYo,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-control__fANnP:valid{border-color:#28a745;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.bootstrap-min_form-control__fANnP.bootstrap-min_is-valid__SWhYo:focus,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-control__fANnP:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.bootstrap-min_was-validated__3iU3L textarea.bootstrap-min_form-control__fANnP:valid,textarea.bootstrap-min_form-control__fANnP.bootstrap-min_is-valid__SWhYo{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.bootstrap-min_custom-select__14GRb.bootstrap-min_is-valid__SWhYo,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-select__14GRb:valid{border-color:#28a745;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.bootstrap-min_custom-select__14GRb.bootstrap-min_is-valid__SWhYo:focus,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-select__14GRb:valid:focus{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-valid__SWhYo~.bootstrap-min_form-check-label__3xBdx,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:valid~.bootstrap-min_form-check-label__3xBdx{color:#28a745}.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-valid__SWhYo~.bootstrap-min_valid-feedback__14GzG,.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-valid__SWhYo~.bootstrap-min_valid-tooltip__NuBPF,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:valid~.bootstrap-min_valid-feedback__14GzG,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:valid~.bootstrap-min_valid-tooltip__NuBPF{display:block}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-valid__SWhYo~.bootstrap-min_custom-control-label__fKECc,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:valid~.bootstrap-min_custom-control-label__fKECc{color:#28a745}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-valid__SWhYo~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:valid~.bootstrap-min_custom-control-label__fKECc::before{border-color:#28a745}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-valid__SWhYo:checked~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:valid:checked~.bootstrap-min_custom-control-label__fKECc::before{border-color:#34ce57;background-color:#34ce57}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-valid__SWhYo:focus~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:valid:focus~.bootstrap-min_custom-control-label__fKECc::before{box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-valid__SWhYo:focus:not(:checked)~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:valid:focus:not(:checked)~.bootstrap-min_custom-control-label__fKECc::before{border-color:#28a745}.bootstrap-min_custom-file-input__36AJ8.bootstrap-min_is-valid__SWhYo~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-file-input__36AJ8:valid~.bootstrap-min_custom-file-label__2PmAt{border-color:#28a745}.bootstrap-min_custom-file-input__36AJ8.bootstrap-min_is-valid__SWhYo:focus~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-file-input__36AJ8:valid:focus~.bootstrap-min_custom-file-label__2PmAt{border-color:#28a745;box-shadow:0 0 0 .2rem rgba(40,167,69,.25)}.bootstrap-min_invalid-feedback__2rYSE{display:none;width:100%;margin-top:.25rem;font-size:80%;color:#dc3545}.bootstrap-min_invalid-tooltip__3Xb-8{position:absolute;top:100%;z-index:5;display:none;max-width:100%;padding:.25rem .5rem;margin-top:.1rem;font-size:.875rem;line-height:1.5;color:#fff;background-color:rgba(220,53,69,.9);border-radius:.25rem}.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_invalid-feedback__2rYSE,.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_invalid-tooltip__3Xb-8,.bootstrap-min_was-validated__3iU3L :invalid~.bootstrap-min_invalid-feedback__2rYSE,.bootstrap-min_was-validated__3iU3L :invalid~.bootstrap-min_invalid-tooltip__3Xb-8{display:block}.bootstrap-min_form-control__fANnP.bootstrap-min_is-invalid__P7W0T,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-control__fANnP:invalid{border-color:#dc3545;padding-right:calc(1.5em + .75rem);background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\");background-repeat:no-repeat;background-position:right calc(.375em + .1875rem) center;background-size:calc(.75em + .375rem) calc(.75em + .375rem)}.bootstrap-min_form-control__fANnP.bootstrap-min_is-invalid__P7W0T:focus,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-control__fANnP:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.bootstrap-min_was-validated__3iU3L textarea.bootstrap-min_form-control__fANnP:invalid,textarea.bootstrap-min_form-control__fANnP.bootstrap-min_is-invalid__P7W0T{padding-right:calc(1.5em + .75rem);background-position:top calc(.375em + .1875rem) right calc(.375em + .1875rem)}.bootstrap-min_custom-select__14GRb.bootstrap-min_is-invalid__P7W0T,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-select__14GRb:invalid{border-color:#dc3545;padding-right:calc(.75em + 2.3125rem);background:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px,url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem)}.bootstrap-min_custom-select__14GRb.bootstrap-min_is-invalid__P7W0T:focus,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-select__14GRb:invalid:focus{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_form-check-label__3xBdx,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:invalid~.bootstrap-min_form-check-label__3xBdx{color:#dc3545}.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_invalid-feedback__2rYSE,.bootstrap-min_form-check-input__3DDZ-.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_invalid-tooltip__3Xb-8,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:invalid~.bootstrap-min_invalid-feedback__2rYSE,.bootstrap-min_was-validated__3iU3L .bootstrap-min_form-check-input__3DDZ-:invalid~.bootstrap-min_invalid-tooltip__3Xb-8{display:block}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_custom-control-label__fKECc,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:invalid~.bootstrap-min_custom-control-label__fKECc{color:#dc3545}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:invalid~.bootstrap-min_custom-control-label__fKECc::before{border-color:#dc3545}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-invalid__P7W0T:checked~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:invalid:checked~.bootstrap-min_custom-control-label__fKECc::before{border-color:#e4606d;background-color:#e4606d}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-invalid__P7W0T:focus~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:invalid:focus~.bootstrap-min_custom-control-label__fKECc::before{box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.bootstrap-min_custom-control-input__j1ZQf.bootstrap-min_is-invalid__P7W0T:focus:not(:checked)~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-control-input__j1ZQf:invalid:focus:not(:checked)~.bootstrap-min_custom-control-label__fKECc::before{border-color:#dc3545}.bootstrap-min_custom-file-input__36AJ8.bootstrap-min_is-invalid__P7W0T~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-file-input__36AJ8:invalid~.bootstrap-min_custom-file-label__2PmAt{border-color:#dc3545}.bootstrap-min_custom-file-input__36AJ8.bootstrap-min_is-invalid__P7W0T:focus~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_was-validated__3iU3L .bootstrap-min_custom-file-input__36AJ8:invalid:focus~.bootstrap-min_custom-file-label__2PmAt{border-color:#dc3545;box-shadow:0 0 0 .2rem rgba(220,53,69,.25)}.bootstrap-min_form-inline__1XVYA{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-check__3sVw_{width:100%}@media (min-width:576px){.bootstrap-min_form-inline__1XVYA label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;margin-bottom:0}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-group__1njHb{display:-ms-flexbox;display:flex;-ms-flex:0 0 auto;flex:0 0 auto;-ms-flex-flow:row wrap;flex-flow:row wrap;-ms-flex-align:center;align-items:center;margin-bottom:0}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-control__fANnP{display:inline-block;width:auto;vertical-align:middle}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-control-plaintext__3Vm1h{display:inline-block}.bootstrap-min_form-inline__1XVYA .bootstrap-min_custom-select__14GRb,.bootstrap-min_form-inline__1XVYA .bootstrap-min_input-group__3jA_e{width:auto}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-check__3sVw_{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-left:0}.bootstrap-min_form-inline__1XVYA .bootstrap-min_form-check-input__3DDZ-{position:relative;-ms-flex-negative:0;flex-shrink:0;margin-top:0;margin-right:.25rem;margin-left:0}.bootstrap-min_form-inline__1XVYA .bootstrap-min_custom-control__1tp0t{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.bootstrap-min_form-inline__1XVYA .bootstrap-min_custom-control-label__fKECc{margin-bottom:0}}.bootstrap-min_btn__33rIN{display:inline-block;font-weight:400;color:#212529;text-align:center;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-color:transparent;border:1px solid transparent;padding:.375rem .75rem;font-size:1rem;line-height:1.5;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_btn__33rIN{transition:none}}.bootstrap-min_btn__33rIN:hover{color:#212529;text-decoration:none}.bootstrap-min_btn__33rIN.bootstrap-min_focus__35glV,.bootstrap-min_btn__33rIN:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_btn__33rIN.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn__33rIN:disabled{opacity:.65}a.bootstrap-min_btn__33rIN.bootstrap-min_disabled__fTMRt,fieldset:disabled a.bootstrap-min_btn__33rIN{pointer-events:none}.bootstrap-min_btn-primary__1uK5i{color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_btn-primary__1uK5i:hover{color:#fff;background-color:#0069d9;border-color:#0062cc}.bootstrap-min_btn-primary__1uK5i.bootstrap-min_focus__35glV,.bootstrap-min_btn-primary__1uK5i:focus{color:#fff;background-color:#0069d9;border-color:#0062cc;box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.bootstrap-min_btn-primary__1uK5i.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-primary__1uK5i:disabled{color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_btn-primary__1uK5i:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-primary__1uK5i:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-primary__1uK5i.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#0062cc;border-color:#005cbf}.bootstrap-min_btn-primary__1uK5i:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-primary__1uK5i:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-primary__1uK5i.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(38,143,255,.5)}.bootstrap-min_btn-secondary__147J1{color:#fff;background-color:#6c757d;border-color:#6c757d}.bootstrap-min_btn-secondary__147J1:hover{color:#fff;background-color:#5a6268;border-color:#545b62}.bootstrap-min_btn-secondary__147J1.bootstrap-min_focus__35glV,.bootstrap-min_btn-secondary__147J1:focus{color:#fff;background-color:#5a6268;border-color:#545b62;box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.bootstrap-min_btn-secondary__147J1.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-secondary__147J1:disabled{color:#fff;background-color:#6c757d;border-color:#6c757d}.bootstrap-min_btn-secondary__147J1:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-secondary__147J1:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-secondary__147J1.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#545b62;border-color:#4e555b}.bootstrap-min_btn-secondary__147J1:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-secondary__147J1:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-secondary__147J1.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(130,138,145,.5)}.bootstrap-min_btn-success__2Ish5{color:#fff;background-color:#28a745;border-color:#28a745}.bootstrap-min_btn-success__2Ish5:hover{color:#fff;background-color:#218838;border-color:#1e7e34}.bootstrap-min_btn-success__2Ish5.bootstrap-min_focus__35glV,.bootstrap-min_btn-success__2Ish5:focus{color:#fff;background-color:#218838;border-color:#1e7e34;box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.bootstrap-min_btn-success__2Ish5.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-success__2Ish5:disabled{color:#fff;background-color:#28a745;border-color:#28a745}.bootstrap-min_btn-success__2Ish5:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-success__2Ish5:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-success__2Ish5.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#1e7e34;border-color:#1c7430}.bootstrap-min_btn-success__2Ish5:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-success__2Ish5:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-success__2Ish5.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(72,180,97,.5)}.bootstrap-min_btn-info__3XM44{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.bootstrap-min_btn-info__3XM44:hover{color:#fff;background-color:#138496;border-color:#117a8b}.bootstrap-min_btn-info__3XM44.bootstrap-min_focus__35glV,.bootstrap-min_btn-info__3XM44:focus{color:#fff;background-color:#138496;border-color:#117a8b;box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.bootstrap-min_btn-info__3XM44.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-info__3XM44:disabled{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.bootstrap-min_btn-info__3XM44:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-info__3XM44:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-info__3XM44.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#117a8b;border-color:#10707f}.bootstrap-min_btn-info__3XM44:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-info__3XM44:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-info__3XM44.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(58,176,195,.5)}.bootstrap-min_btn-warning__3IE29{color:#212529;background-color:#ffc107;border-color:#ffc107}.bootstrap-min_btn-warning__3IE29:hover{color:#212529;background-color:#e0a800;border-color:#d39e00}.bootstrap-min_btn-warning__3IE29.bootstrap-min_focus__35glV,.bootstrap-min_btn-warning__3IE29:focus{color:#212529;background-color:#e0a800;border-color:#d39e00;box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.bootstrap-min_btn-warning__3IE29.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-warning__3IE29:disabled{color:#212529;background-color:#ffc107;border-color:#ffc107}.bootstrap-min_btn-warning__3IE29:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-warning__3IE29:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-warning__3IE29.bootstrap-min_dropdown-toggle__1nQ3V{color:#212529;background-color:#d39e00;border-color:#c69500}.bootstrap-min_btn-warning__3IE29:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-warning__3IE29:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-warning__3IE29.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(222,170,12,.5)}.bootstrap-min_btn-danger__1PX1f{color:#fff;background-color:#dc3545;border-color:#dc3545}.bootstrap-min_btn-danger__1PX1f:hover{color:#fff;background-color:#c82333;border-color:#bd2130}.bootstrap-min_btn-danger__1PX1f.bootstrap-min_focus__35glV,.bootstrap-min_btn-danger__1PX1f:focus{color:#fff;background-color:#c82333;border-color:#bd2130;box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.bootstrap-min_btn-danger__1PX1f.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-danger__1PX1f:disabled{color:#fff;background-color:#dc3545;border-color:#dc3545}.bootstrap-min_btn-danger__1PX1f:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-danger__1PX1f:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-danger__1PX1f.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#bd2130;border-color:#b21f2d}.bootstrap-min_btn-danger__1PX1f:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-danger__1PX1f:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-danger__1PX1f.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(225,83,97,.5)}.bootstrap-min_btn-light__3CaQW{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.bootstrap-min_btn-light__3CaQW:hover{color:#212529;background-color:#e2e6ea;border-color:#dae0e5}.bootstrap-min_btn-light__3CaQW.bootstrap-min_focus__35glV,.bootstrap-min_btn-light__3CaQW:focus{color:#212529;background-color:#e2e6ea;border-color:#dae0e5;box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.bootstrap-min_btn-light__3CaQW.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-light__3CaQW:disabled{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.bootstrap-min_btn-light__3CaQW:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-light__3CaQW:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-light__3CaQW.bootstrap-min_dropdown-toggle__1nQ3V{color:#212529;background-color:#dae0e5;border-color:#d3d9df}.bootstrap-min_btn-light__3CaQW:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-light__3CaQW:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-light__3CaQW.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(216,217,219,.5)}.bootstrap-min_btn-dark__2Sqzj{color:#fff;background-color:#343a40;border-color:#343a40}.bootstrap-min_btn-dark__2Sqzj:hover{color:#fff;background-color:#23272b;border-color:#1d2124}.bootstrap-min_btn-dark__2Sqzj.bootstrap-min_focus__35glV,.bootstrap-min_btn-dark__2Sqzj:focus{color:#fff;background-color:#23272b;border-color:#1d2124;box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.bootstrap-min_btn-dark__2Sqzj.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-dark__2Sqzj:disabled{color:#fff;background-color:#343a40;border-color:#343a40}.bootstrap-min_btn-dark__2Sqzj:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-dark__2Sqzj:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-dark__2Sqzj.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#1d2124;border-color:#171a1d}.bootstrap-min_btn-dark__2Sqzj:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-dark__2Sqzj:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-dark__2Sqzj.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(82,88,93,.5)}.bootstrap-min_btn-outline-primary__1PhQ7{color:#007bff;border-color:#007bff}.bootstrap-min_btn-outline-primary__1PhQ7:hover{color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_btn-outline-primary__1PhQ7.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-primary__1PhQ7:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.bootstrap-min_btn-outline-primary__1PhQ7.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-primary__1PhQ7:disabled{color:#007bff;background-color:transparent}.bootstrap-min_btn-outline-primary__1PhQ7:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-primary__1PhQ7:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-primary__1PhQ7.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_btn-outline-primary__1PhQ7:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-primary__1PhQ7:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-primary__1PhQ7.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.bootstrap-min_btn-outline-secondary__3EK6n{color:#6c757d;border-color:#6c757d}.bootstrap-min_btn-outline-secondary__3EK6n:hover{color:#fff;background-color:#6c757d;border-color:#6c757d}.bootstrap-min_btn-outline-secondary__3EK6n.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-secondary__3EK6n:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.bootstrap-min_btn-outline-secondary__3EK6n.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-secondary__3EK6n:disabled{color:#6c757d;background-color:transparent}.bootstrap-min_btn-outline-secondary__3EK6n:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-secondary__3EK6n:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-secondary__3EK6n.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#6c757d;border-color:#6c757d}.bootstrap-min_btn-outline-secondary__3EK6n:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-secondary__3EK6n:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-secondary__3EK6n.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.bootstrap-min_btn-outline-success__hmqmA{color:#28a745;border-color:#28a745}.bootstrap-min_btn-outline-success__hmqmA:hover{color:#fff;background-color:#28a745;border-color:#28a745}.bootstrap-min_btn-outline-success__hmqmA.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-success__hmqmA:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.bootstrap-min_btn-outline-success__hmqmA.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-success__hmqmA:disabled{color:#28a745;background-color:transparent}.bootstrap-min_btn-outline-success__hmqmA:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-success__hmqmA:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-success__hmqmA.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#28a745;border-color:#28a745}.bootstrap-min_btn-outline-success__hmqmA:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-success__hmqmA:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-success__hmqmA.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.bootstrap-min_btn-outline-info__d5m4a{color:#17a2b8;border-color:#17a2b8}.bootstrap-min_btn-outline-info__d5m4a:hover{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.bootstrap-min_btn-outline-info__d5m4a.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-info__d5m4a:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.bootstrap-min_btn-outline-info__d5m4a.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-info__d5m4a:disabled{color:#17a2b8;background-color:transparent}.bootstrap-min_btn-outline-info__d5m4a:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-info__d5m4a:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-info__d5m4a.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#17a2b8;border-color:#17a2b8}.bootstrap-min_btn-outline-info__d5m4a:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-info__d5m4a:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-info__d5m4a.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.bootstrap-min_btn-outline-warning__ktVaW{color:#ffc107;border-color:#ffc107}.bootstrap-min_btn-outline-warning__ktVaW:hover{color:#212529;background-color:#ffc107;border-color:#ffc107}.bootstrap-min_btn-outline-warning__ktVaW.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-warning__ktVaW:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.bootstrap-min_btn-outline-warning__ktVaW.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-warning__ktVaW:disabled{color:#ffc107;background-color:transparent}.bootstrap-min_btn-outline-warning__ktVaW:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-warning__ktVaW:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-warning__ktVaW.bootstrap-min_dropdown-toggle__1nQ3V{color:#212529;background-color:#ffc107;border-color:#ffc107}.bootstrap-min_btn-outline-warning__ktVaW:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-warning__ktVaW:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-warning__ktVaW.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.bootstrap-min_btn-outline-danger__219up{color:#dc3545;border-color:#dc3545}.bootstrap-min_btn-outline-danger__219up:hover{color:#fff;background-color:#dc3545;border-color:#dc3545}.bootstrap-min_btn-outline-danger__219up.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-danger__219up:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.bootstrap-min_btn-outline-danger__219up.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-danger__219up:disabled{color:#dc3545;background-color:transparent}.bootstrap-min_btn-outline-danger__219up:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-danger__219up:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-danger__219up.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#dc3545;border-color:#dc3545}.bootstrap-min_btn-outline-danger__219up:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-danger__219up:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-danger__219up.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.bootstrap-min_btn-outline-light__qbKU0{color:#f8f9fa;border-color:#f8f9fa}.bootstrap-min_btn-outline-light__qbKU0:hover{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.bootstrap-min_btn-outline-light__qbKU0.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-light__qbKU0:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.bootstrap-min_btn-outline-light__qbKU0.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-light__qbKU0:disabled{color:#f8f9fa;background-color:transparent}.bootstrap-min_btn-outline-light__qbKU0:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-light__qbKU0:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-light__qbKU0.bootstrap-min_dropdown-toggle__1nQ3V{color:#212529;background-color:#f8f9fa;border-color:#f8f9fa}.bootstrap-min_btn-outline-light__qbKU0:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-light__qbKU0:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-light__qbKU0.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.bootstrap-min_btn-outline-dark__1zkgz{color:#343a40;border-color:#343a40}.bootstrap-min_btn-outline-dark__1zkgz:hover{color:#fff;background-color:#343a40;border-color:#343a40}.bootstrap-min_btn-outline-dark__1zkgz.bootstrap-min_focus__35glV,.bootstrap-min_btn-outline-dark__1zkgz:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.bootstrap-min_btn-outline-dark__1zkgz.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-outline-dark__1zkgz:disabled{color:#343a40;background-color:transparent}.bootstrap-min_btn-outline-dark__1zkgz:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW,.bootstrap-min_btn-outline-dark__1zkgz:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-dark__1zkgz.bootstrap-min_dropdown-toggle__1nQ3V{color:#fff;background-color:#343a40;border-color:#343a40}.bootstrap-min_btn-outline-dark__1zkgz:not(:disabled):not(.bootstrap-min_disabled__fTMRt).bootstrap-min_active__tKiHW:focus,.bootstrap-min_btn-outline-dark__1zkgz:not(:disabled):not(.bootstrap-min_disabled__fTMRt):active:focus,.bootstrap-min_show__21bZy>.bootstrap-min_btn-outline-dark__1zkgz.bootstrap-min_dropdown-toggle__1nQ3V:focus{box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.bootstrap-min_btn-link__3yKvN{font-weight:400;color:#007bff;text-decoration:none}.bootstrap-min_btn-link__3yKvN:hover{color:#0056b3;text-decoration:underline}.bootstrap-min_btn-link__3yKvN.bootstrap-min_focus__35glV,.bootstrap-min_btn-link__3yKvN:focus{text-decoration:underline;box-shadow:none}.bootstrap-min_btn-link__3yKvN.bootstrap-min_disabled__fTMRt,.bootstrap-min_btn-link__3yKvN:disabled{color:#6c757d;pointer-events:none}.bootstrap-min_btn-group-lg__1whjW>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-lg__1NEsE{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.bootstrap-min_btn-group-sm__yebtv>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-sm__3Jksh{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.bootstrap-min_btn-block__36r0B{display:block;width:100%}.bootstrap-min_btn-block__36r0B+.bootstrap-min_btn-block__36r0B{margin-top:.5rem}input[type=button].bootstrap-min_btn-block__36r0B,input[type=reset].bootstrap-min_btn-block__36r0B,input[type=submit].bootstrap-min_btn-block__36r0B{width:100%}.bootstrap-min_fade__1rBDU{transition:opacity .15s linear}@media (prefers-reduced-motion:reduce){.bootstrap-min_fade__1rBDU{transition:none}}.bootstrap-min_fade__1rBDU:not(.bootstrap-min_show__21bZy){opacity:0}.bootstrap-min_collapse__EYjfW:not(.bootstrap-min_show__21bZy){display:none}.bootstrap-min_collapsing__1zNEv{position:relative;height:0;overflow:hidden;transition:height .35s ease}@media (prefers-reduced-motion:reduce){.bootstrap-min_collapsing__1zNEv{transition:none}}.bootstrap-min_dropdown__24B3o,.bootstrap-min_dropleft__2Od7v,.bootstrap-min_dropright__2m7GB,.bootstrap-min_dropup__2vLDm{position:relative}.bootstrap-min_dropdown-toggle__1nQ3V{white-space:nowrap}.bootstrap-min_dropdown-toggle__1nQ3V::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent}.bootstrap-min_dropdown-toggle__1nQ3V:empty::after{margin-left:0}.bootstrap-min_dropdown-menu__1u94g{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:10rem;padding:.5rem 0;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.15);border-radius:.25rem}.bootstrap-min_dropdown-menu-left__3h_I_{right:auto;left:0}.bootstrap-min_dropdown-menu-right__3Qt2w{right:0;left:auto}@media (min-width:576px){.bootstrap-min_dropdown-menu-sm-left__Dzh69{right:auto;left:0}.bootstrap-min_dropdown-menu-sm-right__2louD{right:0;left:auto}}@media (min-width:768px){.bootstrap-min_dropdown-menu-md-left__zHGYv{right:auto;left:0}.bootstrap-min_dropdown-menu-md-right__3gZ65{right:0;left:auto}}@media (min-width:992px){.bootstrap-min_dropdown-menu-lg-left__1v5Wo{right:auto;left:0}.bootstrap-min_dropdown-menu-lg-right__3Pb7w{right:0;left:auto}}@media (min-width:1200px){.bootstrap-min_dropdown-menu-xl-left__1ja3T{right:auto;left:0}.bootstrap-min_dropdown-menu-xl-right__21VN_{right:0;left:auto}}.bootstrap-min_dropup__2vLDm .bootstrap-min_dropdown-menu__1u94g{top:auto;bottom:100%;margin-top:0;margin-bottom:.125rem}.bootstrap-min_dropup__2vLDm .bootstrap-min_dropdown-toggle__1nQ3V::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:0;border-right:.3em solid transparent;border-bottom:.3em solid;border-left:.3em solid transparent}.bootstrap-min_dropup__2vLDm .bootstrap-min_dropdown-toggle__1nQ3V:empty::after{margin-left:0}.bootstrap-min_dropright__2m7GB .bootstrap-min_dropdown-menu__1u94g{top:0;right:auto;left:100%;margin-top:0;margin-left:.125rem}.bootstrap-min_dropright__2m7GB .bootstrap-min_dropdown-toggle__1nQ3V::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:0;border-bottom:.3em solid transparent;border-left:.3em solid}.bootstrap-min_dropright__2m7GB .bootstrap-min_dropdown-toggle__1nQ3V:empty::after{margin-left:0}.bootstrap-min_dropright__2m7GB .bootstrap-min_dropdown-toggle__1nQ3V::after{vertical-align:0}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-menu__1u94g{top:0;right:100%;left:auto;margin-top:0;margin-right:.125rem}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle__1nQ3V::after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\"}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle__1nQ3V::after{display:none}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle__1nQ3V::before{display:inline-block;margin-right:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid transparent;border-right:.3em solid;border-bottom:.3em solid transparent}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle__1nQ3V:empty::after{margin-left:0}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle__1nQ3V::before{vertical-align:0}.bootstrap-min_dropdown-menu__1u94g[x-placement^=bottom],.bootstrap-min_dropdown-menu__1u94g[x-placement^=left],.bootstrap-min_dropdown-menu__1u94g[x-placement^=right],.bootstrap-min_dropdown-menu__1u94g[x-placement^=top]{right:auto;bottom:auto}.bootstrap-min_dropdown-divider__1U5Zc{height:0;margin:.5rem 0;overflow:hidden;border-top:1px solid #e9ecef}.bootstrap-min_dropdown-item__2YDDX{display:block;width:100%;padding:.25rem 1.5rem;clear:both;font-weight:400;color:#212529;text-align:inherit;white-space:nowrap;background-color:transparent;border:0}.bootstrap-min_dropdown-item__2YDDX:focus,.bootstrap-min_dropdown-item__2YDDX:hover{color:#16181b;text-decoration:none;background-color:#f8f9fa}.bootstrap-min_dropdown-item__2YDDX.bootstrap-min_active__tKiHW,.bootstrap-min_dropdown-item__2YDDX:active{color:#fff;text-decoration:none;background-color:#007bff}.bootstrap-min_dropdown-item__2YDDX.bootstrap-min_disabled__fTMRt,.bootstrap-min_dropdown-item__2YDDX:disabled{color:#6c757d;pointer-events:none;background-color:transparent}.bootstrap-min_dropdown-menu__1u94g.bootstrap-min_show__21bZy{display:block}.bootstrap-min_dropdown-header__1L0Zd{display:block;padding:.5rem 1.5rem;margin-bottom:0;font-size:.875rem;color:#6c757d;white-space:nowrap}.bootstrap-min_dropdown-item-text__58RV7{display:block;padding:.25rem 1.5rem;color:#212529}.bootstrap-min_btn-group__3RVt3,.bootstrap-min_btn-group-vertical__HGkYe{position:relative;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:hover,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:hover{z-index:1}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN.bootstrap-min_active__tKiHW,.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:active,.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:focus,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN.bootstrap-min_active__tKiHW,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:active,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:focus{z-index:1}.bootstrap-min_btn-toolbar__3SE_R{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_btn-toolbar__3SE_R .bootstrap-min_input-group__3jA_e{width:auto}.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn-group__3RVt3:not(:first-child),.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:not(:first-child){margin-left:-1px}.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn-group__3RVt3:not(:last-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:not(:last-child):not(.bootstrap-min_dropdown-toggle__1nQ3V){border-top-right-radius:0;border-bottom-right-radius:0}.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn-group__3RVt3:not(:first-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.bootstrap-min_dropdown-toggle-split__2m7Jq{padding-right:.5625rem;padding-left:.5625rem}.bootstrap-min_dropdown-toggle-split__2m7Jq::after,.bootstrap-min_dropright__2m7GB .bootstrap-min_dropdown-toggle-split__2m7Jq::after,.bootstrap-min_dropup__2vLDm .bootstrap-min_dropdown-toggle-split__2m7Jq::after{margin-left:0}.bootstrap-min_dropleft__2Od7v .bootstrap-min_dropdown-toggle-split__2m7Jq::before{margin-right:0}.bootstrap-min_btn-group-sm__yebtv>.bootstrap-min_btn__33rIN+.bootstrap-min_dropdown-toggle-split__2m7Jq,.bootstrap-min_btn-sm__3Jksh+.bootstrap-min_dropdown-toggle-split__2m7Jq{padding-right:.375rem;padding-left:.375rem}.bootstrap-min_btn-group-lg__1whjW>.bootstrap-min_btn__33rIN+.bootstrap-min_dropdown-toggle-split__2m7Jq,.bootstrap-min_btn-lg__1NEsE+.bootstrap-min_dropdown-toggle-split__2m7Jq{padding-right:.75rem;padding-left:.75rem}.bootstrap-min_btn-group-vertical__HGkYe{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn-group__3RVt3{width:100%}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn-group__3RVt3:not(:first-child),.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:not(:first-child){margin-top:-1px}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn-group__3RVt3:not(:last-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:not(:last-child):not(.bootstrap-min_dropdown-toggle__1nQ3V){border-bottom-right-radius:0;border-bottom-left-radius:0}.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn-group__3RVt3:not(:first-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group-vertical__HGkYe>.bootstrap-min_btn__33rIN:not(:first-child){border-top-left-radius:0;border-top-right-radius:0}.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn__33rIN,.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN{margin-bottom:0}.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn__33rIN input[type=checkbox],.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn__33rIN input[type=radio],.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN input[type=checkbox],.bootstrap-min_btn-group-toggle__JJedm>.bootstrap-min_btn-group__3RVt3>.bootstrap-min_btn__33rIN input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.bootstrap-min_input-group__3jA_e{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:stretch;align-items:stretch;width:100%}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control-plaintext__3Vm1h{position:relative;-ms-flex:1 1 0%;flex:1 1 0%;min-width:0;margin-bottom:0}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0+.bootstrap-min_custom-file___5Bw0,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0+.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0+.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb+.bootstrap-min_custom-file___5Bw0,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb+.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb+.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP+.bootstrap-min_custom-file___5Bw0,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP+.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP+.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control-plaintext__3Vm1h+.bootstrap-min_custom-file___5Bw0,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control-plaintext__3Vm1h+.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control-plaintext__3Vm1h+.bootstrap-min_form-control__fANnP{margin-left:-1px}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0 .bootstrap-min_custom-file-input__36AJ8:focus~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb:focus,.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP:focus{z-index:3}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0 .bootstrap-min_custom-file-input__36AJ8:focus{z-index:4}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb:not(:last-child),.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-select__14GRb:not(:first-child),.bootstrap-min_input-group__3jA_e>.bootstrap-min_form-control__fANnP:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0:not(:last-child) .bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0:not(:last-child) .bootstrap-min_custom-file-label__2PmAt::after{border-top-right-radius:0;border-bottom-right-radius:0}.bootstrap-min_input-group__3jA_e>.bootstrap-min_custom-file___5Bw0:not(:first-child) .bootstrap-min_custom-file-label__2PmAt{border-top-left-radius:0;border-bottom-left-radius:0}.bootstrap-min_input-group-append__1O8Y5,.bootstrap-min_input-group-prepend__1yylP{display:-ms-flexbox;display:flex}.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_btn__33rIN,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_btn__33rIN{position:relative;z-index:2}.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_btn__33rIN:focus,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_btn__33rIN:focus{z-index:3}.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_btn__33rIN+.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_btn__33rIN+.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_input-group-text__eKdwB+.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-append__1O8Y5 .bootstrap-min_input-group-text__eKdwB+.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_btn__33rIN+.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_btn__33rIN+.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_input-group-text__eKdwB+.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-prepend__1yylP .bootstrap-min_input-group-text__eKdwB+.bootstrap-min_input-group-text__eKdwB{margin-left:-1px}.bootstrap-min_input-group-prepend__1yylP{margin-right:-1px}.bootstrap-min_input-group-append__1O8Y5{margin-left:-1px}.bootstrap-min_input-group-text__eKdwB{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.375rem .75rem;margin-bottom:0;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;text-align:center;white-space:nowrap;background-color:#e9ecef;border:1px solid #ced4da;border-radius:.25rem}.bootstrap-min_input-group-text__eKdwB input[type=checkbox],.bootstrap-min_input-group-text__eKdwB input[type=radio]{margin-top:0}.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_form-control__fANnP:not(textarea){height:calc(1.5em + 1rem + 2px)}.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_input-group-text__eKdwB{padding:.5rem 1rem;font-size:1.25rem;line-height:1.5;border-radius:.3rem}.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_form-control__fANnP:not(textarea){height:calc(1.5em + .5rem + 2px)}.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_form-control__fANnP,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_input-group-text__eKdwB{padding:.25rem .5rem;font-size:.875rem;line-height:1.5;border-radius:.2rem}.bootstrap-min_input-group-lg__3ts2N>.bootstrap-min_custom-select__14GRb,.bootstrap-min_input-group-sm__1YLWo>.bootstrap-min_custom-select__14GRb{padding-right:1.75rem}.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5:last-child>.bootstrap-min_btn__33rIN:not(:last-child):not(.bootstrap-min_dropdown-toggle__1nQ3V),.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5:last-child>.bootstrap-min_input-group-text__eKdwB:not(:last-child),.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5:not(:last-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5:not(:last-child)>.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP>.bootstrap-min_input-group-text__eKdwB{border-top-right-radius:0;border-bottom-right-radius:0}.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-append__1O8Y5>.bootstrap-min_input-group-text__eKdwB,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP:first-child>.bootstrap-min_btn__33rIN:not(:first-child),.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP:first-child>.bootstrap-min_input-group-text__eKdwB:not(:first-child),.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP:not(:first-child)>.bootstrap-min_btn__33rIN,.bootstrap-min_input-group__3jA_e>.bootstrap-min_input-group-prepend__1yylP:not(:first-child)>.bootstrap-min_input-group-text__eKdwB{border-top-left-radius:0;border-bottom-left-radius:0}.bootstrap-min_custom-control__1tp0t{position:relative;display:block;min-height:1.5rem;padding-left:1.5rem}.bootstrap-min_custom-control-inline__2cZ13{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}.bootstrap-min_custom-control-input__j1ZQf{position:absolute;left:0;z-index:-1;width:1rem;height:1.25rem;opacity:0}.bootstrap-min_custom-control-input__j1ZQf:checked~.bootstrap-min_custom-control-label__fKECc::before{color:#fff;border-color:#007bff;background-color:#007bff}.bootstrap-min_custom-control-input__j1ZQf:focus~.bootstrap-min_custom-control-label__fKECc::before{box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-control-input__j1ZQf:focus:not(:checked)~.bootstrap-min_custom-control-label__fKECc::before{border-color:#80bdff}.bootstrap-min_custom-control-input__j1ZQf:not(:disabled):active~.bootstrap-min_custom-control-label__fKECc::before{color:#fff;background-color:#b3d7ff;border-color:#b3d7ff}.bootstrap-min_custom-control-input__j1ZQf:disabled~.bootstrap-min_custom-control-label__fKECc,.bootstrap-min_custom-control-input__j1ZQf[disabled]~.bootstrap-min_custom-control-label__fKECc{color:#6c757d}.bootstrap-min_custom-control-input__j1ZQf:disabled~.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_custom-control-input__j1ZQf[disabled]~.bootstrap-min_custom-control-label__fKECc::before{background-color:#e9ecef}.bootstrap-min_custom-control-label__fKECc{position:relative;margin-bottom:0;vertical-align:top}.bootstrap-min_custom-control-label__fKECc::before{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;pointer-events:none;content:\"\";background-color:#fff;border:#adb5bd solid 1px}.bootstrap-min_custom-control-label__fKECc::after{position:absolute;top:.25rem;left:-1.5rem;display:block;width:1rem;height:1rem;content:\"\";background:no-repeat 50%/50% 50%}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-label__fKECc::before{border-radius:.25rem}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-input__j1ZQf:checked~.bootstrap-min_custom-control-label__fKECc::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-input__j1ZQf:indeterminate~.bootstrap-min_custom-control-label__fKECc::before{border-color:#007bff;background-color:#007bff}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-input__j1ZQf:indeterminate~.bootstrap-min_custom-control-label__fKECc::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-input__j1ZQf:disabled:checked~.bootstrap-min_custom-control-label__fKECc::before{background-color:rgba(0,123,255,.5)}.bootstrap-min_custom-checkbox__2KOad .bootstrap-min_custom-control-input__j1ZQf:disabled:indeterminate~.bootstrap-min_custom-control-label__fKECc::before{background-color:rgba(0,123,255,.5)}.bootstrap-min_custom-radio__2JbKQ .bootstrap-min_custom-control-label__fKECc::before{border-radius:50%}.bootstrap-min_custom-radio__2JbKQ .bootstrap-min_custom-control-input__j1ZQf:checked~.bootstrap-min_custom-control-label__fKECc::after{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")}.bootstrap-min_custom-radio__2JbKQ .bootstrap-min_custom-control-input__j1ZQf:disabled:checked~.bootstrap-min_custom-control-label__fKECc::before{background-color:rgba(0,123,255,.5)}.bootstrap-min_custom-switch__3anO_{padding-left:2.25rem}.bootstrap-min_custom-switch__3anO_ .bootstrap-min_custom-control-label__fKECc::before{left:-2.25rem;width:1.75rem;pointer-events:all;border-radius:.5rem}.bootstrap-min_custom-switch__3anO_ .bootstrap-min_custom-control-label__fKECc::after{top:calc(.25rem + 2px);left:calc(-2.25rem + 2px);width:calc(1rem - 4px);height:calc(1rem - 4px);background-color:#adb5bd;border-radius:.5rem;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:transform .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-transform .15s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_custom-switch__3anO_ .bootstrap-min_custom-control-label__fKECc::after{transition:none}}.bootstrap-min_custom-switch__3anO_ .bootstrap-min_custom-control-input__j1ZQf:checked~.bootstrap-min_custom-control-label__fKECc::after{background-color:#fff;-webkit-transform:translateX(.75rem);transform:translateX(.75rem)}.bootstrap-min_custom-switch__3anO_ .bootstrap-min_custom-control-input__j1ZQf:disabled:checked~.bootstrap-min_custom-control-label__fKECc::before{background-color:rgba(0,123,255,.5)}.bootstrap-min_custom-select__14GRb{display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);padding:.375rem 1.75rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;vertical-align:middle;background:#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right .75rem center/8px 10px;border:1px solid #ced4da;border-radius:.25rem;-webkit-appearance:none;-moz-appearance:none;appearance:none}.bootstrap-min_custom-select__14GRb:focus{border-color:#80bdff;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-select__14GRb:focus::-ms-value{color:#495057;background-color:#fff}.bootstrap-min_custom-select__14GRb[multiple],.bootstrap-min_custom-select__14GRb[size]:not([size=\"1\"]){height:auto;padding-right:.75rem;background-image:none}.bootstrap-min_custom-select__14GRb:disabled{color:#6c757d;background-color:#e9ecef}.bootstrap-min_custom-select__14GRb::-ms-expand{display:none}.bootstrap-min_custom-select__14GRb:-moz-focusring{color:transparent;text-shadow:0 0 0 #495057}.bootstrap-min_custom-select-sm__2m6aP{height:calc(1.5em + .5rem + 2px);padding-top:.25rem;padding-bottom:.25rem;padding-left:.5rem;font-size:.875rem}.bootstrap-min_custom-select-lg__1Zlsp{height:calc(1.5em + 1rem + 2px);padding-top:.5rem;padding-bottom:.5rem;padding-left:1rem;font-size:1.25rem}.bootstrap-min_custom-file___5Bw0{position:relative;display:inline-block;width:100%;height:calc(1.5em + .75rem + 2px);margin-bottom:0}.bootstrap-min_custom-file-input__36AJ8{position:relative;z-index:2;width:100%;height:calc(1.5em + .75rem + 2px);margin:0;opacity:0}.bootstrap-min_custom-file-input__36AJ8:focus~.bootstrap-min_custom-file-label__2PmAt{border-color:#80bdff;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-file-input__36AJ8:disabled~.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_custom-file-input__36AJ8[disabled]~.bootstrap-min_custom-file-label__2PmAt{background-color:#e9ecef}.bootstrap-min_custom-file-input__36AJ8:lang(en)~.bootstrap-min_custom-file-label__2PmAt::after{content:\"Browse\"}.bootstrap-min_custom-file-input__36AJ8~.bootstrap-min_custom-file-label__2PmAt[data-browse]::after{content:attr(data-browse)}.bootstrap-min_custom-file-label__2PmAt{position:absolute;top:0;right:0;left:0;z-index:1;height:calc(1.5em + .75rem + 2px);padding:.375rem .75rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;border:1px solid #ced4da;border-radius:.25rem}.bootstrap-min_custom-file-label__2PmAt::after{position:absolute;top:0;right:0;bottom:0;z-index:3;display:block;height:calc(1.5em + .75rem);padding:.375rem .75rem;line-height:1.5;color:#495057;content:\"Browse\";background-color:#e9ecef;border-left:inherit;border-radius:0 .25rem .25rem 0}.bootstrap-min_custom-range__Qwkss{width:100%;height:1.4rem;padding:0;background-color:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none}.bootstrap-min_custom-range__Qwkss:focus{outline:0}.bootstrap-min_custom-range__Qwkss:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-range__Qwkss:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-range__Qwkss:focus::-ms-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_custom-range__Qwkss::-moz-focus-outer{border:0}.bootstrap-min_custom-range__Qwkss::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-.25rem;background-color:#007bff;border:0;border-radius:1rem;-webkit-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-webkit-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.bootstrap-min_custom-range__Qwkss::-webkit-slider-thumb{-webkit-transition:none;transition:none}}.bootstrap-min_custom-range__Qwkss::-webkit-slider-thumb:active{background-color:#b3d7ff}.bootstrap-min_custom-range__Qwkss::-webkit-slider-runnable-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.bootstrap-min_custom-range__Qwkss::-moz-range-thumb{width:1rem;height:1rem;background-color:#007bff;border:0;border-radius:1rem;-moz-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;-moz-appearance:none;appearance:none}@media (prefers-reduced-motion:reduce){.bootstrap-min_custom-range__Qwkss::-moz-range-thumb{-moz-transition:none;transition:none}}.bootstrap-min_custom-range__Qwkss::-moz-range-thumb:active{background-color:#b3d7ff}.bootstrap-min_custom-range__Qwkss::-moz-range-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:#dee2e6;border-color:transparent;border-radius:1rem}.bootstrap-min_custom-range__Qwkss::-ms-thumb{width:1rem;height:1rem;margin-top:0;margin-right:.2rem;margin-left:.2rem;background-color:#007bff;border:0;border-radius:1rem;-ms-transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;appearance:none}@media (prefers-reduced-motion:reduce){.bootstrap-min_custom-range__Qwkss::-ms-thumb{-ms-transition:none;transition:none}}.bootstrap-min_custom-range__Qwkss::-ms-thumb:active{background-color:#b3d7ff}.bootstrap-min_custom-range__Qwkss::-ms-track{width:100%;height:.5rem;color:transparent;cursor:pointer;background-color:transparent;border-color:transparent;border-width:.5rem}.bootstrap-min_custom-range__Qwkss::-ms-fill-lower{background-color:#dee2e6;border-radius:1rem}.bootstrap-min_custom-range__Qwkss::-ms-fill-upper{margin-right:15px;background-color:#dee2e6;border-radius:1rem}.bootstrap-min_custom-range__Qwkss:disabled::-webkit-slider-thumb{background-color:#adb5bd}.bootstrap-min_custom-range__Qwkss:disabled::-webkit-slider-runnable-track{cursor:default}.bootstrap-min_custom-range__Qwkss:disabled::-moz-range-thumb{background-color:#adb5bd}.bootstrap-min_custom-range__Qwkss:disabled::-moz-range-track{cursor:default}.bootstrap-min_custom-range__Qwkss:disabled::-ms-thumb{background-color:#adb5bd}.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_custom-select__14GRb{transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_custom-control-label__fKECc::before,.bootstrap-min_custom-file-label__2PmAt,.bootstrap-min_custom-select__14GRb{transition:none}}.bootstrap-min_nav__1KQTZ{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.bootstrap-min_nav-link__3iORz{display:block;padding:.5rem 1rem}.bootstrap-min_nav-link__3iORz:focus,.bootstrap-min_nav-link__3iORz:hover{text-decoration:none}.bootstrap-min_nav-link__3iORz.bootstrap-min_disabled__fTMRt{color:#6c757d;pointer-events:none;cursor:default}.bootstrap-min_nav-tabs__1DJRQ{border-bottom:1px solid #dee2e6}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-item__1G8h7{margin-bottom:-1px}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-link__3iORz{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-link__3iORz:focus,.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-link__3iORz:hover{border-color:#e9ecef #e9ecef #dee2e6}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-link__3iORz.bootstrap-min_disabled__fTMRt{color:#6c757d;background-color:transparent;border-color:transparent}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-item__1G8h7.bootstrap-min_show__21bZy .bootstrap-min_nav-link__3iORz,.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_nav-link__3iORz.bootstrap-min_active__tKiHW{color:#495057;background-color:#fff;border-color:#dee2e6 #dee2e6 #fff}.bootstrap-min_nav-tabs__1DJRQ .bootstrap-min_dropdown-menu__1u94g{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.bootstrap-min_nav-pills__1ffn9 .bootstrap-min_nav-link__3iORz{border-radius:.25rem}.bootstrap-min_nav-pills__1ffn9 .bootstrap-min_nav-link__3iORz.bootstrap-min_active__tKiHW,.bootstrap-min_nav-pills__1ffn9 .bootstrap-min_show__21bZy>.bootstrap-min_nav-link__3iORz{color:#fff;background-color:#007bff}.bootstrap-min_nav-fill__3Ger5 .bootstrap-min_nav-item__1G8h7{-ms-flex:1 1 auto;flex:1 1 auto;text-align:center}.bootstrap-min_nav-justified__1auPN .bootstrap-min_nav-item__1G8h7{-ms-flex-preferred-size:0;flex-basis:0;-ms-flex-positive:1;flex-grow:1;text-align:center}.bootstrap-min_tab-content__3y46z>.bootstrap-min_tab-pane__2dZcs{display:none}.bootstrap-min_tab-content__3y46z>.bootstrap-min_active__tKiHW{display:block}.bootstrap-min_navbar__3LmOW{position:relative;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;padding:.5rem 1rem}.bootstrap-min_navbar__3LmOW .bootstrap-min_container__3i4Ca,.bootstrap-min_navbar__3LmOW .bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar__3LmOW .bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar__3LmOW .bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar__3LmOW .bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar__3LmOW .bootstrap-min_container-xl__2wVN4{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.bootstrap-min_navbar-brand__3b-gG{display:inline-block;padding-top:.3125rem;padding-bottom:.3125rem;margin-right:1rem;font-size:1.25rem;line-height:inherit;white-space:nowrap}.bootstrap-min_navbar-brand__3b-gG:focus,.bootstrap-min_navbar-brand__3b-gG:hover{text-decoration:none}.bootstrap-min_navbar-nav__1QAGq{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0;list-style:none}.bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:0;padding-left:0}.bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:static;float:none}.bootstrap-min_navbar-text__1YpP7{display:inline-block;padding-top:.5rem;padding-bottom:.5rem}.bootstrap-min_navbar-collapse__1jtm0{-ms-flex-preferred-size:100%;flex-basis:100%;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center}.bootstrap-min_navbar-toggler__DLkkw{padding:.25rem .75rem;font-size:1.25rem;line-height:1;background-color:transparent;border:1px solid transparent;border-radius:.25rem}.bootstrap-min_navbar-toggler__DLkkw:focus,.bootstrap-min_navbar-toggler__DLkkw:hover{text-decoration:none}.bootstrap-min_navbar-toggler-icon__2r4bQ{display:inline-block;width:1.5em;height:1.5em;vertical-align:middle;content:\"\";background:no-repeat center center;background-size:100% 100%}@media (max-width:575.98px){.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-xl__2wVN4{padding-right:0;padding-left:0}}@media (min-width:576px){.bootstrap-min_navbar-expand-sm__j4DXU{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_navbar-expand-sm__j4DXU .bootstrap-min_navbar-nav__1QAGq{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_navbar-expand-sm__j4DXU .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:absolute}.bootstrap-min_navbar-expand-sm__j4DXU .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:.5rem;padding-left:.5rem}.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-sm__j4DXU>.bootstrap-min_container-xl__2wVN4{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bootstrap-min_navbar-expand-sm__j4DXU .bootstrap-min_navbar-collapse__1jtm0{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.bootstrap-min_navbar-expand-sm__j4DXU .bootstrap-min_navbar-toggler__DLkkw{display:none}}@media (max-width:767.98px){.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-xl__2wVN4{padding-right:0;padding-left:0}}@media (min-width:768px){.bootstrap-min_navbar-expand-md__3bbmV{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_navbar-expand-md__3bbmV .bootstrap-min_navbar-nav__1QAGq{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_navbar-expand-md__3bbmV .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:absolute}.bootstrap-min_navbar-expand-md__3bbmV .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:.5rem;padding-left:.5rem}.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-md__3bbmV>.bootstrap-min_container-xl__2wVN4{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bootstrap-min_navbar-expand-md__3bbmV .bootstrap-min_navbar-collapse__1jtm0{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.bootstrap-min_navbar-expand-md__3bbmV .bootstrap-min_navbar-toggler__DLkkw{display:none}}@media (max-width:991.98px){.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-xl__2wVN4{padding-right:0;padding-left:0}}@media (min-width:992px){.bootstrap-min_navbar-expand-lg__2kfZt{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_navbar-expand-lg__2kfZt .bootstrap-min_navbar-nav__1QAGq{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_navbar-expand-lg__2kfZt .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:absolute}.bootstrap-min_navbar-expand-lg__2kfZt .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:.5rem;padding-left:.5rem}.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-lg__2kfZt>.bootstrap-min_container-xl__2wVN4{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bootstrap-min_navbar-expand-lg__2kfZt .bootstrap-min_navbar-collapse__1jtm0{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.bootstrap-min_navbar-expand-lg__2kfZt .bootstrap-min_navbar-toggler__DLkkw{display:none}}@media (max-width:1199.98px){.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-xl__2wVN4{padding-right:0;padding-left:0}}@media (min-width:1200px){.bootstrap-min_navbar-expand-xl__8Tsm5{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_navbar-expand-xl__8Tsm5 .bootstrap-min_navbar-nav__1QAGq{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_navbar-expand-xl__8Tsm5 .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:absolute}.bootstrap-min_navbar-expand-xl__8Tsm5 .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:.5rem;padding-left:.5rem}.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand-xl__8Tsm5>.bootstrap-min_container-xl__2wVN4{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bootstrap-min_navbar-expand-xl__8Tsm5 .bootstrap-min_navbar-collapse__1jtm0{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.bootstrap-min_navbar-expand-xl__8Tsm5 .bootstrap-min_navbar-toggler__DLkkw{display:none}}.bootstrap-min_navbar-expand__1ABOo{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-pack:start;justify-content:flex-start}.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-xl__2wVN4{padding-right:0;padding-left:0}.bootstrap-min_navbar-expand__1ABOo .bootstrap-min_navbar-nav__1QAGq{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_navbar-expand__1ABOo .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_dropdown-menu__1u94g{position:absolute}.bootstrap-min_navbar-expand__1ABOo .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{padding-right:.5rem;padding-left:.5rem}.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container__3i4Ca,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-fluid__Jx8Kl,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-lg__2yBBQ,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-md__kncAJ,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-sm__tKUII,.bootstrap-min_navbar-expand__1ABOo>.bootstrap-min_container-xl__2wVN4{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.bootstrap-min_navbar-expand__1ABOo .bootstrap-min_navbar-collapse__1jtm0{display:-ms-flexbox!important;display:flex!important;-ms-flex-preferred-size:auto;flex-basis:auto}.bootstrap-min_navbar-expand__1ABOo .bootstrap-min_navbar-toggler__DLkkw{display:none}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-brand__3b-gG{color:rgba(0,0,0,.9)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-brand__3b-gG:focus,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-brand__3b-gG:hover{color:rgba(0,0,0,.9)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{color:rgba(0,0,0,.5)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz:focus,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz:hover{color:rgba(0,0,0,.7)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_disabled__fTMRt{color:rgba(0,0,0,.3)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_active__tKiHW>.bootstrap-min_nav-link__3iORz,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_active__tKiHW,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_show__21bZy,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_show__21bZy>.bootstrap-min_nav-link__3iORz{color:rgba(0,0,0,.9)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-toggler__DLkkw{color:rgba(0,0,0,.5);border-color:rgba(0,0,0,.1)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-toggler-icon__2r4bQ{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(0, 0, 0, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-text__1YpP7{color:rgba(0,0,0,.5)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-text__1YpP7 a{color:rgba(0,0,0,.9)}.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-text__1YpP7 a:focus,.bootstrap-min_navbar-light__2VTxL .bootstrap-min_navbar-text__1YpP7 a:hover{color:rgba(0,0,0,.9)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-brand__3b-gG{color:#fff}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-brand__3b-gG:focus,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-brand__3b-gG:hover{color:#fff}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz{color:rgba(255,255,255,.5)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz:focus,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz:hover{color:rgba(255,255,255,.75)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_disabled__fTMRt{color:rgba(255,255,255,.25)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_active__tKiHW>.bootstrap-min_nav-link__3iORz,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_active__tKiHW,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_nav-link__3iORz.bootstrap-min_show__21bZy,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-nav__1QAGq .bootstrap-min_show__21bZy>.bootstrap-min_nav-link__3iORz{color:#fff}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-toggler__DLkkw{color:rgba(255,255,255,.5);border-color:rgba(255,255,255,.1)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-toggler-icon__2r4bQ{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 0.5)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-text__1YpP7{color:rgba(255,255,255,.5)}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-text__1YpP7 a{color:#fff}.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-text__1YpP7 a:focus,.bootstrap-min_navbar-dark__2kzdG .bootstrap-min_navbar-text__1YpP7 a:hover{color:#fff}.bootstrap-min_card__1W6lu{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.bootstrap-min_card__1W6lu>hr{margin-right:0;margin-left:0}.bootstrap-min_card__1W6lu>.bootstrap-min_list-group__2z24x:first-child .bootstrap-min_list-group-item__fxIKy:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.bootstrap-min_card__1W6lu>.bootstrap-min_list-group__2z24x:last-child .bootstrap-min_list-group-item__fxIKy:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.bootstrap-min_card-body__OSqJu{-ms-flex:1 1 auto;flex:1 1 auto;min-height:1px;padding:1.25rem}.bootstrap-min_card-title__x9kqU{margin-bottom:.75rem}.bootstrap-min_card-subtitle__2HQjg{margin-top:-.375rem;margin-bottom:0}.bootstrap-min_card-text__BPqCR:last-child{margin-bottom:0}.bootstrap-min_card-link__WliIv:hover{text-decoration:none}.bootstrap-min_card-link__WliIv+.bootstrap-min_card-link__WliIv{margin-left:1.25rem}.bootstrap-min_card-header__1mHyC{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.bootstrap-min_card-header__1mHyC:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.bootstrap-min_card-header__1mHyC+.bootstrap-min_list-group__2z24x .bootstrap-min_list-group-item__fxIKy:first-child{border-top:0}.bootstrap-min_card-footer__2xRSL{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.bootstrap-min_card-footer__2xRSL:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.bootstrap-min_card-header-tabs__NVwcZ{margin-right:-.625rem;margin-bottom:-.75rem;margin-left:-.625rem;border-bottom:0}.bootstrap-min_card-header-pills__15tG_{margin-right:-.625rem;margin-left:-.625rem}.bootstrap-min_card-img-overlay__3v-4X{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.bootstrap-min_card-img__259ep,.bootstrap-min_card-img-bottom__mi0ah,.bootstrap-min_card-img-top__12-LF{-ms-flex-negative:0;flex-shrink:0;width:100%}.bootstrap-min_card-img__259ep,.bootstrap-min_card-img-top__12-LF{border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.bootstrap-min_card-img__259ep,.bootstrap-min_card-img-bottom__mi0ah{border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.bootstrap-min_card-deck__3T7fK .bootstrap-min_card__1W6lu{margin-bottom:15px}@media (min-width:576px){.bootstrap-min_card-deck__3T7fK{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.bootstrap-min_card-deck__3T7fK .bootstrap-min_card__1W6lu{-ms-flex:1 0 0%;flex:1 0 0%;margin-right:15px;margin-bottom:0;margin-left:15px}}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu{margin-bottom:15px}@media (min-width:576px){.bootstrap-min_card-group__2xjxT{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu+.bootstrap-min_card__1W6lu{margin-left:0;border-left:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:last-child){border-top-right-radius:0;border-bottom-right-radius:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:last-child) .bootstrap-min_card-header__1mHyC,.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:last-child) .bootstrap-min_card-img-top__12-LF{border-top-right-radius:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:last-child) .bootstrap-min_card-footer__2xRSL,.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:last-child) .bootstrap-min_card-img-bottom__mi0ah{border-bottom-right-radius:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:first-child) .bootstrap-min_card-header__1mHyC,.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:first-child) .bootstrap-min_card-img-top__12-LF{border-top-left-radius:0}.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:first-child) .bootstrap-min_card-footer__2xRSL,.bootstrap-min_card-group__2xjxT>.bootstrap-min_card__1W6lu:not(:first-child) .bootstrap-min_card-img-bottom__mi0ah{border-bottom-left-radius:0}}.bootstrap-min_card-columns__E7sQX .bootstrap-min_card__1W6lu{margin-bottom:.75rem}@media (min-width:576px){.bootstrap-min_card-columns__E7sQX{-webkit-column-count:3;-moz-column-count:3;column-count:3;-webkit-column-gap:1.25rem;-moz-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.bootstrap-min_card-columns__E7sQX .bootstrap-min_card__1W6lu{display:inline-block;width:100%}}.bootstrap-min_accordion__2Hfd6>.bootstrap-min_card__1W6lu{overflow:hidden}.bootstrap-min_accordion__2Hfd6>.bootstrap-min_card__1W6lu:not(:last-of-type){border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.bootstrap-min_accordion__2Hfd6>.bootstrap-min_card__1W6lu:not(:first-of-type){border-top-left-radius:0;border-top-right-radius:0}.bootstrap-min_accordion__2Hfd6>.bootstrap-min_card__1W6lu>.bootstrap-min_card-header__1mHyC{border-radius:0;margin-bottom:-1px}.bootstrap-min_breadcrumb__3RoW_{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;padding:.75rem 1rem;margin-bottom:1rem;list-style:none;background-color:#e9ecef;border-radius:.25rem}.bootstrap-min_breadcrumb-item__19aZc+.bootstrap-min_breadcrumb-item__19aZc{padding-left:.5rem}.bootstrap-min_breadcrumb-item__19aZc+.bootstrap-min_breadcrumb-item__19aZc::before{display:inline-block;padding-right:.5rem;color:#6c757d;content:\"/\"}.bootstrap-min_breadcrumb-item__19aZc+.bootstrap-min_breadcrumb-item__19aZc:hover::before{text-decoration:underline}.bootstrap-min_breadcrumb-item__19aZc+.bootstrap-min_breadcrumb-item__19aZc:hover::before{text-decoration:none}.bootstrap-min_breadcrumb-item__19aZc.bootstrap-min_active__tKiHW{color:#6c757d}.bootstrap-min_pagination__3r29R{display:-ms-flexbox;display:flex;padding-left:0;list-style:none;border-radius:.25rem}.bootstrap-min_page-link__3lh7Q{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#007bff;background-color:#fff;border:1px solid #dee2e6}.bootstrap-min_page-link__3lh7Q:hover{z-index:2;color:#0056b3;text-decoration:none;background-color:#e9ecef;border-color:#dee2e6}.bootstrap-min_page-link__3lh7Q:focus{z-index:3;outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25)}.bootstrap-min_page-item__CYikG:first-child .bootstrap-min_page-link__3lh7Q{margin-left:0;border-top-left-radius:.25rem;border-bottom-left-radius:.25rem}.bootstrap-min_page-item__CYikG:last-child .bootstrap-min_page-link__3lh7Q{border-top-right-radius:.25rem;border-bottom-right-radius:.25rem}.bootstrap-min_page-item__CYikG.bootstrap-min_active__tKiHW .bootstrap-min_page-link__3lh7Q{z-index:3;color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_page-item__CYikG.bootstrap-min_disabled__fTMRt .bootstrap-min_page-link__3lh7Q{color:#6c757d;pointer-events:none;cursor:auto;background-color:#fff;border-color:#dee2e6}.bootstrap-min_pagination-lg__3X4yd .bootstrap-min_page-link__3lh7Q{padding:.75rem 1.5rem;font-size:1.25rem;line-height:1.5}.bootstrap-min_pagination-lg__3X4yd .bootstrap-min_page-item__CYikG:first-child .bootstrap-min_page-link__3lh7Q{border-top-left-radius:.3rem;border-bottom-left-radius:.3rem}.bootstrap-min_pagination-lg__3X4yd .bootstrap-min_page-item__CYikG:last-child .bootstrap-min_page-link__3lh7Q{border-top-right-radius:.3rem;border-bottom-right-radius:.3rem}.bootstrap-min_pagination-sm__Y_oRl .bootstrap-min_page-link__3lh7Q{padding:.25rem .5rem;font-size:.875rem;line-height:1.5}.bootstrap-min_pagination-sm__Y_oRl .bootstrap-min_page-item__CYikG:first-child .bootstrap-min_page-link__3lh7Q{border-top-left-radius:.2rem;border-bottom-left-radius:.2rem}.bootstrap-min_pagination-sm__Y_oRl .bootstrap-min_page-item__CYikG:last-child .bootstrap-min_page-link__3lh7Q{border-top-right-radius:.2rem;border-bottom-right-radius:.2rem}.bootstrap-min_badge__3pcZA{display:inline-block;padding:.25em .4em;font-size:75%;font-weight:700;line-height:1;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25rem;transition:color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_badge__3pcZA{transition:none}}a.bootstrap-min_badge__3pcZA:focus,a.bootstrap-min_badge__3pcZA:hover{text-decoration:none}.bootstrap-min_badge__3pcZA:empty{display:none}.bootstrap-min_btn__33rIN .bootstrap-min_badge__3pcZA{position:relative;top:-1px}.bootstrap-min_badge-pill__EPoYU{padding-right:.6em;padding-left:.6em;border-radius:10rem}.bootstrap-min_badge-primary__1AFI5{color:#fff;background-color:#007bff}a.bootstrap-min_badge-primary__1AFI5:focus,a.bootstrap-min_badge-primary__1AFI5:hover{color:#fff;background-color:#0062cc}a.bootstrap-min_badge-primary__1AFI5.bootstrap-min_focus__35glV,a.bootstrap-min_badge-primary__1AFI5:focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.5)}.bootstrap-min_badge-secondary__3ciN-{color:#fff;background-color:#6c757d}a.bootstrap-min_badge-secondary__3ciN-:focus,a.bootstrap-min_badge-secondary__3ciN-:hover{color:#fff;background-color:#545b62}a.bootstrap-min_badge-secondary__3ciN-.bootstrap-min_focus__35glV,a.bootstrap-min_badge-secondary__3ciN-:focus{outline:0;box-shadow:0 0 0 .2rem rgba(108,117,125,.5)}.bootstrap-min_badge-success__3vQvw{color:#fff;background-color:#28a745}a.bootstrap-min_badge-success__3vQvw:focus,a.bootstrap-min_badge-success__3vQvw:hover{color:#fff;background-color:#1e7e34}a.bootstrap-min_badge-success__3vQvw.bootstrap-min_focus__35glV,a.bootstrap-min_badge-success__3vQvw:focus{outline:0;box-shadow:0 0 0 .2rem rgba(40,167,69,.5)}.bootstrap-min_badge-info__2oNTf{color:#fff;background-color:#17a2b8}a.bootstrap-min_badge-info__2oNTf:focus,a.bootstrap-min_badge-info__2oNTf:hover{color:#fff;background-color:#117a8b}a.bootstrap-min_badge-info__2oNTf.bootstrap-min_focus__35glV,a.bootstrap-min_badge-info__2oNTf:focus{outline:0;box-shadow:0 0 0 .2rem rgba(23,162,184,.5)}.bootstrap-min_badge-warning__1J-wg{color:#212529;background-color:#ffc107}a.bootstrap-min_badge-warning__1J-wg:focus,a.bootstrap-min_badge-warning__1J-wg:hover{color:#212529;background-color:#d39e00}a.bootstrap-min_badge-warning__1J-wg.bootstrap-min_focus__35glV,a.bootstrap-min_badge-warning__1J-wg:focus{outline:0;box-shadow:0 0 0 .2rem rgba(255,193,7,.5)}.bootstrap-min_badge-danger__3aeia{color:#fff;background-color:#dc3545}a.bootstrap-min_badge-danger__3aeia:focus,a.bootstrap-min_badge-danger__3aeia:hover{color:#fff;background-color:#bd2130}a.bootstrap-min_badge-danger__3aeia.bootstrap-min_focus__35glV,a.bootstrap-min_badge-danger__3aeia:focus{outline:0;box-shadow:0 0 0 .2rem rgba(220,53,69,.5)}.bootstrap-min_badge-light__2Elso{color:#212529;background-color:#f8f9fa}a.bootstrap-min_badge-light__2Elso:focus,a.bootstrap-min_badge-light__2Elso:hover{color:#212529;background-color:#dae0e5}a.bootstrap-min_badge-light__2Elso.bootstrap-min_focus__35glV,a.bootstrap-min_badge-light__2Elso:focus{outline:0;box-shadow:0 0 0 .2rem rgba(248,249,250,.5)}.bootstrap-min_badge-dark__3D-UI{color:#fff;background-color:#343a40}a.bootstrap-min_badge-dark__3D-UI:focus,a.bootstrap-min_badge-dark__3D-UI:hover{color:#fff;background-color:#1d2124}a.bootstrap-min_badge-dark__3D-UI.bootstrap-min_focus__35glV,a.bootstrap-min_badge-dark__3D-UI:focus{outline:0;box-shadow:0 0 0 .2rem rgba(52,58,64,.5)}.bootstrap-min_jumbotron__2S1z9{padding:2rem 1rem;margin-bottom:2rem;background-color:#e9ecef;border-radius:.3rem}@media (min-width:576px){.bootstrap-min_jumbotron__2S1z9{padding:4rem 2rem}}.bootstrap-min_jumbotron-fluid__2yObt{padding-right:0;padding-left:0;border-radius:0}.bootstrap-min_alert__GSk2G{position:relative;padding:.75rem 1.25rem;margin-bottom:1rem;border:1px solid transparent;border-radius:.25rem}.bootstrap-min_alert-heading__1M4LW{color:inherit}.bootstrap-min_alert-link__2LKI0{font-weight:700}.bootstrap-min_alert-dismissible__19VOn{padding-right:4rem}.bootstrap-min_alert-dismissible__19VOn .bootstrap-min_close__2HFpO{position:absolute;top:0;right:0;padding:.75rem 1.25rem;color:inherit}.bootstrap-min_alert-primary__1Jqr7{color:#004085;background-color:#cce5ff;border-color:#b8daff}.bootstrap-min_alert-primary__1Jqr7 hr{border-top-color:#9fcdff}.bootstrap-min_alert-primary__1Jqr7 .bootstrap-min_alert-link__2LKI0{color:#002752}.bootstrap-min_alert-secondary__w5yJb{color:#383d41;background-color:#e2e3e5;border-color:#d6d8db}.bootstrap-min_alert-secondary__w5yJb hr{border-top-color:#c8cbcf}.bootstrap-min_alert-secondary__w5yJb .bootstrap-min_alert-link__2LKI0{color:#202326}.bootstrap-min_alert-success__2MpsS{color:#155724;background-color:#d4edda;border-color:#c3e6cb}.bootstrap-min_alert-success__2MpsS hr{border-top-color:#b1dfbb}.bootstrap-min_alert-success__2MpsS .bootstrap-min_alert-link__2LKI0{color:#0b2e13}.bootstrap-min_alert-info__29gK4{color:#0c5460;background-color:#d1ecf1;border-color:#bee5eb}.bootstrap-min_alert-info__29gK4 hr{border-top-color:#abdde5}.bootstrap-min_alert-info__29gK4 .bootstrap-min_alert-link__2LKI0{color:#062c33}.bootstrap-min_alert-warning__1fK7e{color:#856404;background-color:#fff3cd;border-color:#ffeeba}.bootstrap-min_alert-warning__1fK7e hr{border-top-color:#ffe8a1}.bootstrap-min_alert-warning__1fK7e .bootstrap-min_alert-link__2LKI0{color:#533f03}.bootstrap-min_alert-danger__1wh1S{color:#721c24;background-color:#f8d7da;border-color:#f5c6cb}.bootstrap-min_alert-danger__1wh1S hr{border-top-color:#f1b0b7}.bootstrap-min_alert-danger__1wh1S .bootstrap-min_alert-link__2LKI0{color:#491217}.bootstrap-min_alert-light__1xbPN{color:#818182;background-color:#fefefe;border-color:#fdfdfe}.bootstrap-min_alert-light__1xbPN hr{border-top-color:#ececf6}.bootstrap-min_alert-light__1xbPN .bootstrap-min_alert-link__2LKI0{color:#686868}.bootstrap-min_alert-dark__23eW0{color:#1b1e21;background-color:#d6d8d9;border-color:#c6c8ca}.bootstrap-min_alert-dark__23eW0 hr{border-top-color:#b9bbbe}.bootstrap-min_alert-dark__23eW0 .bootstrap-min_alert-link__2LKI0{color:#040505}@-webkit-keyframes bootstrap-min_progress-bar-stripes__23bHI{from{background-position:1rem 0}to{background-position:0 0}}@keyframes bootstrap-min_progress-bar-stripes__23bHI{from{background-position:1rem 0}to{background-position:0 0}}.bootstrap-min_progress__V1G4m{display:-ms-flexbox;display:flex;height:1rem;overflow:hidden;font-size:.75rem;background-color:#e9ecef;border-radius:.25rem}.bootstrap-min_progress-bar___HHv8{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;overflow:hidden;color:#fff;text-align:center;white-space:nowrap;background-color:#007bff;transition:width .6s ease}@media (prefers-reduced-motion:reduce){.bootstrap-min_progress-bar___HHv8{transition:none}}.bootstrap-min_progress-bar-striped__2Muim{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:1rem 1rem}.bootstrap-min_progress-bar-animated__128kx{-webkit-animation:bootstrap-min_progress-bar-stripes__23bHI 1s linear infinite;animation:bootstrap-min_progress-bar-stripes__23bHI 1s linear infinite}@media (prefers-reduced-motion:reduce){.bootstrap-min_progress-bar-animated__128kx{-webkit-animation:none;animation:none}}.bootstrap-min_media__1P6zp{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start}.bootstrap-min_media-body__2-cp2{-ms-flex:1;flex:1}.bootstrap-min_list-group__2z24x{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding-left:0;margin-bottom:0}.bootstrap-min_list-group-item-action__UJuCg{width:100%;color:#495057;text-align:inherit}.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-action__UJuCg:hover{z-index:1;color:#495057;text-decoration:none;background-color:#f8f9fa}.bootstrap-min_list-group-item-action__UJuCg:active{color:#212529;background-color:#e9ecef}.bootstrap-min_list-group-item__fxIKy{position:relative;display:block;padding:.75rem 1.25rem;background-color:#fff;border:1px solid rgba(0,0,0,.125)}.bootstrap-min_list-group-item__fxIKy:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.bootstrap-min_list-group-item__fxIKy:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.bootstrap-min_list-group-item__fxIKy.bootstrap-min_disabled__fTMRt,.bootstrap-min_list-group-item__fxIKy:disabled{color:#6c757d;pointer-events:none;background-color:#fff}.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{z-index:2;color:#fff;background-color:#007bff;border-color:#007bff}.bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:0}.bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:-1px;border-top-width:1px}.bootstrap-min_list-group-horizontal__VSJMZ{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_list-group-horizontal__VSJMZ .bootstrap-min_list-group-item__fxIKy:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.bootstrap-min_list-group-horizontal__VSJMZ .bootstrap-min_list-group-item__fxIKy:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.bootstrap-min_list-group-horizontal__VSJMZ .bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:0}.bootstrap-min_list-group-horizontal__VSJMZ .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:1px;border-left-width:0}.bootstrap-min_list-group-horizontal__VSJMZ .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-left:-1px;border-left-width:1px}@media (min-width:576px){.bootstrap-min_list-group-horizontal-sm__3RY8t{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_list-group-horizontal-sm__3RY8t .bootstrap-min_list-group-item__fxIKy:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.bootstrap-min_list-group-horizontal-sm__3RY8t .bootstrap-min_list-group-item__fxIKy:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.bootstrap-min_list-group-horizontal-sm__3RY8t .bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:0}.bootstrap-min_list-group-horizontal-sm__3RY8t .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:1px;border-left-width:0}.bootstrap-min_list-group-horizontal-sm__3RY8t .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-left:-1px;border-left-width:1px}}@media (min-width:768px){.bootstrap-min_list-group-horizontal-md__buSDB{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_list-group-horizontal-md__buSDB .bootstrap-min_list-group-item__fxIKy:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.bootstrap-min_list-group-horizontal-md__buSDB .bootstrap-min_list-group-item__fxIKy:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.bootstrap-min_list-group-horizontal-md__buSDB .bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:0}.bootstrap-min_list-group-horizontal-md__buSDB .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:1px;border-left-width:0}.bootstrap-min_list-group-horizontal-md__buSDB .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-left:-1px;border-left-width:1px}}@media (min-width:992px){.bootstrap-min_list-group-horizontal-lg__3OMYb{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_list-group-horizontal-lg__3OMYb .bootstrap-min_list-group-item__fxIKy:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.bootstrap-min_list-group-horizontal-lg__3OMYb .bootstrap-min_list-group-item__fxIKy:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.bootstrap-min_list-group-horizontal-lg__3OMYb .bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:0}.bootstrap-min_list-group-horizontal-lg__3OMYb .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:1px;border-left-width:0}.bootstrap-min_list-group-horizontal-lg__3OMYb .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-left:-1px;border-left-width:1px}}@media (min-width:1200px){.bootstrap-min_list-group-horizontal-xl__2MZIl{-ms-flex-direction:row;flex-direction:row}.bootstrap-min_list-group-horizontal-xl__2MZIl .bootstrap-min_list-group-item__fxIKy:first-child{border-bottom-left-radius:.25rem;border-top-right-radius:0}.bootstrap-min_list-group-horizontal-xl__2MZIl .bootstrap-min_list-group-item__fxIKy:last-child{border-top-right-radius:.25rem;border-bottom-left-radius:0}.bootstrap-min_list-group-horizontal-xl__2MZIl .bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-top:0}.bootstrap-min_list-group-horizontal-xl__2MZIl .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy{border-top-width:1px;border-left-width:0}.bootstrap-min_list-group-horizontal-xl__2MZIl .bootstrap-min_list-group-item__fxIKy+.bootstrap-min_list-group-item__fxIKy.bootstrap-min_active__tKiHW{margin-left:-1px;border-left-width:1px}}.bootstrap-min_list-group-flush__29obn .bootstrap-min_list-group-item__fxIKy{border-right-width:0;border-left-width:0;border-radius:0}.bootstrap-min_list-group-flush__29obn .bootstrap-min_list-group-item__fxIKy:first-child{border-top-width:0}.bootstrap-min_list-group-flush__29obn:last-child .bootstrap-min_list-group-item__fxIKy:last-child{border-bottom-width:0}.bootstrap-min_list-group-item-primary__nEPIc{color:#004085;background-color:#b8daff}.bootstrap-min_list-group-item-primary__nEPIc.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-primary__nEPIc.bootstrap-min_list-group-item-action__UJuCg:hover{color:#004085;background-color:#9fcdff}.bootstrap-min_list-group-item-primary__nEPIc.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#004085;border-color:#004085}.bootstrap-min_list-group-item-secondary__2VKHU{color:#383d41;background-color:#d6d8db}.bootstrap-min_list-group-item-secondary__2VKHU.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-secondary__2VKHU.bootstrap-min_list-group-item-action__UJuCg:hover{color:#383d41;background-color:#c8cbcf}.bootstrap-min_list-group-item-secondary__2VKHU.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#383d41;border-color:#383d41}.bootstrap-min_list-group-item-success__18JZ0{color:#155724;background-color:#c3e6cb}.bootstrap-min_list-group-item-success__18JZ0.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-success__18JZ0.bootstrap-min_list-group-item-action__UJuCg:hover{color:#155724;background-color:#b1dfbb}.bootstrap-min_list-group-item-success__18JZ0.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#155724;border-color:#155724}.bootstrap-min_list-group-item-info__30jiO{color:#0c5460;background-color:#bee5eb}.bootstrap-min_list-group-item-info__30jiO.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-info__30jiO.bootstrap-min_list-group-item-action__UJuCg:hover{color:#0c5460;background-color:#abdde5}.bootstrap-min_list-group-item-info__30jiO.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#0c5460;border-color:#0c5460}.bootstrap-min_list-group-item-warning__3EfCM{color:#856404;background-color:#ffeeba}.bootstrap-min_list-group-item-warning__3EfCM.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-warning__3EfCM.bootstrap-min_list-group-item-action__UJuCg:hover{color:#856404;background-color:#ffe8a1}.bootstrap-min_list-group-item-warning__3EfCM.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#856404;border-color:#856404}.bootstrap-min_list-group-item-danger__3AWVv{color:#721c24;background-color:#f5c6cb}.bootstrap-min_list-group-item-danger__3AWVv.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-danger__3AWVv.bootstrap-min_list-group-item-action__UJuCg:hover{color:#721c24;background-color:#f1b0b7}.bootstrap-min_list-group-item-danger__3AWVv.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#721c24;border-color:#721c24}.bootstrap-min_list-group-item-light__1G--1{color:#818182;background-color:#fdfdfe}.bootstrap-min_list-group-item-light__1G--1.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-light__1G--1.bootstrap-min_list-group-item-action__UJuCg:hover{color:#818182;background-color:#ececf6}.bootstrap-min_list-group-item-light__1G--1.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#818182;border-color:#818182}.bootstrap-min_list-group-item-dark__34A8R{color:#1b1e21;background-color:#c6c8ca}.bootstrap-min_list-group-item-dark__34A8R.bootstrap-min_list-group-item-action__UJuCg:focus,.bootstrap-min_list-group-item-dark__34A8R.bootstrap-min_list-group-item-action__UJuCg:hover{color:#1b1e21;background-color:#b9bbbe}.bootstrap-min_list-group-item-dark__34A8R.bootstrap-min_list-group-item-action__UJuCg.bootstrap-min_active__tKiHW{color:#fff;background-color:#1b1e21;border-color:#1b1e21}.bootstrap-min_close__2HFpO{float:right;font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;opacity:.5}.bootstrap-min_close__2HFpO:hover{color:#000;text-decoration:none}.bootstrap-min_close__2HFpO:not(:disabled):not(.bootstrap-min_disabled__fTMRt):focus,.bootstrap-min_close__2HFpO:not(:disabled):not(.bootstrap-min_disabled__fTMRt):hover{opacity:.75}button.bootstrap-min_close__2HFpO{padding:0;background-color:transparent;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}a.bootstrap-min_close__2HFpO.bootstrap-min_disabled__fTMRt{pointer-events:none}.bootstrap-min_toast__3SN_E{max-width:350px;overflow:hidden;font-size:.875rem;background-color:rgba(255,255,255,.85);background-clip:padding-box;border:1px solid rgba(0,0,0,.1);box-shadow:0 .25rem .75rem rgba(0,0,0,.1);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);opacity:0;border-radius:.25rem}.bootstrap-min_toast__3SN_E:not(:last-child){margin-bottom:.75rem}.bootstrap-min_toast__3SN_E.bootstrap-min_showing__2U8hP{opacity:1}.bootstrap-min_toast__3SN_E.bootstrap-min_show__21bZy{display:block;opacity:1}.bootstrap-min_toast__3SN_E.bootstrap-min_hide__2WhOT{display:none}.bootstrap-min_toast-header__1lTHf{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:.25rem .75rem;color:#6c757d;background-color:rgba(255,255,255,.85);background-clip:padding-box;border-bottom:1px solid rgba(0,0,0,.05)}.bootstrap-min_toast-body__2ASHM{padding:.75rem}.bootstrap-min_modal-open__3XYl4{overflow:hidden}.bootstrap-min_modal-open__3XYl4 .bootstrap-min_modal__mFY3C{overflow-x:hidden;overflow-y:auto}.bootstrap-min_modal__mFY3C{position:fixed;top:0;left:0;z-index:1050;display:none;width:100%;height:100%;overflow:hidden;outline:0}.bootstrap-min_modal-dialog__-nZgb{position:relative;width:auto;margin:.5rem;pointer-events:none}.bootstrap-min_modal__mFY3C.bootstrap-min_fade__1rBDU .bootstrap-min_modal-dialog__-nZgb{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out,-webkit-transform .3s ease-out;-webkit-transform:translate(0,-50px);transform:translate(0,-50px)}@media (prefers-reduced-motion:reduce){.bootstrap-min_modal__mFY3C.bootstrap-min_fade__1rBDU .bootstrap-min_modal-dialog__-nZgb{transition:none}}.bootstrap-min_modal__mFY3C.bootstrap-min_show__21bZy .bootstrap-min_modal-dialog__-nZgb{-webkit-transform:none;transform:none}.bootstrap-min_modal__mFY3C.bootstrap-min_modal-static__2c183 .bootstrap-min_modal-dialog__-nZgb{-webkit-transform:scale(1.02);transform:scale(1.02)}.bootstrap-min_modal-dialog-scrollable__1E0aC{display:-ms-flexbox;display:flex;max-height:calc(100% - 1rem)}.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-content__35cuO{max-height:calc(100vh - 1rem);overflow:hidden}.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-footer__3C3H3,.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-header__3JiLK{-ms-flex-negative:0;flex-shrink:0}.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-body__2DLlt{overflow-y:auto}.bootstrap-min_modal-dialog-centered__2FJEK{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;min-height:calc(100% - 1rem)}.bootstrap-min_modal-dialog-centered__2FJEK::before{display:block;height:calc(100vh - 1rem);content:\"\"}.bootstrap-min_modal-dialog-centered__2FJEK.bootstrap-min_modal-dialog-scrollable__1E0aC{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.bootstrap-min_modal-dialog-centered__2FJEK.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-content__35cuO{max-height:none}.bootstrap-min_modal-dialog-centered__2FJEK.bootstrap-min_modal-dialog-scrollable__1E0aC::before{content:none}.bootstrap-min_modal-content__35cuO{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;pointer-events:auto;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem;outline:0}.bootstrap-min_modal-backdrop__3yf-q{position:fixed;top:0;left:0;z-index:1040;width:100vw;height:100vh;background-color:#000}.bootstrap-min_modal-backdrop__3yf-q.bootstrap-min_fade__1rBDU{opacity:0}.bootstrap-min_modal-backdrop__3yf-q.bootstrap-min_show__21bZy{opacity:.5}.bootstrap-min_modal-header__3JiLK{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between;padding:1rem 1rem;border-bottom:1px solid #dee2e6;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.bootstrap-min_modal-header__3JiLK .bootstrap-min_close__2HFpO{padding:1rem 1rem;margin:-1rem -1rem -1rem auto}.bootstrap-min_modal-title__12Qxl{margin-bottom:0;line-height:1.5}.bootstrap-min_modal-body__2DLlt{position:relative;-ms-flex:1 1 auto;flex:1 1 auto;padding:1rem}.bootstrap-min_modal-footer__3C3H3{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;padding:.75rem;border-top:1px solid #dee2e6;border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}.bootstrap-min_modal-footer__3C3H3>*{margin:.25rem}.bootstrap-min_modal-scrollbar-measure__3UbHX{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:576px){.bootstrap-min_modal-dialog__-nZgb{max-width:500px;margin:1.75rem auto}.bootstrap-min_modal-dialog-scrollable__1E0aC{max-height:calc(100% - 3.5rem)}.bootstrap-min_modal-dialog-scrollable__1E0aC .bootstrap-min_modal-content__35cuO{max-height:calc(100vh - 3.5rem)}.bootstrap-min_modal-dialog-centered__2FJEK{min-height:calc(100% - 3.5rem)}.bootstrap-min_modal-dialog-centered__2FJEK::before{height:calc(100vh - 3.5rem)}.bootstrap-min_modal-sm__2YqWF{max-width:300px}}@media (min-width:992px){.bootstrap-min_modal-lg__2TdQn,.bootstrap-min_modal-xl__1QWjR{max-width:800px}}@media (min-width:1200px){.bootstrap-min_modal-xl__1QWjR{max-width:1140px}}.bootstrap-min_tooltip__3yKeV{position:absolute;z-index:1070;display:block;margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;opacity:0}.bootstrap-min_tooltip__3yKeV.bootstrap-min_show__21bZy{opacity:.9}.bootstrap-min_tooltip__3yKeV .bootstrap-min_arrow__2j1Ku{position:absolute;display:block;width:.8rem;height:.4rem}.bootstrap-min_tooltip__3yKeV .bootstrap-min_arrow__2j1Ku::before{position:absolute;content:\"\";border-color:transparent;border-style:solid}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=top],.bootstrap-min_bs-tooltip-top__2vFUG{padding:.4rem 0}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=top] .bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-tooltip-top__2vFUG .bootstrap-min_arrow__2j1Ku{bottom:0}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=top] .bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-tooltip-top__2vFUG .bootstrap-min_arrow__2j1Ku::before{top:0;border-width:.4rem .4rem 0;border-top-color:#000}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=right],.bootstrap-min_bs-tooltip-right__2SfLr{padding:0 .4rem}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=right] .bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-tooltip-right__2SfLr .bootstrap-min_arrow__2j1Ku{left:0;width:.4rem;height:.8rem}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=right] .bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-tooltip-right__2SfLr .bootstrap-min_arrow__2j1Ku::before{right:0;border-width:.4rem .4rem .4rem 0;border-right-color:#000}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=bottom],.bootstrap-min_bs-tooltip-bottom__ngWVn{padding:.4rem 0}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=bottom] .bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-tooltip-bottom__ngWVn .bootstrap-min_arrow__2j1Ku{top:0}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=bottom] .bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-tooltip-bottom__ngWVn .bootstrap-min_arrow__2j1Ku::before{bottom:0;border-width:0 .4rem .4rem;border-bottom-color:#000}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=left],.bootstrap-min_bs-tooltip-left__2nb6L{padding:0 .4rem}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=left] .bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-tooltip-left__2nb6L .bootstrap-min_arrow__2j1Ku{right:0;width:.4rem;height:.8rem}.bootstrap-min_bs-tooltip-auto__3O7Yp[x-placement^=left] .bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-tooltip-left__2nb6L .bootstrap-min_arrow__2j1Ku::before{left:0;border-width:.4rem 0 .4rem .4rem;border-left-color:#000}.bootstrap-min_tooltip-inner__2gLo2{max-width:200px;padding:.25rem .5rem;color:#fff;text-align:center;background-color:#000;border-radius:.25rem}.bootstrap-min_popover__3vSiu{position:absolute;top:0;left:0;z-index:1060;display:block;max-width:276px;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";font-style:normal;font-weight:400;line-height:1.5;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;white-space:normal;line-break:auto;font-size:.875rem;word-wrap:break-word;background-color:#fff;background-clip:padding-box;border:1px solid rgba(0,0,0,.2);border-radius:.3rem}.bootstrap-min_popover__3vSiu .bootstrap-min_arrow__2j1Ku{position:absolute;display:block;width:1rem;height:.5rem;margin:0 .3rem}.bootstrap-min_popover__3vSiu .bootstrap-min_arrow__2j1Ku::after,.bootstrap-min_popover__3vSiu .bootstrap-min_arrow__2j1Ku::before{position:absolute;display:block;content:\"\";border-color:transparent;border-style:solid}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=top],.bootstrap-min_bs-popover-top__2aCBB{margin-bottom:.5rem}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=top]>.bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-popover-top__2aCBB>.bootstrap-min_arrow__2j1Ku{bottom:calc(-.5rem - 1px)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=top]>.bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-popover-top__2aCBB>.bootstrap-min_arrow__2j1Ku::before{bottom:0;border-width:.5rem .5rem 0;border-top-color:rgba(0,0,0,.25)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=top]>.bootstrap-min_arrow__2j1Ku::after,.bootstrap-min_bs-popover-top__2aCBB>.bootstrap-min_arrow__2j1Ku::after{bottom:1px;border-width:.5rem .5rem 0;border-top-color:#fff}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=right],.bootstrap-min_bs-popover-right__1ZCV5{margin-left:.5rem}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=right]>.bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-popover-right__1ZCV5>.bootstrap-min_arrow__2j1Ku{left:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=right]>.bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-popover-right__1ZCV5>.bootstrap-min_arrow__2j1Ku::before{left:0;border-width:.5rem .5rem .5rem 0;border-right-color:rgba(0,0,0,.25)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=right]>.bootstrap-min_arrow__2j1Ku::after,.bootstrap-min_bs-popover-right__1ZCV5>.bootstrap-min_arrow__2j1Ku::after{left:1px;border-width:.5rem .5rem .5rem 0;border-right-color:#fff}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=bottom],.bootstrap-min_bs-popover-bottom__1_tfk{margin-top:.5rem}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=bottom]>.bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-popover-bottom__1_tfk>.bootstrap-min_arrow__2j1Ku{top:calc(-.5rem - 1px)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=bottom]>.bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-popover-bottom__1_tfk>.bootstrap-min_arrow__2j1Ku::before{top:0;border-width:0 .5rem .5rem .5rem;border-bottom-color:rgba(0,0,0,.25)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=bottom]>.bootstrap-min_arrow__2j1Ku::after,.bootstrap-min_bs-popover-bottom__1_tfk>.bootstrap-min_arrow__2j1Ku::after{top:1px;border-width:0 .5rem .5rem .5rem;border-bottom-color:#fff}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=bottom] .bootstrap-min_popover-header__26TxA::before,.bootstrap-min_bs-popover-bottom__1_tfk .bootstrap-min_popover-header__26TxA::before{position:absolute;top:0;left:50%;display:block;width:1rem;margin-left:-.5rem;content:\"\";border-bottom:1px solid #f7f7f7}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=left],.bootstrap-min_bs-popover-left__KN478{margin-right:.5rem}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=left]>.bootstrap-min_arrow__2j1Ku,.bootstrap-min_bs-popover-left__KN478>.bootstrap-min_arrow__2j1Ku{right:calc(-.5rem - 1px);width:.5rem;height:1rem;margin:.3rem 0}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=left]>.bootstrap-min_arrow__2j1Ku::before,.bootstrap-min_bs-popover-left__KN478>.bootstrap-min_arrow__2j1Ku::before{right:0;border-width:.5rem 0 .5rem .5rem;border-left-color:rgba(0,0,0,.25)}.bootstrap-min_bs-popover-auto__3nbMA[x-placement^=left]>.bootstrap-min_arrow__2j1Ku::after,.bootstrap-min_bs-popover-left__KN478>.bootstrap-min_arrow__2j1Ku::after{right:1px;border-width:.5rem 0 .5rem .5rem;border-left-color:#fff}.bootstrap-min_popover-header__26TxA{padding:.5rem .75rem;margin-bottom:0;font-size:1rem;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px)}.bootstrap-min_popover-header__26TxA:empty{display:none}.bootstrap-min_popover-body__1FdsA{padding:.5rem .75rem;color:#212529}.bootstrap-min_carousel__28ccy{position:relative}.bootstrap-min_carousel__28ccy.bootstrap-min_pointer-event__aeIPK{-ms-touch-action:pan-y;touch-action:pan-y}.bootstrap-min_carousel-inner__2YIqg{position:relative;width:100%;overflow:hidden}.bootstrap-min_carousel-inner__2YIqg::after{display:block;clear:both;content:\"\"}.bootstrap-min_carousel-item__1Uxs2{position:relative;display:none;float:left;width:100%;margin-right:-100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out,-webkit-transform .6s ease-in-out}@media (prefers-reduced-motion:reduce){.bootstrap-min_carousel-item__1Uxs2{transition:none}}.bootstrap-min_carousel-item-next__2aTjE,.bootstrap-min_carousel-item-prev__1pVia,.bootstrap-min_carousel-item__1Uxs2.bootstrap-min_active__tKiHW{display:block}.bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-right__Q3wXf,.bootstrap-min_carousel-item-next__2aTjE:not(.bootstrap-min_carousel-item-left__UYYUu){-webkit-transform:translateX(100%);transform:translateX(100%)}.bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-left__UYYUu,.bootstrap-min_carousel-item-prev__1pVia:not(.bootstrap-min_carousel-item-right__Q3wXf){-webkit-transform:translateX(-100%);transform:translateX(-100%)}.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_carousel-item__1Uxs2{opacity:0;transition-property:opacity;-webkit-transform:none;transform:none}.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_carousel-item-next__2aTjE.bootstrap-min_carousel-item-left__UYYUu,.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_carousel-item-prev__1pVia.bootstrap-min_carousel-item-right__Q3wXf,.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_carousel-item__1Uxs2.bootstrap-min_active__tKiHW{z-index:1;opacity:1}.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-left__UYYUu,.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-right__Q3wXf{z-index:0;opacity:0;transition:opacity 0s .6s}@media (prefers-reduced-motion:reduce){.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-left__UYYUu,.bootstrap-min_carousel-fade__1GMgF .bootstrap-min_active__tKiHW.bootstrap-min_carousel-item-right__Q3wXf{transition:none}}.bootstrap-min_carousel-control-next__3BvG6,.bootstrap-min_carousel-control-prev__PsTwF{position:absolute;top:0;bottom:0;z-index:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:15%;color:#fff;text-align:center;opacity:.5;transition:opacity .15s ease}@media (prefers-reduced-motion:reduce){.bootstrap-min_carousel-control-next__3BvG6,.bootstrap-min_carousel-control-prev__PsTwF{transition:none}}.bootstrap-min_carousel-control-next__3BvG6:focus,.bootstrap-min_carousel-control-next__3BvG6:hover,.bootstrap-min_carousel-control-prev__PsTwF:focus,.bootstrap-min_carousel-control-prev__PsTwF:hover{color:#fff;text-decoration:none;outline:0;opacity:.9}.bootstrap-min_carousel-control-prev__PsTwF{left:0}.bootstrap-min_carousel-control-next__3BvG6{right:0}.bootstrap-min_carousel-control-next-icon__1jhLG,.bootstrap-min_carousel-control-prev-icon__20GXI{display:inline-block;width:20px;height:20px;background:no-repeat 50%/100% 100%}.bootstrap-min_carousel-control-prev-icon__20GXI{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")}.bootstrap-min_carousel-control-next-icon__1jhLG{background-image:url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")}.bootstrap-min_carousel-indicators__3yTKT{position:absolute;right:0;bottom:0;left:0;z-index:15;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-left:0;margin-right:15%;margin-left:15%;list-style:none}.bootstrap-min_carousel-indicators__3yTKT li{box-sizing:content-box;-ms-flex:0 1 auto;flex:0 1 auto;width:30px;height:3px;margin-right:3px;margin-left:3px;text-indent:-999px;cursor:pointer;background-color:#fff;background-clip:padding-box;border-top:10px solid transparent;border-bottom:10px solid transparent;opacity:.5;transition:opacity .6s ease}@media (prefers-reduced-motion:reduce){.bootstrap-min_carousel-indicators__3yTKT li{transition:none}}.bootstrap-min_carousel-indicators__3yTKT .bootstrap-min_active__tKiHW{opacity:1}.bootstrap-min_carousel-caption__3MivW{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center}@-webkit-keyframes bootstrap-min_spinner-border__2J2XQ{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes bootstrap-min_spinner-border__2J2XQ{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.bootstrap-min_spinner-border__2J2XQ{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;border:.25em solid currentColor;border-right-color:transparent;border-radius:50%;-webkit-animation:bootstrap-min_spinner-border__2J2XQ .75s linear infinite;animation:bootstrap-min_spinner-border__2J2XQ .75s linear infinite}.bootstrap-min_spinner-border-sm__24oA_{width:1rem;height:1rem;border-width:.2em}@-webkit-keyframes bootstrap-min_spinner-grow__1qFPa{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}@keyframes bootstrap-min_spinner-grow__1qFPa{0%{-webkit-transform:scale(0);transform:scale(0)}50%{opacity:1}}.bootstrap-min_spinner-grow__1qFPa{display:inline-block;width:2rem;height:2rem;vertical-align:text-bottom;background-color:currentColor;border-radius:50%;opacity:0;-webkit-animation:bootstrap-min_spinner-grow__1qFPa .75s linear infinite;animation:bootstrap-min_spinner-grow__1qFPa .75s linear infinite}.bootstrap-min_spinner-grow-sm__3AYJj{width:1rem;height:1rem}.bootstrap-min_align-baseline__1xtfe{vertical-align:baseline!important}.bootstrap-min_align-top__3_Lip{vertical-align:top!important}.bootstrap-min_align-middle__F9beq{vertical-align:middle!important}.bootstrap-min_align-bottom__35JSB{vertical-align:bottom!important}.bootstrap-min_align-text-bottom__1cGlM{vertical-align:text-bottom!important}.bootstrap-min_align-text-top__lZKpF{vertical-align:text-top!important}.bootstrap-min_bg-primary__35XSE{background-color:#007bff!important}a.bootstrap-min_bg-primary__35XSE:focus,a.bootstrap-min_bg-primary__35XSE:hover,button.bootstrap-min_bg-primary__35XSE:focus,button.bootstrap-min_bg-primary__35XSE:hover{background-color:#0062cc!important}.bootstrap-min_bg-secondary__1HSi2{background-color:#6c757d!important}a.bootstrap-min_bg-secondary__1HSi2:focus,a.bootstrap-min_bg-secondary__1HSi2:hover,button.bootstrap-min_bg-secondary__1HSi2:focus,button.bootstrap-min_bg-secondary__1HSi2:hover{background-color:#545b62!important}.bootstrap-min_bg-success__1oQGL{background-color:#28a745!important}a.bootstrap-min_bg-success__1oQGL:focus,a.bootstrap-min_bg-success__1oQGL:hover,button.bootstrap-min_bg-success__1oQGL:focus,button.bootstrap-min_bg-success__1oQGL:hover{background-color:#1e7e34!important}.bootstrap-min_bg-info__u_Bhs{background-color:#17a2b8!important}a.bootstrap-min_bg-info__u_Bhs:focus,a.bootstrap-min_bg-info__u_Bhs:hover,button.bootstrap-min_bg-info__u_Bhs:focus,button.bootstrap-min_bg-info__u_Bhs:hover{background-color:#117a8b!important}.bootstrap-min_bg-warning__1CCgu{background-color:#ffc107!important}a.bootstrap-min_bg-warning__1CCgu:focus,a.bootstrap-min_bg-warning__1CCgu:hover,button.bootstrap-min_bg-warning__1CCgu:focus,button.bootstrap-min_bg-warning__1CCgu:hover{background-color:#d39e00!important}.bootstrap-min_bg-danger__2vxiN{background-color:#dc3545!important}a.bootstrap-min_bg-danger__2vxiN:focus,a.bootstrap-min_bg-danger__2vxiN:hover,button.bootstrap-min_bg-danger__2vxiN:focus,button.bootstrap-min_bg-danger__2vxiN:hover{background-color:#bd2130!important}.bootstrap-min_bg-light__pxLEz{background-color:#f8f9fa!important}a.bootstrap-min_bg-light__pxLEz:focus,a.bootstrap-min_bg-light__pxLEz:hover,button.bootstrap-min_bg-light__pxLEz:focus,button.bootstrap-min_bg-light__pxLEz:hover{background-color:#dae0e5!important}.bootstrap-min_bg-dark__CWPPk{background-color:#343a40!important}a.bootstrap-min_bg-dark__CWPPk:focus,a.bootstrap-min_bg-dark__CWPPk:hover,button.bootstrap-min_bg-dark__CWPPk:focus,button.bootstrap-min_bg-dark__CWPPk:hover{background-color:#1d2124!important}.bootstrap-min_bg-white__fEOV8{background-color:#fff!important}.bootstrap-min_bg-transparent__VFCXE{background-color:transparent!important}.bootstrap-min_border__1DR_R{border:1px solid #dee2e6!important}.bootstrap-min_border-top__1AbBB{border-top:1px solid #dee2e6!important}.bootstrap-min_border-right__3Mur6{border-right:1px solid #dee2e6!important}.bootstrap-min_border-bottom___9wxD{border-bottom:1px solid #dee2e6!important}.bootstrap-min_border-left__QR8bq{border-left:1px solid #dee2e6!important}.bootstrap-min_border-0__3PWbA{border:0!important}.bootstrap-min_border-top-0__3MtwM{border-top:0!important}.bootstrap-min_border-right-0__1K3OZ{border-right:0!important}.bootstrap-min_border-bottom-0__10XoC{border-bottom:0!important}.bootstrap-min_border-left-0__296Ad{border-left:0!important}.bootstrap-min_border-primary__2fhvV{border-color:#007bff!important}.bootstrap-min_border-secondary__2raZm{border-color:#6c757d!important}.bootstrap-min_border-success___ocBi{border-color:#28a745!important}.bootstrap-min_border-info__2PYTN{border-color:#17a2b8!important}.bootstrap-min_border-warning__2dPrX{border-color:#ffc107!important}.bootstrap-min_border-danger__39-Pe{border-color:#dc3545!important}.bootstrap-min_border-light__2A967{border-color:#f8f9fa!important}.bootstrap-min_border-dark__1o1qw{border-color:#343a40!important}.bootstrap-min_border-white__tV70f{border-color:#fff!important}.bootstrap-min_rounded-sm__1ID-k{border-radius:.2rem!important}.bootstrap-min_rounded__3JDEy{border-radius:.25rem!important}.bootstrap-min_rounded-top__3woLq{border-top-left-radius:.25rem!important;border-top-right-radius:.25rem!important}.bootstrap-min_rounded-right__3Ptc5{border-top-right-radius:.25rem!important;border-bottom-right-radius:.25rem!important}.bootstrap-min_rounded-bottom__2szXd{border-bottom-right-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.bootstrap-min_rounded-left__2X7hF{border-top-left-radius:.25rem!important;border-bottom-left-radius:.25rem!important}.bootstrap-min_rounded-lg__32iyd{border-radius:.3rem!important}.bootstrap-min_rounded-circle__203GV{border-radius:50%!important}.bootstrap-min_rounded-pill__1u_Jp{border-radius:50rem!important}.bootstrap-min_rounded-0__cPjyK{border-radius:0!important}.bootstrap-min_clearfix__2h-1v::after{display:block;clear:both;content:\"\"}.bootstrap-min_d-none__3xbXj{display:none!important}.bootstrap-min_d-inline__2Da8f{display:inline!important}.bootstrap-min_d-inline-block__3AIfG{display:inline-block!important}.bootstrap-min_d-block__2ZkZ_{display:block!important}.bootstrap-min_d-table__3FU6J{display:table!important}.bootstrap-min_d-table-row__2TIce{display:table-row!important}.bootstrap-min_d-table-cell__1rueI{display:table-cell!important}.bootstrap-min_d-flex__1df3v{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-inline-flex__1P9k2{display:-ms-inline-flexbox!important;display:inline-flex!important}@media (min-width:576px){.bootstrap-min_d-sm-none__1syem{display:none!important}.bootstrap-min_d-sm-inline__31xrf{display:inline!important}.bootstrap-min_d-sm-inline-block__3k-xU{display:inline-block!important}.bootstrap-min_d-sm-block__14wip{display:block!important}.bootstrap-min_d-sm-table__sFkq1{display:table!important}.bootstrap-min_d-sm-table-row__yXeeW{display:table-row!important}.bootstrap-min_d-sm-table-cell__2nq1-{display:table-cell!important}.bootstrap-min_d-sm-flex__2kXrZ{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-sm-inline-flex__2FSU1{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:768px){.bootstrap-min_d-md-none__2jna-{display:none!important}.bootstrap-min_d-md-inline__1mgWb{display:inline!important}.bootstrap-min_d-md-inline-block__1GLqQ{display:inline-block!important}.bootstrap-min_d-md-block__1fmlf{display:block!important}.bootstrap-min_d-md-table__i8usl{display:table!important}.bootstrap-min_d-md-table-row__3UsSZ{display:table-row!important}.bootstrap-min_d-md-table-cell__3SrIC{display:table-cell!important}.bootstrap-min_d-md-flex__2k_TZ{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-md-inline-flex__1Ic9k{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:992px){.bootstrap-min_d-lg-none__3b9Vf{display:none!important}.bootstrap-min_d-lg-inline__3GgaD{display:inline!important}.bootstrap-min_d-lg-inline-block__3REnf{display:inline-block!important}.bootstrap-min_d-lg-block__504oi{display:block!important}.bootstrap-min_d-lg-table__3tdPX{display:table!important}.bootstrap-min_d-lg-table-row__3AOMg{display:table-row!important}.bootstrap-min_d-lg-table-cell__18pOv{display:table-cell!important}.bootstrap-min_d-lg-flex__1ytLq{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-lg-inline-flex__3r-Ji{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media (min-width:1200px){.bootstrap-min_d-xl-none__1qPIc{display:none!important}.bootstrap-min_d-xl-inline__19dFg{display:inline!important}.bootstrap-min_d-xl-inline-block__1GD5X{display:inline-block!important}.bootstrap-min_d-xl-block__3DEsy{display:block!important}.bootstrap-min_d-xl-table__R4tHu{display:table!important}.bootstrap-min_d-xl-table-row__2EZJX{display:table-row!important}.bootstrap-min_d-xl-table-cell__3Lpuu{display:table-cell!important}.bootstrap-min_d-xl-flex__3rnSX{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-xl-inline-flex__1VYyQ{display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print{.bootstrap-min_d-print-none__48AXr{display:none!important}.bootstrap-min_d-print-inline__36Y7f{display:inline!important}.bootstrap-min_d-print-inline-block__3rTtx{display:inline-block!important}.bootstrap-min_d-print-block__2vbS3{display:block!important}.bootstrap-min_d-print-table__3fCYa{display:table!important}.bootstrap-min_d-print-table-row__3pET6{display:table-row!important}.bootstrap-min_d-print-table-cell__21bRy{display:table-cell!important}.bootstrap-min_d-print-flex__3xBFB{display:-ms-flexbox!important;display:flex!important}.bootstrap-min_d-print-inline-flex__3K_kB{display:-ms-inline-flexbox!important;display:inline-flex!important}}.bootstrap-min_embed-responsive__2mWeb{position:relative;display:block;width:100%;padding:0;overflow:hidden}.bootstrap-min_embed-responsive__2mWeb::before{display:block;content:\"\"}.bootstrap-min_embed-responsive__2mWeb .bootstrap-min_embed-responsive-item__7oAaw,.bootstrap-min_embed-responsive__2mWeb embed,.bootstrap-min_embed-responsive__2mWeb iframe,.bootstrap-min_embed-responsive__2mWeb object,.bootstrap-min_embed-responsive__2mWeb video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.bootstrap-min_embed-responsive-21by9__1-Qz6::before{padding-top:42.857143%}.bootstrap-min_embed-responsive-16by9__-ZZ25::before{padding-top:56.25%}.bootstrap-min_embed-responsive-4by3__WhFn2::before{padding-top:75%}.bootstrap-min_embed-responsive-1by1__2aMfC::before{padding-top:100%}.bootstrap-min_flex-row__2CP7x{-ms-flex-direction:row!important;flex-direction:row!important}.bootstrap-min_flex-column__33Qrn{-ms-flex-direction:column!important;flex-direction:column!important}.bootstrap-min_flex-row-reverse__2eTVw{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.bootstrap-min_flex-column-reverse__2bsg6{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.bootstrap-min_flex-wrap__3XB5r{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.bootstrap-min_flex-nowrap__Kpjdg{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bootstrap-min_flex-wrap-reverse__18bJ7{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.bootstrap-min_flex-fill__3zQV6{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.bootstrap-min_flex-grow-0__RkPJM{-ms-flex-positive:0!important;flex-grow:0!important}.bootstrap-min_flex-grow-1__2cY8z{-ms-flex-positive:1!important;flex-grow:1!important}.bootstrap-min_flex-shrink-0__2XPzb{-ms-flex-negative:0!important;flex-shrink:0!important}.bootstrap-min_flex-shrink-1__1-sTp{-ms-flex-negative:1!important;flex-shrink:1!important}.bootstrap-min_justify-content-start__OIAf5{-ms-flex-pack:start!important;justify-content:flex-start!important}.bootstrap-min_justify-content-end__3331y{-ms-flex-pack:end!important;justify-content:flex-end!important}.bootstrap-min_justify-content-center__3oIG1{-ms-flex-pack:center!important;justify-content:center!important}.bootstrap-min_justify-content-between__MEI8a{-ms-flex-pack:justify!important;justify-content:space-between!important}.bootstrap-min_justify-content-around__2Vm02{-ms-flex-pack:distribute!important;justify-content:space-around!important}.bootstrap-min_align-items-start__2I-r3{-ms-flex-align:start!important;align-items:flex-start!important}.bootstrap-min_align-items-end__3yW_2{-ms-flex-align:end!important;align-items:flex-end!important}.bootstrap-min_align-items-center__Sje_5{-ms-flex-align:center!important;align-items:center!important}.bootstrap-min_align-items-baseline__qD8Ds{-ms-flex-align:baseline!important;align-items:baseline!important}.bootstrap-min_align-items-stretch__JqcVm{-ms-flex-align:stretch!important;align-items:stretch!important}.bootstrap-min_align-content-start__1DYlo{-ms-flex-line-pack:start!important;align-content:flex-start!important}.bootstrap-min_align-content-end__3bURH{-ms-flex-line-pack:end!important;align-content:flex-end!important}.bootstrap-min_align-content-center__TVVe4{-ms-flex-line-pack:center!important;align-content:center!important}.bootstrap-min_align-content-between__1JJSA{-ms-flex-line-pack:justify!important;align-content:space-between!important}.bootstrap-min_align-content-around__dq0LN{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.bootstrap-min_align-content-stretch__2Ir5Z{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.bootstrap-min_align-self-auto__2NRcs{-ms-flex-item-align:auto!important;align-self:auto!important}.bootstrap-min_align-self-start__Qtid7{-ms-flex-item-align:start!important;align-self:flex-start!important}.bootstrap-min_align-self-end__1PoaK{-ms-flex-item-align:end!important;align-self:flex-end!important}.bootstrap-min_align-self-center__3Pv5e{-ms-flex-item-align:center!important;align-self:center!important}.bootstrap-min_align-self-baseline__3T_Co{-ms-flex-item-align:baseline!important;align-self:baseline!important}.bootstrap-min_align-self-stretch__2q5R4{-ms-flex-item-align:stretch!important;align-self:stretch!important}@media (min-width:576px){.bootstrap-min_flex-sm-row__BuMCh{-ms-flex-direction:row!important;flex-direction:row!important}.bootstrap-min_flex-sm-column__1Bduy{-ms-flex-direction:column!important;flex-direction:column!important}.bootstrap-min_flex-sm-row-reverse__2XDSI{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.bootstrap-min_flex-sm-column-reverse__36lGH{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.bootstrap-min_flex-sm-wrap__253TD{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.bootstrap-min_flex-sm-nowrap__1xji0{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bootstrap-min_flex-sm-wrap-reverse__1Km8_{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.bootstrap-min_flex-sm-fill__1ChP_{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.bootstrap-min_flex-sm-grow-0__OES31{-ms-flex-positive:0!important;flex-grow:0!important}.bootstrap-min_flex-sm-grow-1__2SUWr{-ms-flex-positive:1!important;flex-grow:1!important}.bootstrap-min_flex-sm-shrink-0__3nNO2{-ms-flex-negative:0!important;flex-shrink:0!important}.bootstrap-min_flex-sm-shrink-1__23GWI{-ms-flex-negative:1!important;flex-shrink:1!important}.bootstrap-min_justify-content-sm-start__2fwaI{-ms-flex-pack:start!important;justify-content:flex-start!important}.bootstrap-min_justify-content-sm-end__33QBR{-ms-flex-pack:end!important;justify-content:flex-end!important}.bootstrap-min_justify-content-sm-center__13C7z{-ms-flex-pack:center!important;justify-content:center!important}.bootstrap-min_justify-content-sm-between__1q0Uk{-ms-flex-pack:justify!important;justify-content:space-between!important}.bootstrap-min_justify-content-sm-around__26Tt-{-ms-flex-pack:distribute!important;justify-content:space-around!important}.bootstrap-min_align-items-sm-start__3sOpE{-ms-flex-align:start!important;align-items:flex-start!important}.bootstrap-min_align-items-sm-end__3zlhM{-ms-flex-align:end!important;align-items:flex-end!important}.bootstrap-min_align-items-sm-center__2R71e{-ms-flex-align:center!important;align-items:center!important}.bootstrap-min_align-items-sm-baseline__2J1ii{-ms-flex-align:baseline!important;align-items:baseline!important}.bootstrap-min_align-items-sm-stretch__E-_eP{-ms-flex-align:stretch!important;align-items:stretch!important}.bootstrap-min_align-content-sm-start__3X2J4{-ms-flex-line-pack:start!important;align-content:flex-start!important}.bootstrap-min_align-content-sm-end__11NPY{-ms-flex-line-pack:end!important;align-content:flex-end!important}.bootstrap-min_align-content-sm-center__3AMj5{-ms-flex-line-pack:center!important;align-content:center!important}.bootstrap-min_align-content-sm-between__mjSA_{-ms-flex-line-pack:justify!important;align-content:space-between!important}.bootstrap-min_align-content-sm-around__3in-V{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.bootstrap-min_align-content-sm-stretch__3kd11{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.bootstrap-min_align-self-sm-auto__3_85S{-ms-flex-item-align:auto!important;align-self:auto!important}.bootstrap-min_align-self-sm-start__34lgk{-ms-flex-item-align:start!important;align-self:flex-start!important}.bootstrap-min_align-self-sm-end__2TSI4{-ms-flex-item-align:end!important;align-self:flex-end!important}.bootstrap-min_align-self-sm-center__3dM2u{-ms-flex-item-align:center!important;align-self:center!important}.bootstrap-min_align-self-sm-baseline__3oNa7{-ms-flex-item-align:baseline!important;align-self:baseline!important}.bootstrap-min_align-self-sm-stretch__3oAUE{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:768px){.bootstrap-min_flex-md-row__YJxuQ{-ms-flex-direction:row!important;flex-direction:row!important}.bootstrap-min_flex-md-column__YaYMl{-ms-flex-direction:column!important;flex-direction:column!important}.bootstrap-min_flex-md-row-reverse__32D9t{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.bootstrap-min_flex-md-column-reverse__3VtQS{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.bootstrap-min_flex-md-wrap__WXErw{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.bootstrap-min_flex-md-nowrap__dxPO6{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bootstrap-min_flex-md-wrap-reverse__MPlE1{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.bootstrap-min_flex-md-fill__33CdU{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.bootstrap-min_flex-md-grow-0__2a2Z9{-ms-flex-positive:0!important;flex-grow:0!important}.bootstrap-min_flex-md-grow-1__vLQ_h{-ms-flex-positive:1!important;flex-grow:1!important}.bootstrap-min_flex-md-shrink-0__2MNLY{-ms-flex-negative:0!important;flex-shrink:0!important}.bootstrap-min_flex-md-shrink-1__h_wUP{-ms-flex-negative:1!important;flex-shrink:1!important}.bootstrap-min_justify-content-md-start__1rAoy{-ms-flex-pack:start!important;justify-content:flex-start!important}.bootstrap-min_justify-content-md-end__2xUdd{-ms-flex-pack:end!important;justify-content:flex-end!important}.bootstrap-min_justify-content-md-center__2OBLh{-ms-flex-pack:center!important;justify-content:center!important}.bootstrap-min_justify-content-md-between__2600V{-ms-flex-pack:justify!important;justify-content:space-between!important}.bootstrap-min_justify-content-md-around__3fITg{-ms-flex-pack:distribute!important;justify-content:space-around!important}.bootstrap-min_align-items-md-start__bGKR3{-ms-flex-align:start!important;align-items:flex-start!important}.bootstrap-min_align-items-md-end__1M7i8{-ms-flex-align:end!important;align-items:flex-end!important}.bootstrap-min_align-items-md-center__3kIb-{-ms-flex-align:center!important;align-items:center!important}.bootstrap-min_align-items-md-baseline__hF_DA{-ms-flex-align:baseline!important;align-items:baseline!important}.bootstrap-min_align-items-md-stretch__lXWM-{-ms-flex-align:stretch!important;align-items:stretch!important}.bootstrap-min_align-content-md-start__6TMB1{-ms-flex-line-pack:start!important;align-content:flex-start!important}.bootstrap-min_align-content-md-end__1CV0T{-ms-flex-line-pack:end!important;align-content:flex-end!important}.bootstrap-min_align-content-md-center__3mAsE{-ms-flex-line-pack:center!important;align-content:center!important}.bootstrap-min_align-content-md-between__1w9D9{-ms-flex-line-pack:justify!important;align-content:space-between!important}.bootstrap-min_align-content-md-around__25pXm{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.bootstrap-min_align-content-md-stretch__wkcVs{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.bootstrap-min_align-self-md-auto__T7yIV{-ms-flex-item-align:auto!important;align-self:auto!important}.bootstrap-min_align-self-md-start__2TeLN{-ms-flex-item-align:start!important;align-self:flex-start!important}.bootstrap-min_align-self-md-end__7eaNG{-ms-flex-item-align:end!important;align-self:flex-end!important}.bootstrap-min_align-self-md-center__xF1P5{-ms-flex-item-align:center!important;align-self:center!important}.bootstrap-min_align-self-md-baseline__3EYq3{-ms-flex-item-align:baseline!important;align-self:baseline!important}.bootstrap-min_align-self-md-stretch__3QCHq{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:992px){.bootstrap-min_flex-lg-row__1XCRF{-ms-flex-direction:row!important;flex-direction:row!important}.bootstrap-min_flex-lg-column__1gnXU{-ms-flex-direction:column!important;flex-direction:column!important}.bootstrap-min_flex-lg-row-reverse__2015n{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.bootstrap-min_flex-lg-column-reverse__1srcD{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.bootstrap-min_flex-lg-wrap__3LhkU{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.bootstrap-min_flex-lg-nowrap__2D1ZJ{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bootstrap-min_flex-lg-wrap-reverse__3MO5N{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.bootstrap-min_flex-lg-fill__25QF2{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.bootstrap-min_flex-lg-grow-0__bvrDx{-ms-flex-positive:0!important;flex-grow:0!important}.bootstrap-min_flex-lg-grow-1__1raGb{-ms-flex-positive:1!important;flex-grow:1!important}.bootstrap-min_flex-lg-shrink-0__1Mf-E{-ms-flex-negative:0!important;flex-shrink:0!important}.bootstrap-min_flex-lg-shrink-1__1-TPG{-ms-flex-negative:1!important;flex-shrink:1!important}.bootstrap-min_justify-content-lg-start__11Hjx{-ms-flex-pack:start!important;justify-content:flex-start!important}.bootstrap-min_justify-content-lg-end__2ChGY{-ms-flex-pack:end!important;justify-content:flex-end!important}.bootstrap-min_justify-content-lg-center__28cu2{-ms-flex-pack:center!important;justify-content:center!important}.bootstrap-min_justify-content-lg-between__2GIx0{-ms-flex-pack:justify!important;justify-content:space-between!important}.bootstrap-min_justify-content-lg-around__lkeZH{-ms-flex-pack:distribute!important;justify-content:space-around!important}.bootstrap-min_align-items-lg-start__IAjtU{-ms-flex-align:start!important;align-items:flex-start!important}.bootstrap-min_align-items-lg-end__3GYqo{-ms-flex-align:end!important;align-items:flex-end!important}.bootstrap-min_align-items-lg-center__25jJc{-ms-flex-align:center!important;align-items:center!important}.bootstrap-min_align-items-lg-baseline__3ovYl{-ms-flex-align:baseline!important;align-items:baseline!important}.bootstrap-min_align-items-lg-stretch__17GAa{-ms-flex-align:stretch!important;align-items:stretch!important}.bootstrap-min_align-content-lg-start__3wxxM{-ms-flex-line-pack:start!important;align-content:flex-start!important}.bootstrap-min_align-content-lg-end__25YRZ{-ms-flex-line-pack:end!important;align-content:flex-end!important}.bootstrap-min_align-content-lg-center__303ZB{-ms-flex-line-pack:center!important;align-content:center!important}.bootstrap-min_align-content-lg-between__3XKb9{-ms-flex-line-pack:justify!important;align-content:space-between!important}.bootstrap-min_align-content-lg-around__22n4E{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.bootstrap-min_align-content-lg-stretch__2-77Y{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.bootstrap-min_align-self-lg-auto__3l56Z{-ms-flex-item-align:auto!important;align-self:auto!important}.bootstrap-min_align-self-lg-start__3F4H5{-ms-flex-item-align:start!important;align-self:flex-start!important}.bootstrap-min_align-self-lg-end__1srWG{-ms-flex-item-align:end!important;align-self:flex-end!important}.bootstrap-min_align-self-lg-center__2dkqZ{-ms-flex-item-align:center!important;align-self:center!important}.bootstrap-min_align-self-lg-baseline__D1v4L{-ms-flex-item-align:baseline!important;align-self:baseline!important}.bootstrap-min_align-self-lg-stretch__1G0z-{-ms-flex-item-align:stretch!important;align-self:stretch!important}}@media (min-width:1200px){.bootstrap-min_flex-xl-row__2nWGY{-ms-flex-direction:row!important;flex-direction:row!important}.bootstrap-min_flex-xl-column__1_jQz{-ms-flex-direction:column!important;flex-direction:column!important}.bootstrap-min_flex-xl-row-reverse__3ofKI{-ms-flex-direction:row-reverse!important;flex-direction:row-reverse!important}.bootstrap-min_flex-xl-column-reverse__1RtpE{-ms-flex-direction:column-reverse!important;flex-direction:column-reverse!important}.bootstrap-min_flex-xl-wrap__JZzgm{-ms-flex-wrap:wrap!important;flex-wrap:wrap!important}.bootstrap-min_flex-xl-nowrap__BQBxU{-ms-flex-wrap:nowrap!important;flex-wrap:nowrap!important}.bootstrap-min_flex-xl-wrap-reverse__2cALv{-ms-flex-wrap:wrap-reverse!important;flex-wrap:wrap-reverse!important}.bootstrap-min_flex-xl-fill__3mLvT{-ms-flex:1 1 auto!important;flex:1 1 auto!important}.bootstrap-min_flex-xl-grow-0__10ki9{-ms-flex-positive:0!important;flex-grow:0!important}.bootstrap-min_flex-xl-grow-1__338x9{-ms-flex-positive:1!important;flex-grow:1!important}.bootstrap-min_flex-xl-shrink-0__1zyMJ{-ms-flex-negative:0!important;flex-shrink:0!important}.bootstrap-min_flex-xl-shrink-1__Ht6CD{-ms-flex-negative:1!important;flex-shrink:1!important}.bootstrap-min_justify-content-xl-start__1MzTP{-ms-flex-pack:start!important;justify-content:flex-start!important}.bootstrap-min_justify-content-xl-end__2lQ9s{-ms-flex-pack:end!important;justify-content:flex-end!important}.bootstrap-min_justify-content-xl-center__3Qps1{-ms-flex-pack:center!important;justify-content:center!important}.bootstrap-min_justify-content-xl-between__1UllS{-ms-flex-pack:justify!important;justify-content:space-between!important}.bootstrap-min_justify-content-xl-around__1vbdx{-ms-flex-pack:distribute!important;justify-content:space-around!important}.bootstrap-min_align-items-xl-start__3T39x{-ms-flex-align:start!important;align-items:flex-start!important}.bootstrap-min_align-items-xl-end__3qu7y{-ms-flex-align:end!important;align-items:flex-end!important}.bootstrap-min_align-items-xl-center__1QhcT{-ms-flex-align:center!important;align-items:center!important}.bootstrap-min_align-items-xl-baseline__13PBI{-ms-flex-align:baseline!important;align-items:baseline!important}.bootstrap-min_align-items-xl-stretch__2yFew{-ms-flex-align:stretch!important;align-items:stretch!important}.bootstrap-min_align-content-xl-start__1NCye{-ms-flex-line-pack:start!important;align-content:flex-start!important}.bootstrap-min_align-content-xl-end__3o4kB{-ms-flex-line-pack:end!important;align-content:flex-end!important}.bootstrap-min_align-content-xl-center__YpkUo{-ms-flex-line-pack:center!important;align-content:center!important}.bootstrap-min_align-content-xl-between__oXZeY{-ms-flex-line-pack:justify!important;align-content:space-between!important}.bootstrap-min_align-content-xl-around__2ZbsS{-ms-flex-line-pack:distribute!important;align-content:space-around!important}.bootstrap-min_align-content-xl-stretch__2Utnu{-ms-flex-line-pack:stretch!important;align-content:stretch!important}.bootstrap-min_align-self-xl-auto__1dSy9{-ms-flex-item-align:auto!important;align-self:auto!important}.bootstrap-min_align-self-xl-start__ZxcrV{-ms-flex-item-align:start!important;align-self:flex-start!important}.bootstrap-min_align-self-xl-end__3NcjW{-ms-flex-item-align:end!important;align-self:flex-end!important}.bootstrap-min_align-self-xl-center__2CbbL{-ms-flex-item-align:center!important;align-self:center!important}.bootstrap-min_align-self-xl-baseline__3X_mG{-ms-flex-item-align:baseline!important;align-self:baseline!important}.bootstrap-min_align-self-xl-stretch__1kjF4{-ms-flex-item-align:stretch!important;align-self:stretch!important}}.bootstrap-min_float-left__cPkT0{float:left!important}.bootstrap-min_float-right__2HyDy{float:right!important}.bootstrap-min_float-none__38Yw7{float:none!important}@media (min-width:576px){.bootstrap-min_float-sm-left__H7pJJ{float:left!important}.bootstrap-min_float-sm-right__2UbUX{float:right!important}.bootstrap-min_float-sm-none__28pKi{float:none!important}}@media (min-width:768px){.bootstrap-min_float-md-left__rtydc{float:left!important}.bootstrap-min_float-md-right__2h552{float:right!important}.bootstrap-min_float-md-none___REKx{float:none!important}}@media (min-width:992px){.bootstrap-min_float-lg-left__3Vzd6{float:left!important}.bootstrap-min_float-lg-right__3ZLS1{float:right!important}.bootstrap-min_float-lg-none__2FqEB{float:none!important}}@media (min-width:1200px){.bootstrap-min_float-xl-left__3d1-0{float:left!important}.bootstrap-min_float-xl-right__1jHc7{float:right!important}.bootstrap-min_float-xl-none__lw9Wl{float:none!important}}.bootstrap-min_overflow-auto__SkipV{overflow:auto!important}.bootstrap-min_overflow-hidden__5akq5{overflow:hidden!important}.bootstrap-min_position-static__2KIiR{position:static!important}.bootstrap-min_position-relative__1RPOp{position:relative!important}.bootstrap-min_position-absolute__2MW5b{position:absolute!important}.bootstrap-min_position-fixed__2eZ16{position:fixed!important}.bootstrap-min_position-sticky__2UJ7i{position:-webkit-sticky!important;position:sticky!important}.bootstrap-min_fixed-top__YRjrG{position:fixed;top:0;right:0;left:0;z-index:1030}.bootstrap-min_fixed-bottom__3gEfg{position:fixed;right:0;bottom:0;left:0;z-index:1030}@supports ((position:-webkit-sticky) or (position:sticky)){.bootstrap-min_sticky-top__39hyL{position:-webkit-sticky;position:sticky;top:0;z-index:1020}}.bootstrap-min_sr-only__3wlTd{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.bootstrap-min_sr-only-focusable__3Y7wD:active,.bootstrap-min_sr-only-focusable__3Y7wD:focus{position:static;width:auto;height:auto;overflow:visible;clip:auto;white-space:normal}.bootstrap-min_shadow-sm__2r6KM{box-shadow:0 .125rem .25rem rgba(0,0,0,.075)!important}.bootstrap-min_shadow__3cbYX{box-shadow:0 .5rem 1rem rgba(0,0,0,.15)!important}.bootstrap-min_shadow-lg__5xa6b{box-shadow:0 1rem 3rem rgba(0,0,0,.175)!important}.bootstrap-min_shadow-none__3glcx{box-shadow:none!important}.bootstrap-min_w-25__3foLz{width:25%!important}.bootstrap-min_w-50__2Kwwf{width:50%!important}.bootstrap-min_w-75__1c-Bu{width:75%!important}.bootstrap-min_w-100__1KKYa{width:100%!important}.bootstrap-min_w-auto__2uf0M{width:auto!important}.bootstrap-min_h-25__1YO69{height:25%!important}.bootstrap-min_h-50__3KFih{height:50%!important}.bootstrap-min_h-75__2vP6h{height:75%!important}.bootstrap-min_h-100__1Kgav{height:100%!important}.bootstrap-min_h-auto__1xnmI{height:auto!important}.bootstrap-min_mw-100__1fxuS{max-width:100%!important}.bootstrap-min_mh-100__C3bL1{max-height:100%!important}.bootstrap-min_min-vw-100__3mFdt{min-width:100vw!important}.bootstrap-min_min-vh-100__3EWEb{min-height:100vh!important}.bootstrap-min_vw-100__MznRo{width:100vw!important}.bootstrap-min_vh-100__V_emT{height:100vh!important}.bootstrap-min_stretched-link__7EIlO::after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1;pointer-events:auto;content:\"\";background-color:rgba(0,0,0,0)}.bootstrap-min_m-0__3kbbd{margin:0!important}.bootstrap-min_mt-0__xfdvo,.bootstrap-min_my-0__1A0KQ{margin-top:0!important}.bootstrap-min_mr-0__1H-sU,.bootstrap-min_mx-0__2oZ-8{margin-right:0!important}.bootstrap-min_mb-0__2-fFq,.bootstrap-min_my-0__1A0KQ{margin-bottom:0!important}.bootstrap-min_ml-0__4VnOg,.bootstrap-min_mx-0__2oZ-8{margin-left:0!important}.bootstrap-min_m-1__b1X1L{margin:.25rem!important}.bootstrap-min_mt-1__mB9m5,.bootstrap-min_my-1__3Xj93{margin-top:.25rem!important}.bootstrap-min_mr-1__1odpH,.bootstrap-min_mx-1__HbHpc{margin-right:.25rem!important}.bootstrap-min_mb-1__1HytV,.bootstrap-min_my-1__3Xj93{margin-bottom:.25rem!important}.bootstrap-min_ml-1__3vL9R,.bootstrap-min_mx-1__HbHpc{margin-left:.25rem!important}.bootstrap-min_m-2__-hSQq{margin:.5rem!important}.bootstrap-min_mt-2__FgwhN,.bootstrap-min_my-2__XocYr{margin-top:.5rem!important}.bootstrap-min_mr-2__2Je_M,.bootstrap-min_mx-2__3q4WO{margin-right:.5rem!important}.bootstrap-min_mb-2__14Nlw,.bootstrap-min_my-2__XocYr{margin-bottom:.5rem!important}.bootstrap-min_ml-2__2LKEQ,.bootstrap-min_mx-2__3q4WO{margin-left:.5rem!important}.bootstrap-min_m-3__1DfZn{margin:1rem!important}.bootstrap-min_mt-3__3JFcX,.bootstrap-min_my-3__16PNZ{margin-top:1rem!important}.bootstrap-min_mr-3__2LO4p,.bootstrap-min_mx-3__3VDf8{margin-right:1rem!important}.bootstrap-min_mb-3__eddn3,.bootstrap-min_my-3__16PNZ{margin-bottom:1rem!important}.bootstrap-min_ml-3__10N_M,.bootstrap-min_mx-3__3VDf8{margin-left:1rem!important}.bootstrap-min_m-4__3u1qn{margin:1.5rem!important}.bootstrap-min_mt-4__37fwV,.bootstrap-min_my-4__369wi{margin-top:1.5rem!important}.bootstrap-min_mr-4__2K7ZG,.bootstrap-min_mx-4__Tibcj{margin-right:1.5rem!important}.bootstrap-min_mb-4__27mE3,.bootstrap-min_my-4__369wi{margin-bottom:1.5rem!important}.bootstrap-min_ml-4__RjhRP,.bootstrap-min_mx-4__Tibcj{margin-left:1.5rem!important}.bootstrap-min_m-5__3twjl{margin:3rem!important}.bootstrap-min_mt-5__PsGNt,.bootstrap-min_my-5__37D-H{margin-top:3rem!important}.bootstrap-min_mr-5__-9-1o,.bootstrap-min_mx-5__1fbh8{margin-right:3rem!important}.bootstrap-min_mb-5__kdV56,.bootstrap-min_my-5__37D-H{margin-bottom:3rem!important}.bootstrap-min_ml-5__2avzT,.bootstrap-min_mx-5__1fbh8{margin-left:3rem!important}.bootstrap-min_p-0__33fMn{padding:0!important}.bootstrap-min_pt-0__1c5U2,.bootstrap-min_py-0__2uU6i{padding-top:0!important}.bootstrap-min_pr-0__2HOdm,.bootstrap-min_px-0__1SF4g{padding-right:0!important}.bootstrap-min_pb-0__SAp-O,.bootstrap-min_py-0__2uU6i{padding-bottom:0!important}.bootstrap-min_pl-0__3IZsT,.bootstrap-min_px-0__1SF4g{padding-left:0!important}.bootstrap-min_p-1__3aT2Z{padding:.25rem!important}.bootstrap-min_pt-1__dCGYB,.bootstrap-min_py-1__3p_VK{padding-top:.25rem!important}.bootstrap-min_pr-1__1AtZd,.bootstrap-min_px-1__1akff{padding-right:.25rem!important}.bootstrap-min_pb-1__1852x,.bootstrap-min_py-1__3p_VK{padding-bottom:.25rem!important}.bootstrap-min_pl-1__1ATV5,.bootstrap-min_px-1__1akff{padding-left:.25rem!important}.bootstrap-min_p-2__zsQ_f{padding:.5rem!important}.bootstrap-min_pt-2__9v4OL,.bootstrap-min_py-2__pLxa4{padding-top:.5rem!important}.bootstrap-min_pr-2__1mwEg,.bootstrap-min_px-2__38nOV{padding-right:.5rem!important}.bootstrap-min_pb-2__2c_S5,.bootstrap-min_py-2__pLxa4{padding-bottom:.5rem!important}.bootstrap-min_pl-2__3JhQ6,.bootstrap-min_px-2__38nOV{padding-left:.5rem!important}.bootstrap-min_p-3__2ickh{padding:1rem!important}.bootstrap-min_pt-3__3JVa7,.bootstrap-min_py-3__J2iAq{padding-top:1rem!important}.bootstrap-min_pr-3__1i9Qw,.bootstrap-min_px-3__3Rpzg{padding-right:1rem!important}.bootstrap-min_pb-3__2Sz6F,.bootstrap-min_py-3__J2iAq{padding-bottom:1rem!important}.bootstrap-min_pl-3__YIGQW,.bootstrap-min_px-3__3Rpzg{padding-left:1rem!important}.bootstrap-min_p-4__36BRa{padding:1.5rem!important}.bootstrap-min_pt-4__3INIx,.bootstrap-min_py-4__13g-u{padding-top:1.5rem!important}.bootstrap-min_pr-4__3WCbC,.bootstrap-min_px-4__31Emi{padding-right:1.5rem!important}.bootstrap-min_pb-4__kZMl8,.bootstrap-min_py-4__13g-u{padding-bottom:1.5rem!important}.bootstrap-min_pl-4__2HFia,.bootstrap-min_px-4__31Emi{padding-left:1.5rem!important}.bootstrap-min_p-5__16h6p{padding:3rem!important}.bootstrap-min_pt-5__2F3b1,.bootstrap-min_py-5__1JxIt{padding-top:3rem!important}.bootstrap-min_pr-5__3B6e3,.bootstrap-min_px-5__U1_cm{padding-right:3rem!important}.bootstrap-min_pb-5__2iN6L,.bootstrap-min_py-5__1JxIt{padding-bottom:3rem!important}.bootstrap-min_pl-5__3H-Q8,.bootstrap-min_px-5__U1_cm{padding-left:3rem!important}.bootstrap-min_m-n1__3elIa{margin:-.25rem!important}.bootstrap-min_mt-n1__VzOFj,.bootstrap-min_my-n1__2BSQy{margin-top:-.25rem!important}.bootstrap-min_mr-n1__bubJi,.bootstrap-min_mx-n1__20kCl{margin-right:-.25rem!important}.bootstrap-min_mb-n1__16cAH,.bootstrap-min_my-n1__2BSQy{margin-bottom:-.25rem!important}.bootstrap-min_ml-n1__1JWii,.bootstrap-min_mx-n1__20kCl{margin-left:-.25rem!important}.bootstrap-min_m-n2__2fpPl{margin:-.5rem!important}.bootstrap-min_mt-n2__3fhP9,.bootstrap-min_my-n2__17PVE{margin-top:-.5rem!important}.bootstrap-min_mr-n2__aaTZP,.bootstrap-min_mx-n2__znYOd{margin-right:-.5rem!important}.bootstrap-min_mb-n2__67PVG,.bootstrap-min_my-n2__17PVE{margin-bottom:-.5rem!important}.bootstrap-min_ml-n2__Uk6O7,.bootstrap-min_mx-n2__znYOd{margin-left:-.5rem!important}.bootstrap-min_m-n3__36TEU{margin:-1rem!important}.bootstrap-min_mt-n3__qHg5j,.bootstrap-min_my-n3__eccvp{margin-top:-1rem!important}.bootstrap-min_mr-n3__3NW1v,.bootstrap-min_mx-n3__3NAb6{margin-right:-1rem!important}.bootstrap-min_mb-n3__1gMRS,.bootstrap-min_my-n3__eccvp{margin-bottom:-1rem!important}.bootstrap-min_ml-n3__h8vt0,.bootstrap-min_mx-n3__3NAb6{margin-left:-1rem!important}.bootstrap-min_m-n4___b7Hn{margin:-1.5rem!important}.bootstrap-min_mt-n4__pAggf,.bootstrap-min_my-n4__24UqF{margin-top:-1.5rem!important}.bootstrap-min_mr-n4__1YA3M,.bootstrap-min_mx-n4__qopJO{margin-right:-1.5rem!important}.bootstrap-min_mb-n4__3jBsD,.bootstrap-min_my-n4__24UqF{margin-bottom:-1.5rem!important}.bootstrap-min_ml-n4__1lJRf,.bootstrap-min_mx-n4__qopJO{margin-left:-1.5rem!important}.bootstrap-min_m-n5__3YWo6{margin:-3rem!important}.bootstrap-min_mt-n5__3uFzB,.bootstrap-min_my-n5__1LKx3{margin-top:-3rem!important}.bootstrap-min_mr-n5__2mPr-,.bootstrap-min_mx-n5__14tFQ{margin-right:-3rem!important}.bootstrap-min_mb-n5__12Mex,.bootstrap-min_my-n5__1LKx3{margin-bottom:-3rem!important}.bootstrap-min_ml-n5__1HdeP,.bootstrap-min_mx-n5__14tFQ{margin-left:-3rem!important}.bootstrap-min_m-auto__GSqcq{margin:auto!important}.bootstrap-min_mt-auto__30Kb9,.bootstrap-min_my-auto__PqUDw{margin-top:auto!important}.bootstrap-min_mr-auto__2BOD-,.bootstrap-min_mx-auto__-PUlj{margin-right:auto!important}.bootstrap-min_mb-auto__1YGQP,.bootstrap-min_my-auto__PqUDw{margin-bottom:auto!important}.bootstrap-min_ml-auto__TEqF8,.bootstrap-min_mx-auto__-PUlj{margin-left:auto!important}@media (min-width:576px){.bootstrap-min_m-sm-0__2GHVp{margin:0!important}.bootstrap-min_mt-sm-0__v9Gdz,.bootstrap-min_my-sm-0__annru{margin-top:0!important}.bootstrap-min_mr-sm-0__3lyv4,.bootstrap-min_mx-sm-0__3TbAy{margin-right:0!important}.bootstrap-min_mb-sm-0__3SZ32,.bootstrap-min_my-sm-0__annru{margin-bottom:0!important}.bootstrap-min_ml-sm-0__3HGyF,.bootstrap-min_mx-sm-0__3TbAy{margin-left:0!important}.bootstrap-min_m-sm-1__2ko2g{margin:.25rem!important}.bootstrap-min_mt-sm-1__2PF4F,.bootstrap-min_my-sm-1__3XhcH{margin-top:.25rem!important}.bootstrap-min_mr-sm-1__3hWtr,.bootstrap-min_mx-sm-1__3CjrE{margin-right:.25rem!important}.bootstrap-min_mb-sm-1__t31hg,.bootstrap-min_my-sm-1__3XhcH{margin-bottom:.25rem!important}.bootstrap-min_ml-sm-1__21WQS,.bootstrap-min_mx-sm-1__3CjrE{margin-left:.25rem!important}.bootstrap-min_m-sm-2__2Gtdg{margin:.5rem!important}.bootstrap-min_mt-sm-2__3kOkj,.bootstrap-min_my-sm-2__gxOK3{margin-top:.5rem!important}.bootstrap-min_mr-sm-2__2JNXg,.bootstrap-min_mx-sm-2__38v1E{margin-right:.5rem!important}.bootstrap-min_mb-sm-2__24uN0,.bootstrap-min_my-sm-2__gxOK3{margin-bottom:.5rem!important}.bootstrap-min_ml-sm-2__3ti4J,.bootstrap-min_mx-sm-2__38v1E{margin-left:.5rem!important}.bootstrap-min_m-sm-3__1IwQx{margin:1rem!important}.bootstrap-min_mt-sm-3__22lF6,.bootstrap-min_my-sm-3__3WhnH{margin-top:1rem!important}.bootstrap-min_mr-sm-3__3WPXe,.bootstrap-min_mx-sm-3__2BTkb{margin-right:1rem!important}.bootstrap-min_mb-sm-3__1PLZt,.bootstrap-min_my-sm-3__3WhnH{margin-bottom:1rem!important}.bootstrap-min_ml-sm-3__eWtPF,.bootstrap-min_mx-sm-3__2BTkb{margin-left:1rem!important}.bootstrap-min_m-sm-4__3ea-_{margin:1.5rem!important}.bootstrap-min_mt-sm-4__1V9_w,.bootstrap-min_my-sm-4__2yNVm{margin-top:1.5rem!important}.bootstrap-min_mr-sm-4__1YDRm,.bootstrap-min_mx-sm-4__2AINU{margin-right:1.5rem!important}.bootstrap-min_mb-sm-4__V4P_G,.bootstrap-min_my-sm-4__2yNVm{margin-bottom:1.5rem!important}.bootstrap-min_ml-sm-4__39A5O,.bootstrap-min_mx-sm-4__2AINU{margin-left:1.5rem!important}.bootstrap-min_m-sm-5__1pI53{margin:3rem!important}.bootstrap-min_mt-sm-5__3p6le,.bootstrap-min_my-sm-5__ozsTy{margin-top:3rem!important}.bootstrap-min_mr-sm-5__1m_e0,.bootstrap-min_mx-sm-5__YXPvT{margin-right:3rem!important}.bootstrap-min_mb-sm-5__3PiN1,.bootstrap-min_my-sm-5__ozsTy{margin-bottom:3rem!important}.bootstrap-min_ml-sm-5__2IdY5,.bootstrap-min_mx-sm-5__YXPvT{margin-left:3rem!important}.bootstrap-min_p-sm-0__3Y0DC{padding:0!important}.bootstrap-min_pt-sm-0__1SGks,.bootstrap-min_py-sm-0___Rn2C{padding-top:0!important}.bootstrap-min_pr-sm-0__VD9xu,.bootstrap-min_px-sm-0__34OZ6{padding-right:0!important}.bootstrap-min_pb-sm-0__CwXOD,.bootstrap-min_py-sm-0___Rn2C{padding-bottom:0!important}.bootstrap-min_pl-sm-0__1r-RZ,.bootstrap-min_px-sm-0__34OZ6{padding-left:0!important}.bootstrap-min_p-sm-1__2B7pw{padding:.25rem!important}.bootstrap-min_pt-sm-1__S7-G0,.bootstrap-min_py-sm-1__1gR77{padding-top:.25rem!important}.bootstrap-min_pr-sm-1__13gpm,.bootstrap-min_px-sm-1__2w7OT{padding-right:.25rem!important}.bootstrap-min_pb-sm-1__1Z7d5,.bootstrap-min_py-sm-1__1gR77{padding-bottom:.25rem!important}.bootstrap-min_pl-sm-1__16Fam,.bootstrap-min_px-sm-1__2w7OT{padding-left:.25rem!important}.bootstrap-min_p-sm-2__xxTVj{padding:.5rem!important}.bootstrap-min_pt-sm-2__2bR0N,.bootstrap-min_py-sm-2__2u97t{padding-top:.5rem!important}.bootstrap-min_pr-sm-2__3f9DE,.bootstrap-min_px-sm-2__2ZAV_{padding-right:.5rem!important}.bootstrap-min_pb-sm-2__1S6qd,.bootstrap-min_py-sm-2__2u97t{padding-bottom:.5rem!important}.bootstrap-min_pl-sm-2__3xGLF,.bootstrap-min_px-sm-2__2ZAV_{padding-left:.5rem!important}.bootstrap-min_p-sm-3__2s5SD{padding:1rem!important}.bootstrap-min_pt-sm-3__2p5Cy,.bootstrap-min_py-sm-3__3dZRL{padding-top:1rem!important}.bootstrap-min_pr-sm-3__58_yW,.bootstrap-min_px-sm-3__9dnUw{padding-right:1rem!important}.bootstrap-min_pb-sm-3__1l3zH,.bootstrap-min_py-sm-3__3dZRL{padding-bottom:1rem!important}.bootstrap-min_pl-sm-3__1mBfB,.bootstrap-min_px-sm-3__9dnUw{padding-left:1rem!important}.bootstrap-min_p-sm-4__2mWCX{padding:1.5rem!important}.bootstrap-min_pt-sm-4__2JOXc,.bootstrap-min_py-sm-4__3j84j{padding-top:1.5rem!important}.bootstrap-min_pr-sm-4__1KdGe,.bootstrap-min_px-sm-4__3hJ7m{padding-right:1.5rem!important}.bootstrap-min_pb-sm-4__2iOyd,.bootstrap-min_py-sm-4__3j84j{padding-bottom:1.5rem!important}.bootstrap-min_pl-sm-4__yKwXi,.bootstrap-min_px-sm-4__3hJ7m{padding-left:1.5rem!important}.bootstrap-min_p-sm-5__11QoJ{padding:3rem!important}.bootstrap-min_pt-sm-5__1kwyw,.bootstrap-min_py-sm-5__1ob1N{padding-top:3rem!important}.bootstrap-min_pr-sm-5__3k_TZ,.bootstrap-min_px-sm-5__1FnBM{padding-right:3rem!important}.bootstrap-min_pb-sm-5__2R23Z,.bootstrap-min_py-sm-5__1ob1N{padding-bottom:3rem!important}.bootstrap-min_pl-sm-5__21Xnl,.bootstrap-min_px-sm-5__1FnBM{padding-left:3rem!important}.bootstrap-min_m-sm-n1__34ndX{margin:-.25rem!important}.bootstrap-min_mt-sm-n1__1AcUQ,.bootstrap-min_my-sm-n1__1D1nj{margin-top:-.25rem!important}.bootstrap-min_mr-sm-n1__32pzI,.bootstrap-min_mx-sm-n1__yYauG{margin-right:-.25rem!important}.bootstrap-min_mb-sm-n1__2NVKU,.bootstrap-min_my-sm-n1__1D1nj{margin-bottom:-.25rem!important}.bootstrap-min_ml-sm-n1__iWZeK,.bootstrap-min_mx-sm-n1__yYauG{margin-left:-.25rem!important}.bootstrap-min_m-sm-n2__27dEJ{margin:-.5rem!important}.bootstrap-min_mt-sm-n2__227mR,.bootstrap-min_my-sm-n2__j1Rcy{margin-top:-.5rem!important}.bootstrap-min_mr-sm-n2__1qMZM,.bootstrap-min_mx-sm-n2__3XAtp{margin-right:-.5rem!important}.bootstrap-min_mb-sm-n2__3kEJ0,.bootstrap-min_my-sm-n2__j1Rcy{margin-bottom:-.5rem!important}.bootstrap-min_ml-sm-n2__A-Jk1,.bootstrap-min_mx-sm-n2__3XAtp{margin-left:-.5rem!important}.bootstrap-min_m-sm-n3__1Piu3{margin:-1rem!important}.bootstrap-min_mt-sm-n3__2IKJb,.bootstrap-min_my-sm-n3__Fa8gK{margin-top:-1rem!important}.bootstrap-min_mr-sm-n3__3joHB,.bootstrap-min_mx-sm-n3__2heav{margin-right:-1rem!important}.bootstrap-min_mb-sm-n3__38Pwc,.bootstrap-min_my-sm-n3__Fa8gK{margin-bottom:-1rem!important}.bootstrap-min_ml-sm-n3__2kCHi,.bootstrap-min_mx-sm-n3__2heav{margin-left:-1rem!important}.bootstrap-min_m-sm-n4__2Q_oV{margin:-1.5rem!important}.bootstrap-min_mt-sm-n4__2DqYW,.bootstrap-min_my-sm-n4__xXV6o{margin-top:-1.5rem!important}.bootstrap-min_mr-sm-n4__N6IHI,.bootstrap-min_mx-sm-n4__2e1Rl{margin-right:-1.5rem!important}.bootstrap-min_mb-sm-n4__5w3SF,.bootstrap-min_my-sm-n4__xXV6o{margin-bottom:-1.5rem!important}.bootstrap-min_ml-sm-n4__2-Xcq,.bootstrap-min_mx-sm-n4__2e1Rl{margin-left:-1.5rem!important}.bootstrap-min_m-sm-n5__2ku-A{margin:-3rem!important}.bootstrap-min_mt-sm-n5__1XyuO,.bootstrap-min_my-sm-n5__2UEOs{margin-top:-3rem!important}.bootstrap-min_mr-sm-n5__2rth1,.bootstrap-min_mx-sm-n5__3SHhn{margin-right:-3rem!important}.bootstrap-min_mb-sm-n5__1ZtDY,.bootstrap-min_my-sm-n5__2UEOs{margin-bottom:-3rem!important}.bootstrap-min_ml-sm-n5__3weKg,.bootstrap-min_mx-sm-n5__3SHhn{margin-left:-3rem!important}.bootstrap-min_m-sm-auto__1bnmD{margin:auto!important}.bootstrap-min_mt-sm-auto__3enII,.bootstrap-min_my-sm-auto__B5jWj{margin-top:auto!important}.bootstrap-min_mr-sm-auto__SuOhb,.bootstrap-min_mx-sm-auto__3LNte{margin-right:auto!important}.bootstrap-min_mb-sm-auto__2uhf4,.bootstrap-min_my-sm-auto__B5jWj{margin-bottom:auto!important}.bootstrap-min_ml-sm-auto__3qdvi,.bootstrap-min_mx-sm-auto__3LNte{margin-left:auto!important}}@media (min-width:768px){.bootstrap-min_m-md-0__1nCS6{margin:0!important}.bootstrap-min_mt-md-0__3KiGH,.bootstrap-min_my-md-0__2igB-{margin-top:0!important}.bootstrap-min_mr-md-0__1Gc6X,.bootstrap-min_mx-md-0__cGmaJ{margin-right:0!important}.bootstrap-min_mb-md-0__2_pVn,.bootstrap-min_my-md-0__2igB-{margin-bottom:0!important}.bootstrap-min_ml-md-0__VrI48,.bootstrap-min_mx-md-0__cGmaJ{margin-left:0!important}.bootstrap-min_m-md-1__1qtxz{margin:.25rem!important}.bootstrap-min_mt-md-1__XPNru,.bootstrap-min_my-md-1__znPWP{margin-top:.25rem!important}.bootstrap-min_mr-md-1__2tlTR,.bootstrap-min_mx-md-1__1nukR{margin-right:.25rem!important}.bootstrap-min_mb-md-1__3xdhG,.bootstrap-min_my-md-1__znPWP{margin-bottom:.25rem!important}.bootstrap-min_ml-md-1__2nT0T,.bootstrap-min_mx-md-1__1nukR{margin-left:.25rem!important}.bootstrap-min_m-md-2__19WzS{margin:.5rem!important}.bootstrap-min_mt-md-2__1m7yn,.bootstrap-min_my-md-2__H8DZz{margin-top:.5rem!important}.bootstrap-min_mr-md-2__3JfbU,.bootstrap-min_mx-md-2__3-0XL{margin-right:.5rem!important}.bootstrap-min_mb-md-2__2zVz8,.bootstrap-min_my-md-2__H8DZz{margin-bottom:.5rem!important}.bootstrap-min_ml-md-2__AWBzY,.bootstrap-min_mx-md-2__3-0XL{margin-left:.5rem!important}.bootstrap-min_m-md-3__2Z8hn{margin:1rem!important}.bootstrap-min_mt-md-3__37g2X,.bootstrap-min_my-md-3__1rEwf{margin-top:1rem!important}.bootstrap-min_mr-md-3__30-_n,.bootstrap-min_mx-md-3__2LNdx{margin-right:1rem!important}.bootstrap-min_mb-md-3__1TUmo,.bootstrap-min_my-md-3__1rEwf{margin-bottom:1rem!important}.bootstrap-min_ml-md-3__Nw_jf,.bootstrap-min_mx-md-3__2LNdx{margin-left:1rem!important}.bootstrap-min_m-md-4__1Pg11{margin:1.5rem!important}.bootstrap-min_mt-md-4__2SpRO,.bootstrap-min_my-md-4__ZQzFO{margin-top:1.5rem!important}.bootstrap-min_mr-md-4__1gdcU,.bootstrap-min_mx-md-4__2UTJu{margin-right:1.5rem!important}.bootstrap-min_mb-md-4__1QTMd,.bootstrap-min_my-md-4__ZQzFO{margin-bottom:1.5rem!important}.bootstrap-min_ml-md-4__2qDVW,.bootstrap-min_mx-md-4__2UTJu{margin-left:1.5rem!important}.bootstrap-min_m-md-5__fEiqb{margin:3rem!important}.bootstrap-min_mt-md-5__m9LnR,.bootstrap-min_my-md-5__2cWQU{margin-top:3rem!important}.bootstrap-min_mr-md-5__3JbvU,.bootstrap-min_mx-md-5__3MI0A{margin-right:3rem!important}.bootstrap-min_mb-md-5__1h5Zy,.bootstrap-min_my-md-5__2cWQU{margin-bottom:3rem!important}.bootstrap-min_ml-md-5__1G_qo,.bootstrap-min_mx-md-5__3MI0A{margin-left:3rem!important}.bootstrap-min_p-md-0__1KqDA{padding:0!important}.bootstrap-min_pt-md-0__6_tfI,.bootstrap-min_py-md-0__1AmpJ{padding-top:0!important}.bootstrap-min_pr-md-0__2BRSX,.bootstrap-min_px-md-0__3vshK{padding-right:0!important}.bootstrap-min_pb-md-0__3RRgg,.bootstrap-min_py-md-0__1AmpJ{padding-bottom:0!important}.bootstrap-min_pl-md-0__ath6R,.bootstrap-min_px-md-0__3vshK{padding-left:0!important}.bootstrap-min_p-md-1__D0N3Z{padding:.25rem!important}.bootstrap-min_pt-md-1__30IzU,.bootstrap-min_py-md-1__1viW5{padding-top:.25rem!important}.bootstrap-min_pr-md-1__74unF,.bootstrap-min_px-md-1__3AEiK{padding-right:.25rem!important}.bootstrap-min_pb-md-1__18_UX,.bootstrap-min_py-md-1__1viW5{padding-bottom:.25rem!important}.bootstrap-min_pl-md-1__2pwU7,.bootstrap-min_px-md-1__3AEiK{padding-left:.25rem!important}.bootstrap-min_p-md-2__3_Iwu{padding:.5rem!important}.bootstrap-min_pt-md-2__3zbde,.bootstrap-min_py-md-2__1cjO7{padding-top:.5rem!important}.bootstrap-min_pr-md-2__2cjsU,.bootstrap-min_px-md-2__I4Omo{padding-right:.5rem!important}.bootstrap-min_pb-md-2__3FFIZ,.bootstrap-min_py-md-2__1cjO7{padding-bottom:.5rem!important}.bootstrap-min_pl-md-2__U4UDm,.bootstrap-min_px-md-2__I4Omo{padding-left:.5rem!important}.bootstrap-min_p-md-3__2S0Vs{padding:1rem!important}.bootstrap-min_pt-md-3__65v_w,.bootstrap-min_py-md-3__3Hb_v{padding-top:1rem!important}.bootstrap-min_pr-md-3__3ce7o,.bootstrap-min_px-md-3__RYom3{padding-right:1rem!important}.bootstrap-min_pb-md-3__1QcQ0,.bootstrap-min_py-md-3__3Hb_v{padding-bottom:1rem!important}.bootstrap-min_pl-md-3__1wEWs,.bootstrap-min_px-md-3__RYom3{padding-left:1rem!important}.bootstrap-min_p-md-4__3RqFo{padding:1.5rem!important}.bootstrap-min_pt-md-4__2BuhA,.bootstrap-min_py-md-4__yyZeZ{padding-top:1.5rem!important}.bootstrap-min_pr-md-4__1X20D,.bootstrap-min_px-md-4__1mIIf{padding-right:1.5rem!important}.bootstrap-min_pb-md-4__1NalS,.bootstrap-min_py-md-4__yyZeZ{padding-bottom:1.5rem!important}.bootstrap-min_pl-md-4__10TSx,.bootstrap-min_px-md-4__1mIIf{padding-left:1.5rem!important}.bootstrap-min_p-md-5__251Ok{padding:3rem!important}.bootstrap-min_pt-md-5__1Qb-R,.bootstrap-min_py-md-5__29S9e{padding-top:3rem!important}.bootstrap-min_pr-md-5__21FL3,.bootstrap-min_px-md-5__2gODS{padding-right:3rem!important}.bootstrap-min_pb-md-5__3J4FH,.bootstrap-min_py-md-5__29S9e{padding-bottom:3rem!important}.bootstrap-min_pl-md-5__2zJG6,.bootstrap-min_px-md-5__2gODS{padding-left:3rem!important}.bootstrap-min_m-md-n1__1tEl6{margin:-.25rem!important}.bootstrap-min_mt-md-n1__3oT0l,.bootstrap-min_my-md-n1__1b4iz{margin-top:-.25rem!important}.bootstrap-min_mr-md-n1__t-Rke,.bootstrap-min_mx-md-n1__3ppct{margin-right:-.25rem!important}.bootstrap-min_mb-md-n1__EoAba,.bootstrap-min_my-md-n1__1b4iz{margin-bottom:-.25rem!important}.bootstrap-min_ml-md-n1__1Vmwp,.bootstrap-min_mx-md-n1__3ppct{margin-left:-.25rem!important}.bootstrap-min_m-md-n2__1IeTx{margin:-.5rem!important}.bootstrap-min_mt-md-n2__1LyXG,.bootstrap-min_my-md-n2__1TLyU{margin-top:-.5rem!important}.bootstrap-min_mr-md-n2__34-YR,.bootstrap-min_mx-md-n2__1O6zv{margin-right:-.5rem!important}.bootstrap-min_mb-md-n2__2THEU,.bootstrap-min_my-md-n2__1TLyU{margin-bottom:-.5rem!important}.bootstrap-min_ml-md-n2__2bn1P,.bootstrap-min_mx-md-n2__1O6zv{margin-left:-.5rem!important}.bootstrap-min_m-md-n3__yurGT{margin:-1rem!important}.bootstrap-min_mt-md-n3__bulHj,.bootstrap-min_my-md-n3__Fc5Ds{margin-top:-1rem!important}.bootstrap-min_mr-md-n3__wqZYo,.bootstrap-min_mx-md-n3__3SMnK{margin-right:-1rem!important}.bootstrap-min_mb-md-n3__qYQDs,.bootstrap-min_my-md-n3__Fc5Ds{margin-bottom:-1rem!important}.bootstrap-min_ml-md-n3__3MLWT,.bootstrap-min_mx-md-n3__3SMnK{margin-left:-1rem!important}.bootstrap-min_m-md-n4__YLlgJ{margin:-1.5rem!important}.bootstrap-min_mt-md-n4__2VcmG,.bootstrap-min_my-md-n4__1n2cW{margin-top:-1.5rem!important}.bootstrap-min_mr-md-n4__3UtQT,.bootstrap-min_mx-md-n4__53yBs{margin-right:-1.5rem!important}.bootstrap-min_mb-md-n4__ObYwt,.bootstrap-min_my-md-n4__1n2cW{margin-bottom:-1.5rem!important}.bootstrap-min_ml-md-n4__3iJ9D,.bootstrap-min_mx-md-n4__53yBs{margin-left:-1.5rem!important}.bootstrap-min_m-md-n5__GosZK{margin:-3rem!important}.bootstrap-min_mt-md-n5__3zUQK,.bootstrap-min_my-md-n5__1EQFV{margin-top:-3rem!important}.bootstrap-min_mr-md-n5__2554R,.bootstrap-min_mx-md-n5__gfc1q{margin-right:-3rem!important}.bootstrap-min_mb-md-n5__1xCdJ,.bootstrap-min_my-md-n5__1EQFV{margin-bottom:-3rem!important}.bootstrap-min_ml-md-n5__H6fog,.bootstrap-min_mx-md-n5__gfc1q{margin-left:-3rem!important}.bootstrap-min_m-md-auto__uiIqU{margin:auto!important}.bootstrap-min_mt-md-auto__1-RVh,.bootstrap-min_my-md-auto__1WgRH{margin-top:auto!important}.bootstrap-min_mr-md-auto__22EZu,.bootstrap-min_mx-md-auto__2yr1M{margin-right:auto!important}.bootstrap-min_mb-md-auto__3pYNh,.bootstrap-min_my-md-auto__1WgRH{margin-bottom:auto!important}.bootstrap-min_ml-md-auto__-I-Gk,.bootstrap-min_mx-md-auto__2yr1M{margin-left:auto!important}}@media (min-width:992px){.bootstrap-min_m-lg-0__2ITEU{margin:0!important}.bootstrap-min_mt-lg-0__20UQv,.bootstrap-min_my-lg-0__2Qjkq{margin-top:0!important}.bootstrap-min_mr-lg-0__31mZK,.bootstrap-min_mx-lg-0__JzI58{margin-right:0!important}.bootstrap-min_mb-lg-0__30kef,.bootstrap-min_my-lg-0__2Qjkq{margin-bottom:0!important}.bootstrap-min_ml-lg-0__3rWbW,.bootstrap-min_mx-lg-0__JzI58{margin-left:0!important}.bootstrap-min_m-lg-1__29l_J{margin:.25rem!important}.bootstrap-min_mt-lg-1__XaL4H,.bootstrap-min_my-lg-1__2qFvk{margin-top:.25rem!important}.bootstrap-min_mr-lg-1__1yArd,.bootstrap-min_mx-lg-1__31AIW{margin-right:.25rem!important}.bootstrap-min_mb-lg-1__3ajCA,.bootstrap-min_my-lg-1__2qFvk{margin-bottom:.25rem!important}.bootstrap-min_ml-lg-1__3bw7U,.bootstrap-min_mx-lg-1__31AIW{margin-left:.25rem!important}.bootstrap-min_m-lg-2__1UsP-{margin:.5rem!important}.bootstrap-min_mt-lg-2__2UEmF,.bootstrap-min_my-lg-2__33E8V{margin-top:.5rem!important}.bootstrap-min_mr-lg-2__19iND,.bootstrap-min_mx-lg-2__mILZV{margin-right:.5rem!important}.bootstrap-min_mb-lg-2__2Iag1,.bootstrap-min_my-lg-2__33E8V{margin-bottom:.5rem!important}.bootstrap-min_ml-lg-2__1tZ3C,.bootstrap-min_mx-lg-2__mILZV{margin-left:.5rem!important}.bootstrap-min_m-lg-3__3AsLd{margin:1rem!important}.bootstrap-min_mt-lg-3__3makX,.bootstrap-min_my-lg-3__2zxDq{margin-top:1rem!important}.bootstrap-min_mr-lg-3__12qo1,.bootstrap-min_mx-lg-3__1L4xn{margin-right:1rem!important}.bootstrap-min_mb-lg-3__8TFxZ,.bootstrap-min_my-lg-3__2zxDq{margin-bottom:1rem!important}.bootstrap-min_ml-lg-3__3PCmW,.bootstrap-min_mx-lg-3__1L4xn{margin-left:1rem!important}.bootstrap-min_m-lg-4__ax_kP{margin:1.5rem!important}.bootstrap-min_mt-lg-4__UZrqR,.bootstrap-min_my-lg-4__25wAF{margin-top:1.5rem!important}.bootstrap-min_mr-lg-4__1Q7C0,.bootstrap-min_mx-lg-4__3ASyG{margin-right:1.5rem!important}.bootstrap-min_mb-lg-4__DluXz,.bootstrap-min_my-lg-4__25wAF{margin-bottom:1.5rem!important}.bootstrap-min_ml-lg-4__1Gbgm,.bootstrap-min_mx-lg-4__3ASyG{margin-left:1.5rem!important}.bootstrap-min_m-lg-5__3ShYG{margin:3rem!important}.bootstrap-min_mt-lg-5__19mti,.bootstrap-min_my-lg-5__VJm7m{margin-top:3rem!important}.bootstrap-min_mr-lg-5__3hDqQ,.bootstrap-min_mx-lg-5__1fGex{margin-right:3rem!important}.bootstrap-min_mb-lg-5__XCMhi,.bootstrap-min_my-lg-5__VJm7m{margin-bottom:3rem!important}.bootstrap-min_ml-lg-5__2avvW,.bootstrap-min_mx-lg-5__1fGex{margin-left:3rem!important}.bootstrap-min_p-lg-0__1YEld{padding:0!important}.bootstrap-min_pt-lg-0__1oaA9,.bootstrap-min_py-lg-0__3Ulkb{padding-top:0!important}.bootstrap-min_pr-lg-0__3m4To,.bootstrap-min_px-lg-0__3m4YX{padding-right:0!important}.bootstrap-min_pb-lg-0__2ln4b,.bootstrap-min_py-lg-0__3Ulkb{padding-bottom:0!important}.bootstrap-min_pl-lg-0__3EUcq,.bootstrap-min_px-lg-0__3m4YX{padding-left:0!important}.bootstrap-min_p-lg-1__20Fj_{padding:.25rem!important}.bootstrap-min_pt-lg-1__1TTsv,.bootstrap-min_py-lg-1__O_L8X{padding-top:.25rem!important}.bootstrap-min_pr-lg-1__2HiBQ,.bootstrap-min_px-lg-1__1PNQ5{padding-right:.25rem!important}.bootstrap-min_pb-lg-1__1NNR-,.bootstrap-min_py-lg-1__O_L8X{padding-bottom:.25rem!important}.bootstrap-min_pl-lg-1__13tlD,.bootstrap-min_px-lg-1__1PNQ5{padding-left:.25rem!important}.bootstrap-min_p-lg-2__2rWW3{padding:.5rem!important}.bootstrap-min_pt-lg-2__3e-Dz,.bootstrap-min_py-lg-2__32-dO{padding-top:.5rem!important}.bootstrap-min_pr-lg-2__1XcVQ,.bootstrap-min_px-lg-2__1OFN1{padding-right:.5rem!important}.bootstrap-min_pb-lg-2__2uXfP,.bootstrap-min_py-lg-2__32-dO{padding-bottom:.5rem!important}.bootstrap-min_pl-lg-2__3flvs,.bootstrap-min_px-lg-2__1OFN1{padding-left:.5rem!important}.bootstrap-min_p-lg-3__2ZkMm{padding:1rem!important}.bootstrap-min_pt-lg-3__CXqcY,.bootstrap-min_py-lg-3__2qQyi{padding-top:1rem!important}.bootstrap-min_pr-lg-3__3m-Hb,.bootstrap-min_px-lg-3__ugJIj{padding-right:1rem!important}.bootstrap-min_pb-lg-3__r33xW,.bootstrap-min_py-lg-3__2qQyi{padding-bottom:1rem!important}.bootstrap-min_pl-lg-3__3RS-f,.bootstrap-min_px-lg-3__ugJIj{padding-left:1rem!important}.bootstrap-min_p-lg-4__2mzlF{padding:1.5rem!important}.bootstrap-min_pt-lg-4__1l_MH,.bootstrap-min_py-lg-4__29MPs{padding-top:1.5rem!important}.bootstrap-min_pr-lg-4__3XxH4,.bootstrap-min_px-lg-4__3XUBN{padding-right:1.5rem!important}.bootstrap-min_pb-lg-4__24VKg,.bootstrap-min_py-lg-4__29MPs{padding-bottom:1.5rem!important}.bootstrap-min_pl-lg-4__3YqG5,.bootstrap-min_px-lg-4__3XUBN{padding-left:1.5rem!important}.bootstrap-min_p-lg-5__2Fsig{padding:3rem!important}.bootstrap-min_pt-lg-5__1Ogzb,.bootstrap-min_py-lg-5__3g39X{padding-top:3rem!important}.bootstrap-min_pr-lg-5__1dBHS,.bootstrap-min_px-lg-5__1vFmL{padding-right:3rem!important}.bootstrap-min_pb-lg-5__3GJOb,.bootstrap-min_py-lg-5__3g39X{padding-bottom:3rem!important}.bootstrap-min_pl-lg-5__2YG7G,.bootstrap-min_px-lg-5__1vFmL{padding-left:3rem!important}.bootstrap-min_m-lg-n1__3g5rN{margin:-.25rem!important}.bootstrap-min_mt-lg-n1__28VDg,.bootstrap-min_my-lg-n1__ycaDs{margin-top:-.25rem!important}.bootstrap-min_mr-lg-n1__1bVWh,.bootstrap-min_mx-lg-n1__2DBJq{margin-right:-.25rem!important}.bootstrap-min_mb-lg-n1__SekPy,.bootstrap-min_my-lg-n1__ycaDs{margin-bottom:-.25rem!important}.bootstrap-min_ml-lg-n1__29K1p,.bootstrap-min_mx-lg-n1__2DBJq{margin-left:-.25rem!important}.bootstrap-min_m-lg-n2__1yu0O{margin:-.5rem!important}.bootstrap-min_mt-lg-n2__3EWHF,.bootstrap-min_my-lg-n2__3xOzy{margin-top:-.5rem!important}.bootstrap-min_mr-lg-n2__39ACn,.bootstrap-min_mx-lg-n2__33hmK{margin-right:-.5rem!important}.bootstrap-min_mb-lg-n2__3Plbd,.bootstrap-min_my-lg-n2__3xOzy{margin-bottom:-.5rem!important}.bootstrap-min_ml-lg-n2__3KHvu,.bootstrap-min_mx-lg-n2__33hmK{margin-left:-.5rem!important}.bootstrap-min_m-lg-n3__3CLnv{margin:-1rem!important}.bootstrap-min_mt-lg-n3__16UUf,.bootstrap-min_my-lg-n3__30fxG{margin-top:-1rem!important}.bootstrap-min_mr-lg-n3__2ShHt,.bootstrap-min_mx-lg-n3__YGzsk{margin-right:-1rem!important}.bootstrap-min_mb-lg-n3__DF7ML,.bootstrap-min_my-lg-n3__30fxG{margin-bottom:-1rem!important}.bootstrap-min_ml-lg-n3__2aukz,.bootstrap-min_mx-lg-n3__YGzsk{margin-left:-1rem!important}.bootstrap-min_m-lg-n4__1eTcO{margin:-1.5rem!important}.bootstrap-min_mt-lg-n4__aFhkk,.bootstrap-min_my-lg-n4__2A-H-{margin-top:-1.5rem!important}.bootstrap-min_mr-lg-n4__sw1OO,.bootstrap-min_mx-lg-n4__2US1y{margin-right:-1.5rem!important}.bootstrap-min_mb-lg-n4__12BjP,.bootstrap-min_my-lg-n4__2A-H-{margin-bottom:-1.5rem!important}.bootstrap-min_ml-lg-n4__2XWO0,.bootstrap-min_mx-lg-n4__2US1y{margin-left:-1.5rem!important}.bootstrap-min_m-lg-n5__1STB3{margin:-3rem!important}.bootstrap-min_mt-lg-n5__2skXc,.bootstrap-min_my-lg-n5__3MvzK{margin-top:-3rem!important}.bootstrap-min_mr-lg-n5__1JOhg,.bootstrap-min_mx-lg-n5__2hZIN{margin-right:-3rem!important}.bootstrap-min_mb-lg-n5__1CY0f,.bootstrap-min_my-lg-n5__3MvzK{margin-bottom:-3rem!important}.bootstrap-min_ml-lg-n5___qNdZ,.bootstrap-min_mx-lg-n5__2hZIN{margin-left:-3rem!important}.bootstrap-min_m-lg-auto__2zQ75{margin:auto!important}.bootstrap-min_mt-lg-auto__aYceM,.bootstrap-min_my-lg-auto__2VX45{margin-top:auto!important}.bootstrap-min_mr-lg-auto__1Ut_b,.bootstrap-min_mx-lg-auto__3z97a{margin-right:auto!important}.bootstrap-min_mb-lg-auto__2xQPS,.bootstrap-min_my-lg-auto__2VX45{margin-bottom:auto!important}.bootstrap-min_ml-lg-auto__2B0kn,.bootstrap-min_mx-lg-auto__3z97a{margin-left:auto!important}}@media (min-width:1200px){.bootstrap-min_m-xl-0__38S7J{margin:0!important}.bootstrap-min_mt-xl-0__vm_BP,.bootstrap-min_my-xl-0__2ZbFp{margin-top:0!important}.bootstrap-min_mr-xl-0__3Rsf4,.bootstrap-min_mx-xl-0__3ql3l{margin-right:0!important}.bootstrap-min_mb-xl-0__1MTJs,.bootstrap-min_my-xl-0__2ZbFp{margin-bottom:0!important}.bootstrap-min_ml-xl-0__2iatn,.bootstrap-min_mx-xl-0__3ql3l{margin-left:0!important}.bootstrap-min_m-xl-1__15n3n{margin:.25rem!important}.bootstrap-min_mt-xl-1__7JTMj,.bootstrap-min_my-xl-1__3AQIC{margin-top:.25rem!important}.bootstrap-min_mr-xl-1__3dpcr,.bootstrap-min_mx-xl-1__v1R6R{margin-right:.25rem!important}.bootstrap-min_mb-xl-1__3IFzC,.bootstrap-min_my-xl-1__3AQIC{margin-bottom:.25rem!important}.bootstrap-min_ml-xl-1__2GfUU,.bootstrap-min_mx-xl-1__v1R6R{margin-left:.25rem!important}.bootstrap-min_m-xl-2__2Skfk{margin:.5rem!important}.bootstrap-min_mt-xl-2__3B_1k,.bootstrap-min_my-xl-2__3aSib{margin-top:.5rem!important}.bootstrap-min_mr-xl-2__254N4,.bootstrap-min_mx-xl-2__WKzBP{margin-right:.5rem!important}.bootstrap-min_mb-xl-2__ShgK6,.bootstrap-min_my-xl-2__3aSib{margin-bottom:.5rem!important}.bootstrap-min_ml-xl-2__2XiUz,.bootstrap-min_mx-xl-2__WKzBP{margin-left:.5rem!important}.bootstrap-min_m-xl-3__2CCOn{margin:1rem!important}.bootstrap-min_mt-xl-3__eI3pX,.bootstrap-min_my-xl-3__2POPU{margin-top:1rem!important}.bootstrap-min_mr-xl-3__HH8w-,.bootstrap-min_mx-xl-3__1iHMG{margin-right:1rem!important}.bootstrap-min_mb-xl-3__1k2Mk,.bootstrap-min_my-xl-3__2POPU{margin-bottom:1rem!important}.bootstrap-min_ml-xl-3__2nKxV,.bootstrap-min_mx-xl-3__1iHMG{margin-left:1rem!important}.bootstrap-min_m-xl-4__2NCXc{margin:1.5rem!important}.bootstrap-min_mt-xl-4__1ehCe,.bootstrap-min_my-xl-4__3XUwO{margin-top:1.5rem!important}.bootstrap-min_mr-xl-4__opVLF,.bootstrap-min_mx-xl-4__8SS2Q{margin-right:1.5rem!important}.bootstrap-min_mb-xl-4__2F0re,.bootstrap-min_my-xl-4__3XUwO{margin-bottom:1.5rem!important}.bootstrap-min_ml-xl-4__1ygAL,.bootstrap-min_mx-xl-4__8SS2Q{margin-left:1.5rem!important}.bootstrap-min_m-xl-5__2F6e0{margin:3rem!important}.bootstrap-min_mt-xl-5__f0fjV,.bootstrap-min_my-xl-5__256f-{margin-top:3rem!important}.bootstrap-min_mr-xl-5__1Moos,.bootstrap-min_mx-xl-5__Yzq2x{margin-right:3rem!important}.bootstrap-min_mb-xl-5__3ijSk,.bootstrap-min_my-xl-5__256f-{margin-bottom:3rem!important}.bootstrap-min_ml-xl-5__1z4kr,.bootstrap-min_mx-xl-5__Yzq2x{margin-left:3rem!important}.bootstrap-min_p-xl-0__2YMkS{padding:0!important}.bootstrap-min_pt-xl-0__17VRq,.bootstrap-min_py-xl-0__1u-aU{padding-top:0!important}.bootstrap-min_pr-xl-0__Wg6we,.bootstrap-min_px-xl-0__fqULh{padding-right:0!important}.bootstrap-min_pb-xl-0__2iULp,.bootstrap-min_py-xl-0__1u-aU{padding-bottom:0!important}.bootstrap-min_pl-xl-0__3YiEr,.bootstrap-min_px-xl-0__fqULh{padding-left:0!important}.bootstrap-min_p-xl-1__2ZOUm{padding:.25rem!important}.bootstrap-min_pt-xl-1__16Lsf,.bootstrap-min_py-xl-1__Ulj0K{padding-top:.25rem!important}.bootstrap-min_pr-xl-1__1TdKt,.bootstrap-min_px-xl-1__35dfA{padding-right:.25rem!important}.bootstrap-min_pb-xl-1__2vYMv,.bootstrap-min_py-xl-1__Ulj0K{padding-bottom:.25rem!important}.bootstrap-min_pl-xl-1__KU81p,.bootstrap-min_px-xl-1__35dfA{padding-left:.25rem!important}.bootstrap-min_p-xl-2__3ybjk{padding:.5rem!important}.bootstrap-min_pt-xl-2__1lV8T,.bootstrap-min_py-xl-2__3Hjmc{padding-top:.5rem!important}.bootstrap-min_pr-xl-2__3ud1r,.bootstrap-min_px-xl-2__26tvH{padding-right:.5rem!important}.bootstrap-min_pb-xl-2__2R3aC,.bootstrap-min_py-xl-2__3Hjmc{padding-bottom:.5rem!important}.bootstrap-min_pl-xl-2__HW5kp,.bootstrap-min_px-xl-2__26tvH{padding-left:.5rem!important}.bootstrap-min_p-xl-3__1sjtR{padding:1rem!important}.bootstrap-min_pt-xl-3__2SJ8u,.bootstrap-min_py-xl-3__KmxjD{padding-top:1rem!important}.bootstrap-min_pr-xl-3__1O0Ko,.bootstrap-min_px-xl-3__3yv5A{padding-right:1rem!important}.bootstrap-min_pb-xl-3__3MSQ2,.bootstrap-min_py-xl-3__KmxjD{padding-bottom:1rem!important}.bootstrap-min_pl-xl-3__CZJKs,.bootstrap-min_px-xl-3__3yv5A{padding-left:1rem!important}.bootstrap-min_p-xl-4__52_du{padding:1.5rem!important}.bootstrap-min_pt-xl-4__3vk8h,.bootstrap-min_py-xl-4__14uEU{padding-top:1.5rem!important}.bootstrap-min_pr-xl-4__KChN1,.bootstrap-min_px-xl-4__sRmEG{padding-right:1.5rem!important}.bootstrap-min_pb-xl-4__do-yw,.bootstrap-min_py-xl-4__14uEU{padding-bottom:1.5rem!important}.bootstrap-min_pl-xl-4__2akKB,.bootstrap-min_px-xl-4__sRmEG{padding-left:1.5rem!important}.bootstrap-min_p-xl-5__2wpnV{padding:3rem!important}.bootstrap-min_pt-xl-5__2Tuov,.bootstrap-min_py-xl-5__3bJvA{padding-top:3rem!important}.bootstrap-min_pr-xl-5__2M8GE,.bootstrap-min_px-xl-5__1cZlH{padding-right:3rem!important}.bootstrap-min_pb-xl-5__13vTw,.bootstrap-min_py-xl-5__3bJvA{padding-bottom:3rem!important}.bootstrap-min_pl-xl-5__2nwKV,.bootstrap-min_px-xl-5__1cZlH{padding-left:3rem!important}.bootstrap-min_m-xl-n1__2ZjPD{margin:-.25rem!important}.bootstrap-min_mt-xl-n1__1H_uk,.bootstrap-min_my-xl-n1__2pcHM{margin-top:-.25rem!important}.bootstrap-min_mr-xl-n1__2N3xm,.bootstrap-min_mx-xl-n1__3fMe6{margin-right:-.25rem!important}.bootstrap-min_mb-xl-n1__1meUo,.bootstrap-min_my-xl-n1__2pcHM{margin-bottom:-.25rem!important}.bootstrap-min_ml-xl-n1__3yri-,.bootstrap-min_mx-xl-n1__3fMe6{margin-left:-.25rem!important}.bootstrap-min_m-xl-n2__W2fXa{margin:-.5rem!important}.bootstrap-min_mt-xl-n2__1xYje,.bootstrap-min_my-xl-n2__1K8nI{margin-top:-.5rem!important}.bootstrap-min_mr-xl-n2__17Z5X,.bootstrap-min_mx-xl-n2__n8sRj{margin-right:-.5rem!important}.bootstrap-min_mb-xl-n2__25KLP,.bootstrap-min_my-xl-n2__1K8nI{margin-bottom:-.5rem!important}.bootstrap-min_ml-xl-n2__1DDgt,.bootstrap-min_mx-xl-n2__n8sRj{margin-left:-.5rem!important}.bootstrap-min_m-xl-n3__2nTL3{margin:-1rem!important}.bootstrap-min_mt-xl-n3__3bLru,.bootstrap-min_my-xl-n3__uiHkD{margin-top:-1rem!important}.bootstrap-min_mr-xl-n3__gfyXP,.bootstrap-min_mx-xl-n3__3v1-q{margin-right:-1rem!important}.bootstrap-min_mb-xl-n3__4wseR,.bootstrap-min_my-xl-n3__uiHkD{margin-bottom:-1rem!important}.bootstrap-min_ml-xl-n3__3fjAe,.bootstrap-min_mx-xl-n3__3v1-q{margin-left:-1rem!important}.bootstrap-min_m-xl-n4__2vK_f{margin:-1.5rem!important}.bootstrap-min_mt-xl-n4__3n3QV,.bootstrap-min_my-xl-n4__2f37r{margin-top:-1.5rem!important}.bootstrap-min_mr-xl-n4__3dWFk,.bootstrap-min_mx-xl-n4__3xZct{margin-right:-1.5rem!important}.bootstrap-min_mb-xl-n4__1TtSA,.bootstrap-min_my-xl-n4__2f37r{margin-bottom:-1.5rem!important}.bootstrap-min_ml-xl-n4__3EG5D,.bootstrap-min_mx-xl-n4__3xZct{margin-left:-1.5rem!important}.bootstrap-min_m-xl-n5__3Og15{margin:-3rem!important}.bootstrap-min_mt-xl-n5__zecLC,.bootstrap-min_my-xl-n5__3pSEp{margin-top:-3rem!important}.bootstrap-min_mr-xl-n5__dwWEx,.bootstrap-min_mx-xl-n5__3NnDp{margin-right:-3rem!important}.bootstrap-min_mb-xl-n5__2Hu40,.bootstrap-min_my-xl-n5__3pSEp{margin-bottom:-3rem!important}.bootstrap-min_ml-xl-n5__1vxEE,.bootstrap-min_mx-xl-n5__3NnDp{margin-left:-3rem!important}.bootstrap-min_m-xl-auto__3PpCg{margin:auto!important}.bootstrap-min_mt-xl-auto__3Qjmw,.bootstrap-min_my-xl-auto__rcjXw{margin-top:auto!important}.bootstrap-min_mr-xl-auto__1QMcO,.bootstrap-min_mx-xl-auto__Dz9Xy{margin-right:auto!important}.bootstrap-min_mb-xl-auto__2BUV_,.bootstrap-min_my-xl-auto__rcjXw{margin-bottom:auto!important}.bootstrap-min_ml-xl-auto__3KSoq,.bootstrap-min_mx-xl-auto__Dz9Xy{margin-left:auto!important}}.bootstrap-min_text-monospace__2jOo9{font-family:SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace!important}.bootstrap-min_text-justify__fIDtr{text-align:justify!important}.bootstrap-min_text-wrap__oi-kb{white-space:normal!important}.bootstrap-min_text-nowrap__2y79v{white-space:nowrap!important}.bootstrap-min_text-truncate__vmrs-{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.bootstrap-min_text-left__oR3hZ{text-align:left!important}.bootstrap-min_text-right__3bwyt{text-align:right!important}.bootstrap-min_text-center__2R-s3{text-align:center!important}@media (min-width:576px){.bootstrap-min_text-sm-left__i_5vy{text-align:left!important}.bootstrap-min_text-sm-right__rZSKR{text-align:right!important}.bootstrap-min_text-sm-center__2dCzy{text-align:center!important}}@media (min-width:768px){.bootstrap-min_text-md-left__19D04{text-align:left!important}.bootstrap-min_text-md-right__OnowN{text-align:right!important}.bootstrap-min_text-md-center__2IBq1{text-align:center!important}}@media (min-width:992px){.bootstrap-min_text-lg-left__hg2ov{text-align:left!important}.bootstrap-min_text-lg-right__6Mahj{text-align:right!important}.bootstrap-min_text-lg-center__2_Nfe{text-align:center!important}}@media (min-width:1200px){.bootstrap-min_text-xl-left__AxZoA{text-align:left!important}.bootstrap-min_text-xl-right__2QUIZ{text-align:right!important}.bootstrap-min_text-xl-center__3kAIZ{text-align:center!important}}.bootstrap-min_text-lowercase__2fjX6{text-transform:lowercase!important}.bootstrap-min_text-uppercase__3Barn{text-transform:uppercase!important}.bootstrap-min_text-capitalize__35PZS{text-transform:capitalize!important}.bootstrap-min_font-weight-light__2qjBR{font-weight:300!important}.bootstrap-min_font-weight-lighter__3-RmR{font-weight:lighter!important}.bootstrap-min_font-weight-normal__2Hy4X{font-weight:400!important}.bootstrap-min_font-weight-bold__1Sb5w{font-weight:700!important}.bootstrap-min_font-weight-bolder__AlF4w{font-weight:bolder!important}.bootstrap-min_font-italic__wwR49{font-style:italic!important}.bootstrap-min_text-white__ZjomA{color:#fff!important}.bootstrap-min_text-primary__s5dEU{color:#007bff!important}a.bootstrap-min_text-primary__s5dEU:focus,a.bootstrap-min_text-primary__s5dEU:hover{color:#0056b3!important}.bootstrap-min_text-secondary__1p6oV{color:#6c757d!important}a.bootstrap-min_text-secondary__1p6oV:focus,a.bootstrap-min_text-secondary__1p6oV:hover{color:#494f54!important}.bootstrap-min_text-success__1ZQ5o{color:#28a745!important}a.bootstrap-min_text-success__1ZQ5o:focus,a.bootstrap-min_text-success__1ZQ5o:hover{color:#19692c!important}.bootstrap-min_text-info__1AU5u{color:#17a2b8!important}a.bootstrap-min_text-info__1AU5u:focus,a.bootstrap-min_text-info__1AU5u:hover{color:#0f6674!important}.bootstrap-min_text-warning__3cRPX{color:#ffc107!important}a.bootstrap-min_text-warning__3cRPX:focus,a.bootstrap-min_text-warning__3cRPX:hover{color:#ba8b00!important}.bootstrap-min_text-danger__2DWla{color:#dc3545!important}a.bootstrap-min_text-danger__2DWla:focus,a.bootstrap-min_text-danger__2DWla:hover{color:#a71d2a!important}.bootstrap-min_text-light__3kx6P{color:#f8f9fa!important}a.bootstrap-min_text-light__3kx6P:focus,a.bootstrap-min_text-light__3kx6P:hover{color:#cbd3da!important}.bootstrap-min_text-dark__2atyF{color:#343a40!important}a.bootstrap-min_text-dark__2atyF:focus,a.bootstrap-min_text-dark__2atyF:hover{color:#121416!important}.bootstrap-min_text-body__2NyaM{color:#212529!important}.bootstrap-min_text-muted__1yR3q{color:#6c757d!important}.bootstrap-min_text-black-50__1693W{color:rgba(0,0,0,.5)!important}.bootstrap-min_text-white-50__2pS_o{color:rgba(255,255,255,.5)!important}.bootstrap-min_text-hide__20Ia5{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.bootstrap-min_text-decoration-none__54Z-K{text-decoration:none!important}.bootstrap-min_text-break__2_H0Y{word-break:break-word!important;overflow-wrap:break-word!important}.bootstrap-min_text-reset__tqcXV{color:inherit!important}.bootstrap-min_visible__1afj1{visibility:visible!important}.bootstrap-min_invisible__2DJ28{visibility:hidden!important}@media print{*,::after,::before{text-shadow:none!important;box-shadow:none!important}a:not(.bootstrap-min_btn__33rIN){text-decoration:underline}abbr[title]::after{content:\" (\" attr(title) \")\"}pre{white-space:pre-wrap!important}blockquote,pre{border:1px solid #adb5bd;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}@page{size:a3}body{min-width:992px!important}.bootstrap-min_container__3i4Ca{min-width:992px!important}.bootstrap-min_navbar__3LmOW{display:none}.bootstrap-min_badge__3pcZA{border:1px solid #000}.bootstrap-min_table__GrZsg{border-collapse:collapse!important}.bootstrap-min_table__GrZsg td,.bootstrap-min_table__GrZsg th{background-color:#fff!important}.bootstrap-min_table-bordered__jf6La td,.bootstrap-min_table-bordered__jf6La th{border:1px solid #dee2e6!important}.bootstrap-min_table-dark__ip9nb{color:inherit}.bootstrap-min_table-dark__ip9nb tbody+tbody,.bootstrap-min_table-dark__ip9nb td,.bootstrap-min_table-dark__ip9nb th,.bootstrap-min_table-dark__ip9nb thead th{border-color:#dee2e6}.bootstrap-min_table__GrZsg .bootstrap-min_thead-dark__269Fy th{color:inherit;border-color:#dee2e6}}";
styleInject(css$3);

var css$4 = "/* add css styles here (optional) */\n\n.styles_test__32Qsm {\n  display: inline-block;\n  margin: 2em auto;\n  border: 2px solid #000;\n  font-size: 2em;\n}\n\n.styles_mainD__Zk1gz {\n  background-color: red;\n}\n";
styleInject(css$4);

var ExampleComponent = function (_Component) {
  inherits(ExampleComponent, _Component);

  function ExampleComponent() {
    classCallCheck$1(this, ExampleComponent);
    return possibleConstructorReturn(this, (ExampleComponent.__proto__ || Object.getPrototypeOf(ExampleComponent)).apply(this, arguments));
  }

  createClass$1(ExampleComponent, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Layout, null);
    }
  }]);
  return ExampleComponent;
}(Component);

export default ExampleComponent;
//# sourceMappingURL=index.es.js.map
