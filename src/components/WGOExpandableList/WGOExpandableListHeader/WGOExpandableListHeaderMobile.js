"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const models_1 = require("../models");
const WGOExpandableListExportClipboardButton_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListExportClipboardButton.vue"));
const WGOExpandableListExportCSVButton_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListExportCSVButton.vue"));
const WGOExpandableListExportExcelButton_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListExportExcelButton.vue"));
const WGOExpandableListFilterButton_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListFilterButton.vue"));
const WGOExpandableListSelectColumnsButtton_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListSelectColumnsButtton.vue"));
const WGOExpandableListSelectColumnsDialog_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpandableListButtons/WGOExpandableListSelectColumnsDialog.vue"));
let WGOExpandableListHeaderMobile = class WGOExpandableListHeaderMobile extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.id_button = "button-header-" + Math.random().toString(20).substring(2, 10);
        this.showSelectColumns = false;
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListHeaderMobile.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeaderMobile.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => models_1.DefaultWGOExpandableListOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeaderMobile.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeaderMobile.prototype, "items", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeaderMobile.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderMobile.prototype, "toggleFullScreen", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (item) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderMobile.prototype, "addItem", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (filter) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderMobile.prototype, "applyFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderMobile.prototype, "closeDialog", void 0);
WGOExpandableListHeaderMobile = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            WGOExpandableListExportClipboardButton: WGOExpandableListExportClipboardButton_vue_1.default,
            WGOExpandableListExportCSVButton: WGOExpandableListExportCSVButton_vue_1.default,
            WGOExpandableListExportExcelButton: WGOExpandableListExportExcelButton_vue_1.default,
            WGOExpandableListFilterButton: WGOExpandableListFilterButton_vue_1.default,
            WGOExpandableListSelectColumnsButtton: WGOExpandableListSelectColumnsButtton_vue_1.default,
            WGOExpandableListSelectColumnsDialog: WGOExpandableListSelectColumnsDialog_vue_1.default,
        },
    })
], WGOExpandableListHeaderMobile);
exports.default = WGOExpandableListHeaderMobile;
