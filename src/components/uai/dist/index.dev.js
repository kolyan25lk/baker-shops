"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = exports.Hr = exports.Text = exports.SubTitle = exports.Title = exports.Flex = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Roboto';\nfont-style: normal;\nfont-weight: 700;\nfont-size: 18px;\ntext-transform: uppercase;\nheight: 60px;\nborder: none;\ndisplay: flex;\njustify-content: center ;\nalign-items: center;\ncursor: pointer;\nwidth:  ", " ;\ncolor:  ", " ;\nbackground:  ", " ;\n\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nwidth: 100%;\nmargin: 20px 0;\nborder-color: #B5B5B5;\nborder-bottom: none;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Roboto';\nfont-size:  ", " ;\nfont-weight:  ", " ;\ncolor:  ", " ;\npadding:  ", " ;\nmargin: ", " ;\n\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Roboto';\nfont-weight: bold;\nfont-size: 18px;\ntext-transform: uppercase;\ncolor: #020106;\npadding: ", " ;\nmargin: ", " ;\n\n", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\nfont-family: 'Roboto';\nfont-weight: 700;\nfont-size: 32px;\ntext-transform: uppercase;\ncolor: #020106;\npadding:  ", " ;\nmargin: ", " ;\nborder-left: ", " ;\npadding-left: ", " ;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\ndisplay: flex;\nwidth: ", " ;\njustify-content: ", " ;\nalign-items: ", " ;\nflex-wrap: ", " ;\nflex-direction: ", " ;\npadding: ", " ;\nmargin: ", " ;\nheight: ", " ;\nflex: ", " ;\ncolumn-gap: ", " ;\nrow-gap: ", " ;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nmax-width: 1170px;\nmargin: 0 auto;\nposition: ", ";\nheight: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var relative = _ref.relative;
  return relative ? 'relative' : null;
}, function (_ref2) {
  var height = _ref2.height;
  return height ? height : null;
});

exports.Wrapper = Wrapper;

var Flex = _styledComponents["default"].div(_templateObject2(), function (_ref3) {
  var width = _ref3.width;
  return width ? width : null;
}, function (_ref4) {
  var justify = _ref4.justify;
  return justify ? justify : 'center';
}, function (_ref5) {
  var align = _ref5.align;
  return align ? align : 'center';
}, function (_ref6) {
  var _ref6$wrap = _ref6.wrap,
      wrap = _ref6$wrap === void 0 ? 'no-wrap' : _ref6$wrap;
  return wrap;
}, function (_ref7) {
  var direction = _ref7.direction;
  return direction ? direction : 'row';
}, function (_ref8) {
  var padding = _ref8.padding;
  return padding ? padding : null;
}, function (_ref9) {
  var margin = _ref9.margin;
  return margin ? margin : null;
}, function (_ref10) {
  var height = _ref10.height;
  return height ? height : null;
}, function (_ref11) {
  var flex = _ref11.flex;
  return flex ? flex : null;
}, function (_ref12) {
  var gap = _ref12.gap;
  return gap ? gap : null;
}, function (_ref13) {
  var gap = _ref13.gap;
  return gap ? gap : null;
});

exports.Flex = Flex;

var Title = _styledComponents["default"].h2(_templateObject3(), function (_ref14) {
  var padding = _ref14.padding;
  return padding ? padding : null;
}, function (_ref15) {
  var margin = _ref15.margin;
  return margin ? margin : '0';
}, function (_ref16) {
  var withBorder = _ref16.withBorder;
  return withBorder ? '3px solid #E6110C' : null;
}, function (_ref17) {
  var withBorder = _ref17.withBorder;
  return withBorder ? '15px' : null;
});

exports.Title = Title;

var SubTitle = _styledComponents["default"].h3(_templateObject4(), function (_ref18) {
  var padding = _ref18.padding;
  return padding ? padding : null;
}, function (_ref19) {
  var margin = _ref19.margin;
  return margin ? margin : '0';
}, function (_ref20) {
  var withBorder = _ref20.withBorder;
  return withBorder ? "\n     position: relative;\n     &::after {\n        content: '';\n        position: absolute;\n        left: 0;\n        bottom: -10px;\n        width: 45px;\n        height: 3px;\n        background: #E6110C;\n     }\n" : null;
});

exports.SubTitle = SubTitle;

var Text = _styledComponents["default"].p(_templateObject5(), function (_ref21) {
  var size = _ref21.size;
  return size ? size : '18px';
}, function (_ref22) {
  var weight = _ref22.weight;
  return weight ? weight : '400';
}, function (_ref23) {
  var color = _ref23.color;
  return color ? color : '#282828';
}, function (_ref24) {
  var padding = _ref24.padding;
  return padding ? padding : null;
}, function (_ref25) {
  var margin = _ref25.margin;
  return margin ? margin : '0';
});

exports.Text = Text;

var Hr = _styledComponents["default"].hr(_templateObject6());

exports.Hr = Hr;

var Button = _styledComponents["default"].button(_templateObject7(), function (_ref26) {
  var width = _ref26.width;
  return width ? width : '470px';
}, function (_ref27) {
  var color = _ref27.color;
  return color ? color : '#020106';
}, function (_ref28) {
  var background = _ref28.background;
  return background ? background : '#E6110C';
});

exports.Button = Button;