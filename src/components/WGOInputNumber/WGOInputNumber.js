"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const wgo_object_extensions_1 = require("@wisegar-org/wgo-object-extensions");
const vue_property_decorator_1 = require("vue-property-decorator");
const DefaultOptions = {
    small: true,
    readonly: false,
    required: false,
    decimal: 0,
    clearable: true,
};
let WGOInputNumber = class WGOInputNumber extends vue_property_decorator_1.Vue {
    constructor() {
        super();
        this.stringValue = "";
    }
    changed() {
        return parseFloat(this.stringValue) || 0;
    }
    onChangeValue(value) {
        if (value != parseFloat(this.stringValue)) {
            this.stringValue = value ? value.toFixed(this.options.decimal) : "";
        }
    }
    get oInputNumberRules() {
        var _a, _b;
        const defaultRules = [this.campoObbligatorio];
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.rules)
            ? defaultRules.concat((_b = this.options) === null || _b === void 0 ? void 0 : _b.rules)
            : defaultRules;
    }
    get oInputNumberRef() {
        return "oinputnumberref";
    }
    get inputRef() {
        return this.$refs[this.oInputNumberRef];
    }
    get readonlyOption() {
        var _a, _b;
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.readonly) ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.readonly : false;
    }
    get denseOption() {
        var _a, _b;
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.small) ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.small : true;
    }
    get clearOption() {
        var _a, _b;
        return !(0, wgo_object_extensions_1.IsNullOrUndefined)((_a = this.options) === null || _a === void 0 ? void 0 : _a.clearable)
            ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.clearable
            : true;
    }
    mounted() {
        this.onChangeValue(this.value);
    }
    campoObbligatorio(val) {
        let _valido = false;
        this.changed();
        if (!this.options.required) {
            _valido = true;
        }
        else {
            if (!val || val == "" || parseFloat(val) == 0) {
                _valido = false;
            }
            else {
                _valido = true;
            }
        }
        return _valido || "Obbligatorio";
    }
    onInput(val) {
        const validNumber = new RegExp(/^\-?\d*\.?\d*$/);
        if (validNumber.test(val)) {
            this.changed();
        }
        else {
            this.stringValue = this.inputRef.value;
        }
    }
    onClear() {
        if (!this.clearOption)
            return;
        this.stringValue = "";
    }
    onBlur() {
        const wNum = parseFloat(this.stringValue);
        if (isNaN(wNum) || wNum == 0) {
            this.stringValue = "";
        }
        else if (this.stringValue !== this.toFixed(wNum, this.options.decimal)) {
            this.stringValue = this.toFixed(wNum, this.options.decimal);
        }
        console.log("ONumber - onBlur POST:", this.stringValue);
        this.changed();
        this.$emit("blur");
    }
    onFocus() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            let input = this.$refs.input;
            if (input)
                yield input.select();
        });
    }
    toFixed(value, fixed = 0) {
        var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
        const rounded = value.toString().match(re);
        return parseFloat(rounded && rounded.length > 0 ? rounded[0] : value.toString()).toFixed(fixed);
    }
    validate() {
        return this.inputRef.validate();
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => DefaultOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputNumber.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputNumber.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputNumber.prototype, "readonly", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Model)("change", { type: Number }),
    (0, tslib_1.__metadata)("design:type", Number)
], WGOInputNumber.prototype, "value", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Emit)("change"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputNumber.prototype, "changed", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("value"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Number]),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputNumber.prototype, "onChangeValue", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("options.decimal"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputNumber.prototype, "onBlur", null);
WGOInputNumber = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {},
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOInputNumber);
exports.default = WGOInputNumber;
