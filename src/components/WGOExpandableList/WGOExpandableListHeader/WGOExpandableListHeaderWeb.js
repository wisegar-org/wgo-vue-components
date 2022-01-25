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
let WGOExpandableListHeaderWeb = class WGOExpandableListHeaderWeb extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.id_button = 'button-header-' +
            Math.random()
                .toString(20)
                .substring(2, 10);
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListHeaderWeb.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeaderWeb.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => models_1.DefaultWGOExpandableListOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeaderWeb.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeaderWeb.prototype, "items", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeaderWeb.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderWeb.prototype, "toggleFullScreen", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (item) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderWeb.prototype, "addItem", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (filter) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderWeb.prototype, "applyFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeaderWeb.prototype, "closeDialog", void 0);
WGOExpandableListHeaderWeb = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            WGOExpandableListExportClipboardButton: WGOExpandableListExportClipboardButton_vue_1.default,
            WGOExpandableListExportCSVButton: WGOExpandableListExportCSVButton_vue_1.default,
            WGOExpandableListExportExcelButton: WGOExpandableListExportExcelButton_vue_1.default,
            WGOExpandableListFilterButton: WGOExpandableListFilterButton_vue_1.default,
            WGOExpandableListSelectColumnsButtton: WGOExpandableListSelectColumnsButtton_vue_1.default
        }
    })
], WGOExpandableListHeaderWeb);
exports.default = WGOExpandableListHeaderWeb;
