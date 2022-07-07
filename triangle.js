"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var shape_1 = require("./shape");
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(color, name, side1, side2, side3) {
        var _this = _super.call(this, color, name) || this;
        _this.getSide1 = function () { return _this.side1; };
        _this.getSide2 = function () { return _this.side2; };
        _this.getSide3 = function () { return _this.side3; };
        _this.setSide1 = function (side1) { return _this.side1 = side1; };
        _this.setSide2 = function (side2) { return _this.side2 = side2; };
        _this.setSide3 = function (side3) { return _this.side3 = side3; };
        _this.getTriangleArea = function () {
            var p = (_this.side1 + _this.side2 + _this.side3) / 2;
            var h1 = (2 * Math.sqrt((p * (p - _this.side1) * (p - _this.side2) * (p - _this.side3)))) / _this.side1;
            return h1 * _this.side3 * 0.5;
        };
        _this.getTrianglePerimeter = function () { return _this.side1 + _this.side2 + _this.side3; };
        _this.side1 = side1;
        _this.side2 = side2;
        _this.side3 = side3;
        return _this;
    }
    return Triangle;
}(shape_1.Shape));
var triangle = new Triangle('blue', 'triangle', 20, 30, 40);
console.log(triangle.getTriangleArea());
console.log(triangle.getTrianglePerimeter());
