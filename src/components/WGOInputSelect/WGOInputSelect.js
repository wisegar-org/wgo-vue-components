"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const DefaultOptions = {
    small: true,
    readonly: false,
    required: false,
    clearable: true,
};
let WGOInputSelect = class WGOInputSelect extends vue_property_decorator_1.Vue {
    /**
     *
     */
    constructor() {
        super();
        this.selected = null;
        if (this.model)
            this.selected = this.model;
    }
    change() {
        return this.selected;
    }
    onModelChange() {
        if (!this.selected || this.selected !== this.model) {
            this.selected = this.model ? { value: this.model } : null;
        }
    }
    onClear(evnt) {
        evnt.stopPropagation();
        this.selected = null;
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "o input select" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputSelect.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOInputSelect.prototype, "onChange", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => DefaultOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputSelect.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOInputSelect.prototype, "optionsSelect", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Model)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputSelect.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Emit)("model"),
    (0, vue_property_decorator_1.Watch)("selected"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputSelect.prototype, "change", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("model"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputSelect.prototype, "onModelChange", null);
WGOInputSelect = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({}),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOInputSelect);
exports.default = WGOInputSelect;
