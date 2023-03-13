"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGOInputDate_vue_1 = (0, tslib_1.__importDefault)(require("../../WGOInputDate/WGOInputDate.vue"));
const WGOInputText_vue_1 = (0, tslib_1.__importDefault)(require("../../WGOInputText/WGOInputText.vue"));
const WGOInputNumber_vue_1 = (0, tslib_1.__importDefault)(require("../../WGOInputNumber/WGOInputNumber.vue"));
const WGOInputSelect_vue_1 = (0, tslib_1.__importDefault)(require("../../WGOInputSelect/WGOInputSelect.vue"));
const wgo_extensions_1 = require("wgo-extensions");
let WGOExpandableListEditor = class WGOExpandableListEditor extends vue_property_decorator_1.Vue {
    constructor() {
        super();
        this.itemForm = {};
        this.id_item = "upload-button-" + Math.random().toString(20).substring(2, 10);
        if (!!this.item)
            this.itemForm = this.reactive ? this.item : Object.assign({}, this.item);
        else
            this.itemForm = {};
    }
    onSave() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const form = this.$refs.oAdminEditor;
            const count = form.$children.length;
            let index = 0;
            while (index < count &&
                "validate" in form.$children[index] &&
                form.$children[index].validate()) {
                index += 1;
            }
            if (yield form.validate()) {
                this.onSaveItem(this.itemForm);
            }
        });
    }
    setDateValue(date, obj, prop) {
        obj[prop] = date.toISOString();
    }
    getDateOptions(options, obj, prop) {
        const setDateValue = this.setDateValue;
        const inputOptions = {
            onChangeDate: (date) => setDateValue(date, obj, prop),
        };
        return options ? Object.assign(Object.assign({}, options), inputOptions) : inputOptions;
    }
    getDateValue(date) {
        const dateObj = new Date(date).toISOString();
        const maskDate = (0, wgo_extensions_1.GetMaskedDate)(dateObj, wgo_extensions_1.MASK_DD_MM_YYYY, wgo_extensions_1.MASK_YYYY_MM_DD_HH_mm_ss);
        return maskDate;
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListEditor.prototype, "item", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOExpandableListEditor.prototype, "reactive", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListEditor.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListEditor.prototype, "onSaveItem", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListEditor.prototype, "close", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOExpandableListEditor.prototype, "showClose", void 0);
WGOExpandableListEditor = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            InputDate: WGOInputDate_vue_1.default,
            InputText: WGOInputText_vue_1.default,
            InputNumber: WGOInputNumber_vue_1.default,
            InputSelect: WGOInputSelect_vue_1.default,
        },
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOExpandableListEditor);
exports.default = WGOExpandableListEditor;
