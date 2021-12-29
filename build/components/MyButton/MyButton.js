"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
let MyButton = class MyButton extends vue_property_decorator_1.Vue {
    onButtonClick() {
        alert("I'm your ButtoN!");
    }
};
MyButton = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({})
], MyButton);
exports.default = MyButton;
