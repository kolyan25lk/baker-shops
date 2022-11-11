"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder-radius: 50%;\nwidth: 34px;\nheight: 34px;\nbackground: ", ";\nborder: 2px white solid;\nbox-shadow: 0px 0px 0px 2px ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color ? color : "#282828";
}, function (_ref2) {
  var active = _ref2.active;
  return active ? "#282828" : 'null';
});

exports.Button = Button;