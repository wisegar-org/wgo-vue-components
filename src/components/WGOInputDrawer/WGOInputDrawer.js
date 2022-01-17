"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_property_decorator_1 = require("vue-property-decorator");
const vue_signature_pad_1 = (0, tslib_1.__importDefault)(require("vue-signature-pad"));
let WGOInputDrawer = class WGOInputDrawer extends vue_property_decorator_1.Vue {
    /**
     *
     */
    constructor() {
        super();
        this.isEmpty = true;
        this.data = "";
        this.options = {
            onBegin: () => { },
            onEnd: this.onEndPad,
        };
        this.id_input = "upload-button-" + Math.random().toString(36).substring(2, 10);
        if (this.readonly)
            this.$nextTick(() => {
                this.$refs.signaturePad.lockSignaturePad();
            });
    }
    signatureStatus() {
        !!this.readonly
            ? this.$refs.signaturePad.lockSignaturePad()
            : this.$refs.signaturePad.openSignaturePad();
    }
    openLoadFile() {
        this.$refs[this.id_input].pickFiles();
    }
    onChange() {
        const { data } = this.$refs.signaturePad.saveSignature();
        return data;
    }
    onEndPad() {
        this.isEmpty = false;
        this.onChange();
    }
    undoSignature() {
        this.$refs.signaturePad.undoSignature();
        const { isEmpty } = this.$refs.signaturePad.saveSignature();
        this.isEmpty = isEmpty;
    }
    downloadSignature() {
        const { data } = this.$refs.signaturePad.saveSignature();
        void fetch(data)
            .then((response) => response.blob())
            .then((blob) => {
            let link = window.document.createElement("a");
            link.href = window.URL.createObjectURL(blob);
            link.download = "file";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
        this.$refs.signaturePad.fromDataURL(`${data}`);
    }
    uploadSignature(qFile) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function* () {
            const stream = new FileReader();
            stream.onloadend = () => {
                this.$refs.signaturePad.fromDataURL(`${stream.result}`);
            };
            stream.readAsDataURL(qFile);
        });
    }
    getDisplayInXS() {
        return this.$q.screen.xs;
    }
    reziseSignaturePad() {
        this.$nextTick(() => {
            this.$refs.signaturePad.resizeCanvas();
            if (this.urlData) {
                this.$refs.signaturePad.fromDataURL(`${this.urlData}`);
                this.isEmpty = false;
            }
        });
    }
    mounted() {
        this.reziseSignaturePad();
        if (this.urlData) {
            this.$refs.signaturePad.fromDataURL(`${this.urlData}`);
            this.isEmpty = false;
        }
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "100%" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputDrawer.prototype, "width", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "100%" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputDrawer.prototype, "height", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputDrawer.prototype, "readonly", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputDrawer.prototype, "watchProps", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Model)(),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputDrawer.prototype, "urlData", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("readonly"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputDrawer.prototype, "signatureStatus", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Emit)("urlData"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputDrawer.prototype, "onChange", null);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("watchProps", { immediate: false }),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputDrawer.prototype, "reziseSignaturePad", null);
WGOInputDrawer = (0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Component)({
        components: {
            VueSignaturePad: vue_signature_pad_1.default,
        },
    }),
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOInputDrawer);
exports.default = WGOInputDrawer;
