"use strict";
// file: /src/boot/register-my-component.js
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_1 = (0, tslib_1.__importDefault)(require("vue"));
const MyButton_vue_1 = (0, tslib_1.__importDefault)(require("../components/MyButton/MyButton.vue"));
const MyButtom_vue_1 = (0, tslib_1.__importDefault)(require("../components/MyButtom/MyButtom.vue"));
const WGODialog_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGODialog/WGODialog.vue"));
const WGOLoading_vue_1 = (0, tslib_1.__importDefault)(require("../components/WGOLoading/WGOLoading.vue"));
// we globally register our component with Vue
exports.default = ({ app }) => {
    vue_1.default.component("my-button", MyButton_vue_1.default);
    vue_1.default.component("my-buttom", MyButtom_vue_1.default);
    vue_1.default.component("wgo-dialog", WGODialog_vue_1.default);
    vue_1.default.component("wgo-loading", WGOLoading_vue_1.default);
};
