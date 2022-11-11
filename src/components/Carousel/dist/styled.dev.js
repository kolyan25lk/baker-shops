"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselTrack = exports.ContainerItem = exports.Container = exports.SlideItem = exports.Arrow = exports.SlideBtn = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nwidth: max-content;\n\ntransition: 0.2s linear transform;\n\n", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nwidth:", ";\nheight:", ";\n\ndisplay: flex;\njustify-content: center;\nalign-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nposition: relative;\nbackground-color: while;\nborder: none;\noverflow-x: hidden ;\nwidth:", ";\nheight:", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nheight: 120px;\nwidth: 160px;\n\n& > * {\n    width: 100%;\n    height: 100%;\n}\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nwidth: 9px;\nheight: 9px;\nborder-style: solid;\nborder-width: 0 0 2px 2px;\nborder-color: white;\ntransform: rotate(45deg);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nbackground: none;\npadding: 0;\ncursor: pointer;\noutline: none;\nz-index: 100;\n\nposition: absolute;\ntop: 50%;\ntransform: translateY(-50%)\n", ";\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SlideBtn = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var rotate = _ref.rotate;
  return rotate ? "rotate(180deg);" : null;
}, function (_ref2) {
  var rotate = _ref2.rotate;
  return rotate ? "right:13px;" : "left: 13px;";
});

exports.SlideBtn = SlideBtn;

var Arrow = _styledComponents["default"].div(_templateObject2());

exports.Arrow = Arrow;

var SlideItem = _styledComponents["default"].div(_templateObject3());

exports.SlideItem = SlideItem;

var Container = _styledComponents["default"].div(_templateObject4(), function (_ref3) {
  var width = _ref3.width;
  return width ? width : "auto";
}, function (_ref4) {
  var height = _ref4.height;
  return height ? height : "auto";
});

exports.Container = Container;

var ContainerItem = _styledComponents["default"].div(_templateObject5(), function (_ref5) {
  var width = _ref5.width;
  return width ? width : "auto";
}, function (_ref6) {
  var height = _ref6.height;
  return height ? height : "auto";
});

exports.ContainerItem = ContainerItem;

var CarouselTrack = _styledComponents["default"].div(_templateObject6(), function (_ref7) {
  var transform = _ref7.transform;
  return transform ? "transform: translateX(".concat(transform, ");") : "transform: translateX(0);";
});

exports.CarouselTrack = CarouselTrack;