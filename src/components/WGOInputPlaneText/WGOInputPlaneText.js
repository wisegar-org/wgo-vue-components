"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wgo_object_extensions_1 = require("@wisegar-org/wgo-object-extensions");
const vue_property_decorator_1 = require("vue-property-decorator");
const DefaultOptions = {
    small: true,
    readonly: false,
    required: false,
    clearable: true,
};
let WGOInputPlaneText = class WGOInputPlaneText extends vue_property_decorator_1.Vue {
    /**
     *
     */
    constructor() {
        super();
        this.stringValue = "";
        this.stringValue = this.getSliceValue(this.model || "");
    }
    change() {
        return this.stringValue;
    }
    get WGOInputPlaneTextRules() {
        var _a, _b;
        const defaultRules = [this.campoObbligatorio];
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.rules)
            ? defaultRules.concat((_b = this.options) === null || _b === void 0 ? void 0 : _b.rules)
            : defaultRules;
    }
    get WGOInputPlaneTextRef() {
        return "WGOInputPlaneTextref";
    }
    get inputRef() {
        return this.$refs[this.WGOInputPlaneTextRef];
    }
    get clearOption() {
        var _a, _b;
        return !(0, wgo_object_extensions_1.IsNullOrUndefined)((_a = this.options) === null || _a === void 0 ? void 0 : _a.clearable)
            ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.clearable
            : true;
    }
    get maxLength() {
        var _a, _b;
        return !(0, wgo_object_extensions_1.IsNullOrUndefined)((_a = this.options) === null || _a === void 0 ? void 0 : _a.maxLength)
            ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.maxLength
            : 0;
    }
    onChangeValue() {
        this.stringValue = this.getSliceValue(this.model || "");
    }
    getSliceValue(value) {
        return this.maxLength ? value.slice(0, this.maxLength) : value;
    }
    campoObbligatorio(val) {
        var _a;
        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.required)) {
            return true;
        }
        else {
            return !!val || "campo obbligatorio";
        }
    }
    onFocus() {
        if (this.inputRef)
            this.inputRef.select();
    }
    onValueChange() {
        this.change();
        if (this.onChange)
            this.onChange(this.stringValue);
    }
    validate() {
        return this.inputRef.validate();
    }
    onClear() {
        if (!this.clearOption)
            return;
        this.stringValue = "";
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "o input text" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputPlaneText.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOInputPlaneText.prototype, "onChange", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => DefaultOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputPlaneText.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Model)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputPlaneText.prototype, "model", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Emit)("model"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputPlaneText.prototype, "change", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("model"),
    (0, vue_property_decorator_1.Watch)("maxLength"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputPlaneText.prototype, "onChangeValue", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("stringValue"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputPlaneText.prototype, "onValueChange", null);
WGOInputPlaneText = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {},
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOInputPlaneText);
exports.default = WGOInputPlaneText;
