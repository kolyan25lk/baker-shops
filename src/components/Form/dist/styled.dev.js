"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BorderContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: 1px solid #b5b5b5;\nmargin: 48px auto 60px;\nwidth: 630px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BorderContainer = _styledComponents["default"].div(_templateObject());

exports.BorderContainer = BorderContainer;