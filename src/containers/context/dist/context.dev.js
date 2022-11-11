"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _default = (0, _react.createContext)({
  color: 1,
  size: 1,
  count: 1,
  setColor: function setColor() {
    return Promise.resolve(null);
  },
  setSize: function setSize() {
    return Promise.resolve(null);
  },
  setCount: function setCount() {
    return Promise.resolve(null);
  }
});

exports["default"] = _default;