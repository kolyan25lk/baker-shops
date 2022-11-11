"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    background: none;\n    font-size: 18px;\n    font-weight: 500;\n    color: #B5B5B5;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border: none;\n    outline: none;\n    font-size: 18px;\n    font-weight: 500;\n    text-align: center;\n    width: 20px;\n    color: #282828;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input.attrs({
  type: "text"
})(_templateObject());

exports.Input = Input;

var Button = _styledComponents["default"].button(_templateObject2());

exports.Button = Button;