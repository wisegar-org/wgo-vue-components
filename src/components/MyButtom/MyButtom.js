"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
let MyButtom = class MyButtom extends vue_property_decorator_1.Vue {
    onButtonClick() {
        alert("I'm your Buttom!");
    }
};
MyButtom = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({})
], MyButtom);
exports.default = MyButtom;
