"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const models_1 = require("../WGOExpandableList/models");
const WGOLoading_vue_1 = (0, tslib_1.__importDefault)(require("../WGOLoading/WGOLoading.vue"));
const WGOListItem_vue_1 = (0, tslib_1.__importDefault)(require("./WGOListItem/WGOListItem.vue"));
const WGOListItemTitle_vue_1 = (0, tslib_1.__importDefault)(require("./WGOListItem/WGOListItemTitle.vue"));
let WGOListSimple = class WGOListSimple extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.openDialog = false;
        this.selectedItem = null;
        this.filter = {};
        this.cardHeight = 500;
        this.listHeight = 300;
        this.id_button = 'button-' + Math.random().toString(20).substring(2, 10);
    }
    getLabels(item) {
        const result = [];
        this.propsEditor.forEach((prop) => {
            if (prop.required || prop.visible) {
                const value = prop.value ? prop.value(item) : `${item[prop.prop]}`;
                let tooltip = '';
                const columns = prop.columns || 1;
                if (prop.tooltip) {
                    tooltip = typeof prop.tooltip === 'string' ? prop.tooltip : prop.tooltip(item);
                }
                result.push({ label: value, tooltip: tooltip, columns: columns });
            }
        });
        return result;
    }
    getTitleLabels() {
        const result = [];
        this.propsEditor.forEach((prop) => {
            if (prop.required || prop.visible) {
                const value = prop.label;
                result.push({ label: value, tooltip: '', columns: prop.columns || 1 });
            }
        });
        return result;
    }
    loadPorpsVisibleStatus() {
        if (this.options.localStoreKey) {
            const storageStr = localStorage.getItem(this.options.localStoreKey);
            const items = storageStr ? JSON.parse(storageStr) : [];
            items.map((item, index) => {
                if (this.propsEditor[index].prop === item.prop)
                    this.propsEditor[index].visible = item.visible;
            });
        }
    }
    toggleFullScreen() {
        const target = this.$refs.viewCard;
        this.$q.fullscreen.toggle(target.$el);
    }
    mounted() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.loadPorpsVisibleStatus();
        });
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOListSimple.prototype, "items", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOListSimple.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => models_1.DefaultWGOExpandableListOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOListSimple.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOListSimple.prototype, "loading", void 0);
WGOListSimple = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            Loader: WGOLoading_vue_1.default,
            WGOListItem: WGOListItem_vue_1.default,
            WGOListItemTitle: WGOListItemTitle_vue_1.default,
        },
    })
], WGOListSimple);
exports.default = WGOListSimple;
