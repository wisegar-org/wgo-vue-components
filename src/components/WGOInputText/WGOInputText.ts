import { IsNullOrUndefined } from "wgo-extensions";
import {
  Vue,
  Component,
  Watch,
  Prop,
  Model,
  Emit,
} from "vue-property-decorator";
import { IWGOInputTextOptions } from "../../models/IWGOInputOptions";

const DefaultOptions: IWGOInputTextOptions = {
  small: true,
  readonly: false,
  required: false,
  clearable: true,
};

@Component({
  components: {},
})
export default class WGOInputText extends Vue {
  @Prop({ default: "o input text" }) label!: string;
  @Prop() onChange!: (value: string) => void;
  @Prop({ default: () => DefaultOptions }) options!: IWGOInputTextOptions;
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
    this.stringValue = this.model ? this.model : "";
  }

  get oInputTextRules() {
    const defaultRules = [this.campoObbligatorio];
    return this.options?.rules
      ? defaultRules.concat(this.options?.rules)
      : defaultRules;
  }
  get oInputTextRef() {
    return "oinputtextref";
  }
  get inputRef(): HTMLInputElement {
    return this.$refs[this.oInputTextRef] as HTMLInputElement;
  }
  get clearOption() {
    return !IsNullOrUndefined(this.options?.clearable)
      ? this.options?.clearable
      : true;
  }

  @Watch("model")
  onChangeValue() {
    this.stringValue = this.model;
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
