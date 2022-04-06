import { IsNullOrUndefined } from "@wisegar-org/wgo-object-extensions";
import {
  Prop,
  Model,
  Emit,
  Watch,
  Component,
  Vue,
} from "vue-property-decorator";
import { IWGOInputNumberOptions } from "../../models/IWGOInputOptions";

const DefaultOptions: IWGOInputNumberOptions = {
  small: true,
  readonly: false,
  required: false,
  decimal: 0,
  clearable: true,
};

@Component({
  components: {},
})
export default class WGOInputNumber extends Vue {
  @Prop({ default: () => DefaultOptions }) options!: IWGOInputNumberOptions;
  @Prop({ default: "" })
  protected readonly label!: string;
  @Prop({ default: false })
  protected readonly?: boolean;
  private stringValue = "";

  @Model("change", { type: Number }) value!: number;
  @Emit("change")
  changed() {
    return parseFloat(this.stringValue) || 0;
  }
  @Watch("value")
  onChangeValue(value: number) {
    if (value != parseFloat(this.stringValue)) {
      this.stringValue = value ? value.toFixed(this.options.decimal) : "";
    }
  }
  get oInputNumberRules() {
    const defaultRules = [this.campoObbligatorio];
    return this.options?.rules
      ? defaultRules.concat(this.options?.rules)
      : defaultRules;
  }
  get oInputNumberRef() {
    return "oinputnumberref";
  }
  get inputRef(): HTMLInputElement {
    return this.$refs[this.oInputNumberRef] as HTMLInputElement;
  }
  get readonlyOption() {
    return this.options?.readonly ? this.options?.readonly : false;
  }
  get denseOption() {
    return this.options?.small ? this.options?.small : true;
  }
  get clearOption() {
    return !IsNullOrUndefined(this.options?.clearable)
      ? this.options?.clearable
      : true;
  }
  constructor() {
    super();
  }

  mounted() {
    this.onChangeValue(this.value);
  }
  campoObbligatorio(val: string) {
    let _valido = false;
    this.changed();

    if (!this.options.required) {
      _valido = true;
    } else {
      if (!val || val == "" || parseFloat(val) == 0) {
        _valido = false;
      } else {
        _valido = true;
      }
    }
    return _valido || "Obbligatorio";
  }

  onInput(val: string) {
    const validNumber = new RegExp(/^\-?\d*\.?\d*$/);
    if (validNumber.test(val)) {
      this.changed();
    } else {
      this.stringValue = this.inputRef.value;
    }
  }

  onClear() {
    if (!this.clearOption) return;
    this.stringValue = "";
  }

  @Watch("options.decimal")
  onBlur() {
    const wNum = parseFloat(this.stringValue);
    if (isNaN(wNum) || wNum == 0) {
      this.stringValue = "";
    } else if (this.stringValue !== this.toFixed(wNum, this.options.decimal)) {
      this.stringValue = this.toFixed(wNum, this.options.decimal);
    }
    console.log("ONumber - onBlur POST:", this.stringValue);
    this.changed();
    this.$emit("blur");
  }

  async onFocus() {
    let input = this.$refs.input as HTMLInputElement;
    if (input) await input.select();
  }

  toFixed(value: number, fixed: number = 0) {
    var re = new RegExp("^-?\\d+(?:.\\d{0," + (fixed || -1) + "})?");
    const rounded = value.toString().match(re);
    return parseFloat(
      rounded && rounded.length > 0 ? rounded[0] : value.toString()
    ).toFixed(fixed);
  }

  validate() {
    return (this.inputRef as any).validate();
  }
}
