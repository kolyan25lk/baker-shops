"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderText = exports.Absolute = exports.HeaderSC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _headerBg = _interopRequireDefault(require("assets/header-bg.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-family: Roboto;\ntext-transform: uppercase;\ntext-align: end;\nmargin-top: 0;\nmargin-bottom: ", "  ;\nfont-weight: ", " ;\nfont-size: ", " ;\ncolor: ", "  ;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\nright: 0;\nbottom: 174px;\ndisplay: flex;\nflex-direction: column ;\nalign-items:flex-end;\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nheight: 100vh;\nwidth: 100%;\nbackground: url(", ");\nbackground-repeat: no-repeat;\nbackground-size: cover;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderSC = _styledComponents["default"].header(_templateObject(), _headerBg["default"]);

exports.HeaderSC = HeaderSC;

var Absolute = _styledComponents["default"].div(_templateObject2());

exports.Absolute = Absolute;

var HeaderText = _styledComponents["default"].h1(_templateObject3(), function (_ref) {
  var space = _ref.space;
  return space ? space : '10px';
}, function (_ref2) {
  var weight = _ref2.weight;
  return weight ? weight : 400;
}, function (_ref3) {
  var size = _ref3.size;
  return size ? size : '55px';
}, function (_ref4) {
  var red = _ref4.red;
  return red ? '#E6110C' : '#FFFFFF';
});

exports.HeaderText = HeaderText;