"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGOSimpleExpanded_vue_1 = (0, tslib_1.__importDefault)(require("./WGOSimpleExpanded.vue"));
let WGOExpanded = class WGOExpanded extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.labelsLength = this.labels
            .map(label => (typeof label === 'string' ? 1 : label.columns || 1))
            .reduce((a, b) => a + b, 0);
    }
    setLabelsLength() {
        this.labelsLength = this.labels
            .map(label => (typeof label === 'string' ? 1 : label.columns || 1))
            .reduce((a, b) => a + b, 0);
    }
    getIcon() {
        return this.iconUrl ? `img:${this.iconUrl}` : this.icon;
    }
    clickInHeader() {
        const expanded = this.$refs.expanded;
        if (!!expanded && !!expanded.invertValue)
            expanded.invertValue();
    }
    getLabelsClass(index, columns = 1) {
        if (this.labels.length === 1) {
            return 'col-12 col-sm-12 q-ml-none q-pl-sm';
        }
        const maxColumns = this.getDisplayInSM()
            ? Math.min(this.maxLabels, this.labelsLength)
            : 2;
        const value = !this.getDisplayInXS() ? 12 / maxColumns : 6;
        return `col-${index < this.maxLines ? 12 : 0} col-sm-${value *
            columns} q-ml-none q-pl-sm`;
    }
    isStringLabel(label) {
        return typeof label === 'string';
    }
    getLabelsStyle(index) {
        const isOnlySM = !this.getDisplayInSM();
        return index >= this.maxLines && isOnlySM
            ? 'display: none;'
            : 'margin-left: 0 !important;';
    }
    getDisplayInXS() {
        return this.$q.screen.xs;
    }
    getDisplayInSM() {
        return this.$q.screen.gt.sm;
    }
    isMobile() {
        return this.$q.platform.is.mobile || !this.getDisplayInXS();
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpanded.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpanded.prototype, "labels", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpanded.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpanded.prototype, "group", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpanded.prototype, "iconUrl", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: 4 }),
    (0, tslib_1.__metadata)("design:type", Number)
], WGOExpanded.prototype, "maxLabels", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: 2 }),
    (0, tslib_1.__metadata)("design:type", Number)
], WGOExpanded.prototype, "maxLines", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)('labels'),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpanded.prototype, "setLabelsLength", null);
WGOExpanded = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            WGOSimpleExpanded: WGOSimpleExpanded_vue_1.default
        }
    })
], WGOExpanded);
exports.default = WGOExpanded;
