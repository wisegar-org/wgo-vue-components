"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const vue_class_component_1 = (0, tslib_1.__importDefault)(require("vue-class-component"));
const vue_property_decorator_1 = require("vue-property-decorator");
const quasar_1 = require("quasar");
const wgo_extensions_1 = require("wgo-extensions");
const wgo_extensions_2 = require("wgo-extensions");
const moment_1 = (0, tslib_1.__importDefault)(require("moment"));
// declare module "vue/types/vue" {
//   interface Vue {
//     $q: QVueGlobals;
//     $t: {
//       (
//         key: string,
//         values?: VueI18n.Values | undefined
//       ): VueI18n.TranslateResult;
//       (
//         key: string,
//         locale: string,
//         values?: VueI18n.Values | undefined
//       ): VueI18n.TranslateResult;
//     };
//   }
// }
let WGOInputDate = 
/**
 * date: data in ingresso di tipo Date
 * Quando viene modificata, esegue una funzione onChangeData che ha in ingresso un tipo Date
 * Se la data è vuota, nel tipo Date c'è null
 */
class WGOInputDate extends vue_property_decorator_1.Vue {
    constructor() {
        super();
        this.model = "";
    }
    get minDate() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.minDate;
    }
    get maxDate() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.maxDate;
    }
    get isSmall() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.small;
    }
    get onChangeData() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.onChangeDate;
    }
    get isReadonly() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.readonly;
    }
    get inputMask() {
        return wgo_extensions_1.MASK_GENERIC;
    }
    get qDateMask() {
        return wgo_extensions_1.MASK_DD_MM_YYYY;
    }
    get getRules() {
        var _a, _b, _c, _d;
        const rules = [this.campoObbligatorio, this.dataValida, this.limitiDate];
        if (!((_a = this.options) === null || _a === void 0 ? void 0 : _a.rules) || ((_c = (_b = this.options) === null || _b === void 0 ? void 0 : _b.rules) === null || _c === void 0 ? void 0 : _c.length) === 0)
            return rules;
        return rules.concat((_d = this.options) === null || _d === void 0 ? void 0 : _d.rules);
    }
    resetValidate() {
        this.$refs["input"].resetValidate();
    }
    mounted() {
        console.debug("WGOInputDate mounted: ", this.label, this.date, this.options);
        this.model = (0, wgo_extensions_1.GetMaskedDate)(this.date || "", this.qDateMask);
    }
    onSelectionChange() {
        var _a;
        console.debug("WGOInputDate onSelectedDate : ", this.label, this.model);
        this.$refs.qDateProxy.hide();
        if ((0, wgo_extensions_1.IsGenericMaskEmpty)(this.model))
            return;
        const numbersCount = (0, wgo_extensions_1.GetNumbersFromString)(this.model);
        if (numbersCount.length < 8) {
            return false;
        }
        (_a = this.$refs.input) === null || _a === void 0 ? void 0 : _a.validate();
        const newSelectedDate = (0, wgo_extensions_1.GetDate)(this.model, this.qDateMask);
        this.onChangeData(newSelectedDate);
    }
    /**
     * Validazione su la selezione|abilitazione di ogni singola data
     * @param date - Data che deve essere validata
     * @returns Boolean - Se la data è selezionabile|abilitata o meno
     */
    optionsFn(date) {
        console.debug("WGOInputDate optionsFn: ", this.label, date);
        if ((0, wgo_extensions_2.IsNullOrUndefined)(date) ||
            (0, wgo_extensions_2.IsNullOrUndefined)(this.minDate) ||
            (0, wgo_extensions_2.IsNullOrUndefined)(this.maxDate))
            return true;
        const formattedDate = (0, wgo_extensions_1.GetMaskedDate)(date, wgo_extensions_1.MASK_YYYY_MM_DD);
        const formattedMinDate = (0, wgo_extensions_1.GetMaskedDate)(this.minDate, wgo_extensions_1.MASK_YYYY_MM_DD, this.qDateMask);
        const formattedMaxDate = (0, wgo_extensions_1.GetMaskedDate)(this.maxDate, wgo_extensions_1.MASK_YYYY_MM_DD, this.qDateMask);
        if (this.maxDate && !this.minDate)
            return (0, wgo_extensions_1.IsDateBeforeOrEqual)(formattedDate, formattedMaxDate, wgo_extensions_1.MASK_YYYY_MM_DD);
        if (!this.maxDate && this.minDate)
            return (0, wgo_extensions_1.IsDateAfterOrEqual)(formattedDate, formattedMinDate, wgo_extensions_1.MASK_YYYY_MM_DD);
        if (this.maxDate && this.minDate)
            return ((0, wgo_extensions_1.IsDateAfterOrEqual)(formattedDate, formattedMinDate, wgo_extensions_1.MASK_YYYY_MM_DD) &&
                (0, wgo_extensions_1.IsDateBeforeOrEqual)(formattedDate, formattedMaxDate, wgo_extensions_1.MASK_YYYY_MM_DD));
        return true;
    }
    onFocus() {
        console.debug("WGOInputDate onFocus: ", this.label, this.model);
        let input = this.$refs.input.$refs.input;
        if (input)
            input.setSelectionRange(0, 10);
    }
    // TODO: Se non necessario. Cancellare!
    // onBlur(e: Event): void {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   console.debug('onBlur input: ', this.model);
    //   this.$refs.input?.validate();
    //   if (this.onChangeData) {
    //     if (!IsDateValid(this.model, this.qDateMask)) {
    //       this.onChangeData(null);
    //     } else {
    //       this.onChangeData(GetDate(this.model, this.qDateMask));
    //     }
    //   }
    // }
    campoObbligatorio(val) {
        console.debug("WGOInputDate campoObbligatorio: ", this.obbligatorio);
        return (!this.obbligatorio ||
            (!(0, wgo_extensions_1.IsGenericMaskEmpty)(val) && !(0, wgo_extensions_2.IsStringEmptyNullOrUndefined)(val)) ||
            "Obbligatorio");
    }
    dataValida(val) {
        console.debug("WGOInputDate dataValida: ", this.model);
        if ((0, wgo_extensions_1.IsGenericMaskEmpty)(val))
            return true;
        return (0, wgo_extensions_1.IsDateValid)(val, wgo_extensions_1.MASK_DD_MM_YYYY) || this.$t("orionDate.wrongDate");
    }
    limitiDate(val) {
        console.debug("WGOInputDate limitiDate: ", val);
        if ((0, wgo_extensions_2.IsNullOrUndefined)(val) ||
            (0, wgo_extensions_2.IsNullOrUndefined)(this.minDate) ||
            (0, wgo_extensions_2.IsNullOrUndefined)(this.maxDate))
            return true;
        if ((0, wgo_extensions_1.IsGenericMaskEmpty)(val))
            return true;
        if (!(0, wgo_extensions_1.IsDateValid)(val))
            return false;
        const formattedDate = (0, wgo_extensions_1.GetMaskedDate)(val, wgo_extensions_1.MASK_YYYY_MM_DD, this.qDateMask);
        const formattedMinDate = (0, wgo_extensions_1.GetMaskedDate)(this.minDate, wgo_extensions_1.MASK_YYYY_MM_DD, this.qDateMask);
        const formattedMaxDate = (0, wgo_extensions_1.GetMaskedDate)(this.maxDate, wgo_extensions_1.MASK_YYYY_MM_DD, this.qDateMask);
        const errorMin = (0, wgo_extensions_1.IsDateBefore)(formattedDate, formattedMinDate, wgo_extensions_1.MASK_YYYY_MM_DD);
        const errorMax = (0, wgo_extensions_1.IsDateAfter)(formattedDate, formattedMaxDate, wgo_extensions_1.MASK_YYYY_MM_DD);
        let msg = "";
        if (errorMin || errorMax) {
            if (this.maxDate && this.minDate)
                msg = `Data da ${formattedMinDate} a ${formattedMaxDate}`;
            if (this.maxDate && !this.minDate)
                msg = `Data fino a ${formattedMaxDate}`;
            if (!this.maxDate && this.minDate)
                msg = `Data a partire da ${formattedMinDate}`;
        }
        return (!errorMin && !errorMax) || msg;
    }
    onDateChange() {
        console.debug("WGOInputDate onDateChange: ", this.label, this.date);
        //TODO: Non posso usare il GetMaskedDate perchè se passo in input un Date e non passo (giustamente) un fromMask lui momentizza la data usando come fomrato il toMask. E sbaglia.
        this.model = (0, moment_1.default)(this.date || new Date()).format(this.qDateMask); //GetMaskedDate(this.date || new Date(), this.qDateMask);
        console.debug("WGOInputDate onDateChange aggiornamodel: ", this.label, this.date);
    }
    validate() {
        return this.$refs.input.validate();
    }
};
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Date)
], WGOInputDate.prototype, "date", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputDate.prototype, "dense", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputDate.prototype, "outlined", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Object)
], WGOInputDate.prototype, "options", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: "" }),
    (0, tslib_1.__metadata)("design:type", String)
], WGOInputDate.prototype, "label", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputDate.prototype, "obbligatorio", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], WGOInputDate.prototype, "readonly", void 0);
(0, tslib_1.__decorate)([
    (0, vue_property_decorator_1.Watch)("date"),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", []),
    (0, tslib_1.__metadata)("design:returntype", void 0)
], WGOInputDate.prototype, "onDateChange", null);
WGOInputDate = (0, tslib_1.__decorate)([
    (0, vue_class_component_1.default)({
        components: {
            QInput: quasar_1.QInput,
            QDate: quasar_1.QDate,
            QPopupProxy: quasar_1.QPopupProxy,
        },
    })
    /**
     * date: data in ingresso di tipo Date
     * Quando viene modificata, esegue una funzione onChangeData che ha in ingresso un tipo Date
     * Se la data è vuota, nel tipo Date c'è null
     */
    ,
    (0, tslib_1.__metadata)("design:paramtypes", [])
], WGOInputDate);
exports.default = WGOInputDate;
