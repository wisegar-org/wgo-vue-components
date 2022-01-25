"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const models_1 = require("../models");
const WGOExpandableListHeaderMobile_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListHeaderMobile.vue"));
const WGOExpandableListHeaderWeb_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListHeaderWeb.vue"));
let WGOExpandableListHeader = class WGOExpandableListHeader extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.id_button = 'button-header-' +
            Math.random()
                .toString(20)
                .substring(2, 10);
    }
    isMobile() {
        return this.$q.platform.is.mobile || this.$q.screen.xs;
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListHeader.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeader.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => models_1.DefaultWGOExpandableListOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeader.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListHeader.prototype, "items", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListHeader.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeader.prototype, "toggleFullScreen", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (item) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeader.prototype, "addItem", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: (filter) => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeader.prototype, "applyFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListHeader.prototype, "closeDialog", void 0);
WGOExpandableListHeader = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            WGOExpandableListHeaderMobile: WGOExpandableListHeaderMobile_vue_1.default,
            WGOExpandableListHeaderWeb: WGOExpandableListHeaderWeb_vue_1.default
        }
    })
], WGOExpandableListHeader);
exports.default = WGOExpandableListHeader;
