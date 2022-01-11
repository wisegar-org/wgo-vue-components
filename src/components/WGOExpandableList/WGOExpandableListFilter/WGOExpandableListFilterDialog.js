"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGOExpandableListFilter_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListFilter.vue"));
const WGODialog_vue_1 = (0, tslib_1.__importDefault)(require("../../WGODialog/WGODialog.vue"));
let WGOExpandableListFilterDialog = class WGOExpandableListFilterDialog extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.options = {
            title: this.title,
            icon: this.icon,
            open: this.open,
            onClose: () => this.close(),
            hideButtons: true,
            fullHeight: false,
            fullWidth: false,
            styleDialog: this.styleDialog,
            width: "800px",
        };
    }
    changeStatus() {
        this.options = Object.assign(Object.assign({}, this.options), { open: this.open });
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOExpandableListFilterDialog.prototype, "open", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListFilterDialog.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListFilterDialog.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListFilterDialog.prototype, "styleDialog", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListFilterDialog.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilterDialog.prototype, "close", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListFilterDialog.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilterDialog.prototype, "applyFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("open"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableListFilterDialog.prototype, "changeStatus", null);
WGOExpandableListFilterDialog = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            WGOExpandableListFilter: WGOExpandableListFilter_vue_1.default,
            Dialog: WGODialog_vue_1.default,
        },
    })
], WGOExpandableListFilterDialog);
exports.default = WGOExpandableListFilterDialog;
