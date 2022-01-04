"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
let WGOSimpleExpanded = class WGOSimpleExpanded extends vue_property_decorator_1.Vue {
    /**
     *
     */
    constructor() {
        super();
        this.showPopup = false;
        this.labelsLength = (this.labels || [])
            .map((label) => (typeof label === "string" ? 1 : label.columns || 1))
            .reduce((a, b) => a + b, 0);
    }
    setLabelsLength() {
        this.labelsLength = this.labels
            .map((label) => (typeof label === "string" ? 1 : label.columns || 1))
            .reduce((a, b) => a + b, 0);
    }
    getIcon() {
        return this.iconUrl ? `img:${this.iconUrl}` : this.icon;
    }
    invertValue() {
        this.showPopup = !this.showPopup;
        return this.showPopup;
    }
    getExpandedWithIcon() {
        return this.expandIcon;
    }
    getLabelsClass(index, columns = 1) {
        if (this.labels.length === 1) {
            return "col-12 col-sm-12 q-ml-none q-pl-sm";
        }
        const maxColumns = this.getDisplayInSM()
            ? Math.min(this.maxLabels, this.labelsLength)
            : 2;
        const value = !this.getDisplayInXS() ? 12 / maxColumns : 6;
        return `col-${index < this.maxLines ? 12 : 0} col-sm-${value * columns} q-ml-none q-pl-sm`;
    }
    getLabelsStyle(index) {
        const isOnlySM = !this.getDisplayInSM();
        return index >= this.maxLines && isOnlySM
            ? "display: none;"
            : "margin-left: 0 !important;";
    }
    isStringLabel(label) {
        return typeof label === "string";
    }
    getDisplayInXS() {
        return this.$q.screen.xs;
    }
    getDisplayInSM() {
        return this.$q.screen.gt.sm;
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOSimpleExpanded.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOSimpleExpanded.prototype, "labels", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOSimpleExpanded.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOSimpleExpanded.prototype, "group", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOSimpleExpanded.prototype, "iconUrl", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOSimpleExpanded.prototype, "expandIcon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: 4 }),
    (0, tslib_1.__metadata)("design:type", Number)
], WGOSimpleExpanded.prototype, "maxLabels", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: 2 }),
    (0, tslib_1.__metadata)("design:type", Number)
], WGOSimpleExpanded.prototype, "maxLines", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("labels"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOSimpleExpanded.prototype, "setLabelsLength", null);
WGOSimpleExpanded = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({}),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOSimpleExpanded);
exports.default = WGOSimpleExpanded;
