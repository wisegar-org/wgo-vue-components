"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
let WGOExpandableListFilterLabel = class WGOExpandableListFilterLabel extends vue_property_decorator_1.Vue {
    getFilterLabel() {
        if (this.filterStr)
            return this.filterStr;
        const filterStr = [];
        this.propsEditor.forEach((prop) => {
            var _a;
            if (prop.prop in this.filter && this.filter[prop.prop]) {
                if (prop.type !== "select")
                    filterStr.push(`${prop.label} contiene <${this.filter[prop.prop]}>`);
                else
                    filterStr.push(`${prop.label} contiene <${(_a = this.filter[prop.prop]) === null || _a === void 0 ? void 0 : _a.label}>`);
            }
        });
        return filterStr.join(` ${this.joinText} `);
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListFilterLabel.prototype, "filterStr", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableListFilterLabel.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => ({}) }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableListFilterLabel.prototype, "filter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "and" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableListFilterLabel.prototype, "joinText", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilterLabel.prototype, "cleanFilter", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => { } }),
    (0, tslib_1.__metadata)("design:type", Function)
], WGOExpandableListFilterLabel.prototype, "openFilter", void 0);
WGOExpandableListFilterLabel = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({})
], WGOExpandableListFilterLabel);
exports.default = WGOExpandableListFilterLabel;
