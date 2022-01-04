"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const WGOLoading_vue_1 = tslib_1.__importDefault(require("../WGOLoading/WGOLoading.vue"));
let WGODialog = class WGODialog extends vue_property_decorator_1.Vue {
    constructor() {
        super(...arguments);
        this.contentHeight = "380px";
    }
    resizeContent() {
        this.$nextTick(() => setTimeout(this.onResize, 300));
    }
    onResize() {
        const placeholder = this.$refs.placeholder;
        const buttons = this.$refs.buttons;
        const title = this.$refs.title;
        if (placeholder) {
            const h = placeholder.$el.getBoundingClientRect()
                .height || 0;
            const buttonsH = buttons.offsetHeight || 0;
            const titleH = title.offsetHeight || 0;
            const height = h - buttonsH - titleH - 68;
            this.contentHeight = `${height}px`;
            if (this.options.afterResize)
                this.options.afterResize(height);
        }
    }
    getIcon() {
        if (!this.options.icon)
            return "";
        return this.options.icon;
    }
    getStyle() {
        if (this.options.fullHeight && this.options.fullWidth)
            return "";
        else if (this.options.fullWidth) {
            return this.options.height
                ? `height: ${this.options.height};`
                : "height: 500px;";
        }
        else if (this.options.fullHeight) {
            return this.options.width
                ? `width: ${this.options.width};`
                : "width: 500px;";
        }
        if (this.options.height && this.options.width) {
            return `height: ${this.options.height}; width: ${this.options.width};`;
        }
        else if (this.options.height)
            return `height: ${this.options.height}; width: 500px;`;
        else if (this.options.width)
            return `height: 500px; width: ${this.options.width};`;
        return "height: 500px; width: 500px;";
    }
    mounted() {
        window.addEventListener("resize", this.onResize);
        this.resizeContent();
    }
    unmounted() {
        window.removeEventListener("resize", this.onResize);
    }
};
tslib_1.__decorate([
    vue_property_decorator_1.Prop({ required: true }),
    tslib_1.__metadata("design:type", Object)
], WGODialog.prototype, "options", void 0);
tslib_1.__decorate([
    vue_property_decorator_1.Watch("options.open", { immediate: false }),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], WGODialog.prototype, "resizeContent", null);
WGODialog = tslib_1.__decorate([
    vue_property_decorator_1.Component({
        components: {
            WGOLoading: WGOLoading_vue_1.default,
        },
    })
], WGODialog);
exports.default = WGODialog;
