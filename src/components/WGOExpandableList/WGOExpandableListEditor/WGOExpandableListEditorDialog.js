"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGODialog_vue_1 = (0, tslib_1.__importDefault)(require("../../WGODialog/WGODialog.vue"));
const WGOExpandableListEditor_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListEditor.vue"));
let WGOExpandableListEditorDialog = class WGOExpandableListEditorDialog extends vue_property_decorator_1.Vue {
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
        };
    }
    changeStatus() {
        this.options = Object.assign(Object.assign({}, this.options), { open: this.open });
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOExpandableListEditorDialog.prototype, "open", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListEditorDialog.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListEditorDialog.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListEditorDialog.prototype, "styleDialog", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListEditorDialog.prototype, "close", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListEditorDialog.prototype, "item", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListEditorDialog.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListEditorDialog.prototype, "onSaveItem", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("open"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableListEditorDialog.prototype, "changeStatus", null);
WGOExpandableListEditorDialog = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            Dialog: WGODialog_vue_1.default,
            WGOExpandableListEditor: WGOExpandableListEditor_vue_1.default,
        },
    })
], WGOExpandableListEditorDialog);
exports.default = WGOExpandableListEditorDialog;
