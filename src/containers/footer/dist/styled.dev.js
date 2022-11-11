"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkContainer = exports.FooterSC = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n& > * + * {\n    margin-left: 25px;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbackground-color: #020106 ;\nheight: \"100px\";\nwidth: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FooterSC = _styledComponents["default"].footer(_templateObject());

exports.FooterSC = FooterSC;

var LinkContainer = _styledComponents["default"].div(_templateObject2());

exports.LinkContainer = LinkContainer;