"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGOExpanded_vue_1 = (0, tslib_1.__importDefault)(require("../WGOExpanded/WGOExpanded.vue"));
const models_1 = require("./models");
const WGOExpandableListEditor_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListEditor/WGOExpandableListEditor.vue"));
const WGOExpandableListEditorDialog_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListEditor/WGOExpandableListEditorDialog.vue"));
const WGOLoading_vue_1 = (0, tslib_1.__importDefault)(require("../WGOLoading/WGOLoading.vue"));
const WGOExpandableListFilterLabel_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListFilter/WGOExpandableListFilterLabel.vue"));
const WGOExpandableListHeader_vue_1 = (0, tslib_1.__importDefault)(require("./WGOExpandableListHeader/WGOExpandableListHeader.vue"));
let WGOExpandableList = class WGOExpandableList extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.filterItems = this.items;
        this.openDialog = false;
        this.selectedItem = null;
        this.filter = {};
        this.cardHeight = 500;
        this.listHeight = 300;
        this.id_button = "button-" + Math.random().toString(20).substring(2, 10);
    }
    onFilterChange() {
        this.filterItems = this.options.filterItems
            ? this.options.filterItems(this.items, this.filter)
            : this.items;
        this.resizeCard();
    }
    applyFilter(filter) {
        this.filter = Object.assign({}, filter);
    }
    openFilter() {
        this.$refs.filter.onShowDialog();
    }
    addItem(item = null) {
        this.selectedItem = item;
        this.openDialog = true;
    }
    closeDialog() {
        this.openDialog = false;
    }
    deleteItem(item, index) {
        this.$q
            .dialog({
            title: "Confirm",
            message: this.options.textDeleteConfirm,
            persistent: true,
            focus: "cancel",
            ok: {
                color: "primary",
                label: "Si",
                tabindex: 0,
            },
            cancel: {
                flat: true,
                label: "No",
                tabindex: 1,
            },
        })
            .onOk(() => (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            yield this.options.onDeleteItem(item, index);
        }));
    }
    addResize(onResizeFn) {
        window.addEventListener("resize", onResizeFn);
        this.$nextTick(() => {
            setTimeout(onResizeFn, 150);
        });
    }
    removeResize(onResizeFn) {
        window.removeEventListener("resize", onResizeFn);
    }
    resizeMenu() {
        setTimeout(this.resizeCard, 400);
    }
    resizeCard(defaultBottomPx = 0, defaultplaceholderExpListPx = 157) {
        const placeholderExpList = this.$refs.placeholderExpList;
        const filterLabel = this.$refs.filterLabel;
        const pagination = this.$refs.pagination;
        if (placeholderExpList) {
            const h = placeholderExpList.getBoundingClientRect().bottom ||
                defaultplaceholderExpListPx;
            this.cardHeight = this.options.minHeight
                ? this.options.minHeight
                : window.innerHeight - h - defaultBottomPx;
        }
        else {
            this.cardHeight = 500;
        }
        const placeholderExpList2 = this.$refs.placeholderExpList2;
        const placeholderExpList3 = this.$refs.placeholderExpList3;
        if (this.cardHeight === this.options.minHeight) {
            const mobileH = placeholderExpList3 ? 0 : 40;
            const filterH = filterLabel.offsetHeight || 0;
            this.listHeight = this.options.minHeight - 120 - mobileH - filterH;
        }
        else if (placeholderExpList2) {
            const h = placeholderExpList2.getBoundingClientRect().bottom ||
                defaultplaceholderExpListPx;
            const filterH = filterLabel.offsetHeight || 0;
            const paginationH = pagination.offsetHeight || 0;
            this.listHeight =
                window.innerHeight - h - paginationH - defaultBottomPx - 20 - filterH;
        }
        else {
            this.listHeight = 300;
        }
    }
    getLabels(item) {
        const result = [];
        this.propsEditor.forEach((prop) => {
            if (prop.required || prop.visible) {
                const value = prop.value
                    ? prop.value(item)
                    : `${item[prop.prop]}`;
                let tooltip = "";
                const columns = prop.columns || 1;
                if (prop.tooltip) {
                    tooltip =
                        typeof prop.tooltip === "string"
                            ? prop.tooltip
                            : prop.tooltip(item);
                }
                result.push({ label: value, tooltip: tooltip, columns: columns });
            }
        });
        return result;
    }
    changeProps() {
        if (this.options.localStoreKey) {
            const items = this.propsEditor.map((item) => ({
                prop: item.prop,
                visible: item.visible,
            }));
            localStorage.setItem(this.options.localStoreKey, JSON.stringify(items));
        }
    }
    loadPorpsVisibleStatus() {
        if (this.options.localStoreKey) {
            const storageStr = localStorage.getItem(this.options.localStoreKey);
            const items = storageStr
                ? JSON.parse(storageStr)
                : [];
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
            this.addResize(this.onResize);
        });
    }
    unmounted() {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            this.removeResize(this.onResize);
        });
    }
    onResize() {
        setTimeout(this.resizeCard, 100);
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableList.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableList.prototype, "items", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableList.prototype, "allItems", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WGOExpandableList.prototype, "propsEditor", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "info" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableList.prototype, "icon", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: () => models_1.DefaultWGOExpandableListOptions }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableList.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOExpandableList.prototype, "loading", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOExpandableList.prototype, "filterStr", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOExpandableList.prototype, "watchProps", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("filter"),
    (0, vue_property_decorator_1.Watch)("items"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableList.prototype, "onFilterChange", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("watchProps", { immediate: false, deep: true }),
    (0, vue_property_decorator_1.Watch)("filterStr", { immediate: false }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableList.prototype, "resizeMenu", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("propsEditor", { deep: true }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOExpandableList.prototype, "changeProps", null);
WGOExpandableList = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            Expanded: WGOExpanded_vue_1.default,
            WGOExpandableListEditor: WGOExpandableListEditor_vue_1.default,
            WGOExpandableListEditorDialog: WGOExpandableListEditorDialog_vue_1.default,
            Loader: WGOLoading_vue_1.default,
            WGOExpandableListFilterLabel: WGOExpandableListFilterLabel_vue_1.default,
            WGOExpandableListHeader: WGOExpandableListHeader_vue_1.default,
        },
    })
], WGOExpandableList);
exports.default = WGOExpandableList;
