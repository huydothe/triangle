"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(color, name) {
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.getName = function () { return _this.name; };
        this.setColor = function (color) { return _this.color; };
        this.setName = function (name) { return _this.name; };
        this.color = color;
        this.name = name;
    }
    return Shape;
}());
exports.Shape = Shape;
