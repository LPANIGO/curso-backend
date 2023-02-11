"use strict";

var _color = _interopRequireDefault(require("./clases/color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colorService = new _color["default"]();
console.log(colorService.getRandomColor());