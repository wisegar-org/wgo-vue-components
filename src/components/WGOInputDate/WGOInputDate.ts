import Component from "vue-class-component";
import { Vue, Prop, Watch } from "vue-property-decorator";
import { QInput, QDate, QPopupProxy, QVueGlobals } from "quasar";
import { IWGOInputDateOptions } from "../../models/IWGOInputDateOptions";
import VueI18n from "vue-i18n";
import {
  GetDate,
  GetMaskedDate,
  GetNumbersFromString,
  IsDateAfter,
  IsDateAfterOrEqual,
  IsDateBefore,
  IsDateBeforeOrEqual,
  IsDateValid,
  IsGenericMaskEmpty,
  MASK_DD_MM_YYYY,
  MASK_GENERIC,
  MASK_YYYY_MM_DD,
} from "@wisegar-org/wgo-opengar-shared";
import {
  GetStringDate,
  IsNullOrUndefined,
  IsStringEmptyNullOrUndefined,
} from "@wisegar-org/wgo-opengar-shared";
import moment from "moment";
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

@Component({
  components: {
    QInput,
    QDate,
    QPopupProxy,
  },
})
/**
 * date: data in ingresso di tipo Date
 * Quando viene modificata, esegue una funzione onChangeData che ha in ingresso un tipo Date
 * Se la data è vuota, nel tipo Date c'è null
 */
export default class WGOInputDate extends Vue {
  @Prop() readonly date?: Date;
  @Prop({ default: false }) readonly dense?: boolean;
  @Prop({ default: true }) readonly outlined?: boolean;
  @Prop({ required: true }) options?: IWGOInputDateOptions;
  @Prop({ default: "" })
  protected readonly label!: string;
  @Prop({ default: false })
  protected readonly obbligatorio!: boolean;
  @Prop({ default: false })
  protected readonly?: boolean;

  get minDate() {
    return this.options?.minDate;
  }
  get maxDate() {
    return this.options?.maxDate;
  }
  get isSmall() {
    return this.options?.small;
  }
  get onChangeData() {
    return this.options?.onChangeDate;
  }
  get isReadonly() {
    return this.options?.readonly;
  }
  get inputMask() {
    return MASK_GENERIC;
  }
  get qDateMask() {
    return MASK_DD_MM_YYYY;
  }
  get getRules() {
    const rules = [this.campoObbligatorio, this.dataValida, this.limitiDate];
    if (!this.options?.rules || this.options?.rules?.length === 0) return rules;
    return rules.concat(this.options?.rules);
  }
  model: string = "";

  $refs!: {
    input: QInput;
    qDateProxy: QPopupProxy;
  };

  constructor() {
    super();
  }

  public resetValidate() {
    (this.$refs["input"] as any).resetValidate();
  }

  mounted() {
    console.debug(
      "WGOInputDate mounted: ",
      this.label,
      this.date,
      this.options
    );
    this.model = GetMaskedDate(this.date || "", this.qDateMask);
  }

  onSelectionChange() {
    console.debug("WGOInputDate onSelectedDate : ", this.label, this.model);
    this.$refs.qDateProxy.hide();
    if (IsGenericMaskEmpty(this.model)) return;
    const numbersCount = GetNumbersFromString(this.model);
    if (numbersCount.length < 8) {
      return false;
    }
    this.$refs.input?.validate();
    const newSelectedDate = GetDate(this.model, this.qDateMask);
    this.onChangeData(newSelectedDate);
  }

  /**
   * Validazione su la selezione|abilitazione di ogni singola data
   * @param date - Data che deve essere validata
   * @returns Boolean - Se la data è selezionabile|abilitata o meno
   */
  optionsFn(date: any) {
    console.debug("WGOInputDate optionsFn: ", this.label, date);
    if (
      IsNullOrUndefined(date) ||
      IsNullOrUndefined(this.minDate) ||
      IsNullOrUndefined(this.maxDate)
    )
      return true;
    const formattedDate = GetMaskedDate(date, MASK_YYYY_MM_DD);
    const formattedMinDate = GetMaskedDate(
      this.minDate,
      MASK_YYYY_MM_DD,
      this.qDateMask
    );
    const formattedMaxDate = GetMaskedDate(
      this.maxDate,
      MASK_YYYY_MM_DD,
      this.qDateMask
    );
    if (this.maxDate && !this.minDate)
      return IsDateBeforeOrEqual(
        formattedDate,
        formattedMaxDate,
        MASK_YYYY_MM_DD
      );
    if (!this.maxDate && this.minDate)
      return IsDateAfterOrEqual(
        formattedDate,
        formattedMinDate,
        MASK_YYYY_MM_DD
      );
    if (this.maxDate && this.minDate)
      return (
        IsDateAfterOrEqual(formattedDate, formattedMinDate, MASK_YYYY_MM_DD) &&
        IsDateBeforeOrEqual(formattedDate, formattedMaxDate, MASK_YYYY_MM_DD)
      );
    return true;
  }

  onFocus(): void {
    console.debug("WGOInputDate onFocus: ", this.label, this.model);
    let input = this.$refs.input.$refs.input as HTMLInputElement;
    if (input) input.setSelectionRange(0, 10);
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

  campoObbligatorio(val: string) {
    console.debug("WGOInputDate campoObbligatorio: ", this.obbligatorio);
    return (
      !this.obbligatorio ||
      (!IsGenericMaskEmpty(val) && !IsStringEmptyNullOrUndefined(val)) ||
      "Obbligatorio"
    );
  }

  dataValida(val: string) {
    console.debug("WGOInputDate dataValida: ", this.model);
    if (IsGenericMaskEmpty(val)) return true;
    return IsDateValid(val, MASK_DD_MM_YYYY) || this.$t("orionDate.wrongDate");
  }

  limitiDate(val: string) {
    console.debug("WGOInputDate limitiDate: ", val);
    if (
      IsNullOrUndefined(val) ||
      IsNullOrUndefined(this.minDate) ||
      IsNullOrUndefined(this.maxDate)
    )
      return true;
    if (IsGenericMaskEmpty(val)) return true;
    if (!IsDateValid(val)) return false;
    const formattedDate = GetMaskedDate(val, MASK_YYYY_MM_DD, this.qDateMask);
    const formattedMinDate = GetMaskedDate(
      this.minDate,
      MASK_YYYY_MM_DD,
      this.qDateMask
    );
    const formattedMaxDate = GetMaskedDate(
      this.maxDate,
      MASK_YYYY_MM_DD,
      this.qDateMask
    );
    const errorMin = IsDateBefore(
      formattedDate,
      formattedMinDate,
      MASK_YYYY_MM_DD
    );
    const errorMax = IsDateAfter(
      formattedDate,
      formattedMaxDate,
      MASK_YYYY_MM_DD
    );
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

  @Watch("date")
  onDateChange() {
    console.debug("WGOInputDate onDateChange: ", this.label, this.date);
    //TODO: Non posso usare il GetMaskedDate perchè se passo in input un Date e non passo (giustamente) un fromMask lui momentizza la data usando come fomrato il toMask. E sbaglia.
    this.model = moment(this.date || new Date()).format(this.qDateMask); //GetMaskedDate(this.date || new Date(), this.qDateMask);
    console.debug(
      "WGOInputDate onDateChange aggiornamodel: ",
      this.label,
      this.date
    );
  }

  validate() {
    return (this.$refs.input as any).validate();
  }
}
