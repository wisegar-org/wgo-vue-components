"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
let WGOLoading = class WGOLoading extends vue_property_decorator_1.Vue {
};
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ default: false }),
    tslib_1.__metadata("design:type", Boolean)
], WGOLoading.prototype, "loading", void 0);
WGOLoading = tslib_1.__decorate([
    vue_property_decorator_1.Component({})
], WGOLoading);
exports.default = WGOLoading;
