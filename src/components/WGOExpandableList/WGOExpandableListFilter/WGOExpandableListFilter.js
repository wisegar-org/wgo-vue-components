"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const InputDate_vue_1 = (0, tslib_1.__importDefault)(require("../../InputDate/InputDate.vue"));
const InputText_vue_1 = (0, tslib_1.__importDefault)(require("../../InputText/InputText.vue"));
const InputNumber_vue_1 = (0, tslib_1.__importDefault)(require("../../InputNumber/InputNumber.vue"));
const InputSelect_vue_1 = (0, tslib_1.__importDefault)(require("../../InputSelect/InputSelect.vue"));
let WGOExpandableListFilter = class WGOExpandableListFilter extends vue_property_decorator_1.Vue {
    constructor() {
        super();
        this.id_item = "upload-button-" + Math.random().toString(20).substring(2, 10);
        this.filterEdit = this.filter ? Object.assign({}, this.filter) : {};
    }
    onModelChange() {
        this.filterEdit = this.filter ? Object.assign({}, this.filter) : {};
    }
    onApplyFilter() {
        if (this.applyFilter)
            this.applyFilter(this.filterEdit);
        if (this.close)
            this.close();
    }
    onResetFilter() {
        this.filterEdit = {};
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListFilter.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilter.prototype, "applyFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilter.prototype, "close", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListFilter.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("filter"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableListFilter.prototype, "onModelChange", null);
WGOExpandableListFilter = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            InputDate: InputDate_vue_1.default,
            InputText: InputText_vue_1.default,
            InputNumber: InputNumber_vue_1.default,
            InputSelect: InputSelect_vue_1.default,
        },
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOExpandableListFilter);
exports.default = WGOExpandableListFilter;
