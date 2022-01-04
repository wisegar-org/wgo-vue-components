"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const Dialog_vue_1 = (0, tslib_1.__importDefault)(require("../../Dialog/Dialog.vue"));
const WGOExpandableListEditor_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListEditor.vue"));
let WGOExpandableListEditorDialog = class WGOExpandableListEditorDialog extends vue_property_decorator_1.Vue {
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
WGOExpandableListEditorDialog = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            Dialog: Dialog_vue_1.default,
            WGOExpandableListEditor: WGOExpandableListEditor_vue_1.default,
        },
    })
], WGOExpandableListEditorDialog);
exports.default = WGOExpandableListEditorDialog;
