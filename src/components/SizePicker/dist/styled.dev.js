"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checked = exports.Label = exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nheight: 12px;\nwidth: 12px;\nmargin-right: 16px;\nborder-radius: 50%;\nborder: 2px white solid;\nbox-shadow: 0px 0px 0px 2px #282828;\nbackground: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nfont-family: Roboto;\nfont-size: 18px;\nfont-weight: 500;\ncolor: #282828;\nmargin-top: ", ";\n\ndisplay: inline-flex;\nalign-items: center;\nuser-select: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nposition: absolute;\nz-index: -1;\nopacity: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input.attrs({
  type: "radio",
  name: "size"
})(_templateObject());

exports.Input = Input;

var Label = _styledComponents["default"].label(_templateObject2(), function (_ref) {
  var first = _ref.first;
  return first ? "20px" : "24px";
});

exports.Label = Label;

var Checked = _styledComponents["default"].span(_templateObject3(), function (_ref2) {
  var checked = _ref2.checked;
  return checked ? "#282828" : "white";
});

exports.Checked = Checked;