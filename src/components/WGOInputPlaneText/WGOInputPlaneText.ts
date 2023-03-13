import { IsNullOrUndefined } from "wgo-extensions";
import {
  Vue,
  Component,
  Watch,
  Prop,
  Model,
  Emit,
} from "vue-property-decorator";
import { Action } from "vuex-class";
import { IWGOInputPlaneTextOptions } from "../../models/IWGOInputOptions";

const DefaultOptions: IWGOInputPlaneTextOptions = {
  small: true,
  readonly: false,
  required: false,
  clearable: true,
};

@Component({
  components: {},
})
export default class WGOInputPlaneText extends Vue {
  @Prop({ default: "o input text" }) label!: string;
  @Prop() onChange!: (value: string) => void;
  @Prop({ default: () => DefaultOptions }) options!: IWGOInputPlaneTextOptions;
  @Model() model!: string;
  @Emit("model")
  change() {
    return this.stringValue;
  }
  stringValue = "";

  /**
   *
   */
  constructor() {
    super();
    this.stringValue = this.getSliceValue(this.model || "");
  }

  get WGOInputPlaneTextRules() {
    const defaultRules = [this.campoObbligatorio];
    return this.options?.rules
      ? defaultRules.concat(this.options?.rules)
      : defaultRules;
  }
  get WGOInputPlaneTextRef() {
    return "WGOInputPlaneTextref";
  }
  get inputRef(): HTMLInputElement {
    return this.$refs[this.WGOInputPlaneTextRef] as HTMLInputElement;
  }
  get clearOption() {
    return !IsNullOrUndefined(this.options?.clearable)
      ? this.options?.clearable
      : true;
  }
  get maxLength() {
    return !IsNullOrUndefined(this.options?.maxLength)
      ? this.options?.maxLength
      : 0;
  }

  @Watch("model")
  @Watch("maxLength")
  onChangeValue() {
    this.stringValue = this.getSliceValue(this.model || "");
  }

  getSliceValue(value: string) {
    return this.maxLength ? value.slice(0, this.maxLength) : value;
  }

  campoObbligatorio(val: string) {
    if (!this.options?.required) {
      return true;
    } else {
      return !!val || "campo obbligatorio";
    }
  }
  onFocus(): void {
    if (this.inputRef) this.inputRef.select();
  }

  @Watch("stringValue")
  onValueChange() {
    this.change();
    if (this.onChange) this.onChange(this.stringValue);
  }

  validate() {
    return (this.inputRef as any).validate();
  }
  onClear() {
    if (!this.clearOption) return;
    this.stringValue = "";
  }
}
