"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nborder: none;\nborder-bottom: 1px solid #b5b5b5;\noutline: none;\nfont-size: 18px;\nfont-weight: 500;\npadding: 10px 0;\nwidth: 470px;\ncolor: #282828;\nmargin-bottom: 40px;\n\n&::placeholder {\n    color: ", ";\n}\n\n&:disabled {\n    opacity: 0.3;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents["default"].input.attrs(function (_ref) {
  var type = _ref.type;
  return {
    type: type || 'text'
  };
})(_templateObject(), function (_ref2) {
  var error = _ref2.error;
  return error ? '#E6110C' : '#282828';
});

exports.Input = Input;