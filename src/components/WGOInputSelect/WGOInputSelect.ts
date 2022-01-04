import {
  Vue,
  Component,
  Prop,
  Model,
  Emit,
  Watch,
} from "vue-property-decorator";
import {
  IWGOInputSelectableOptions,
  IWGOInputTextOptions,
} from "../../models/IWGOInputOptions";

const DefaultOptions: IWGOInputTextOptions = {
  small: true,
  readonly: false,
  required: false,
  clearable: true,
};

@Component({})
export default class WGOInputSelect extends Vue {
  @Prop({ default: "o input select" }) label!: string;
  @Prop() onChange!: (value: any) => void;
  @Prop({ default: () => DefaultOptions }) options!: IWGOInputTextOptions;
  @Prop() optionsSelect!: IWGOInputSelectableOptions[];
  @Model() model!: any;

  selected: any | null = null;

  /**
   *
   */
  constructor() {
    super();
    if (this.model) this.selected = this.model;
  }

  @Emit("model")
  @Watch("selected")
  change() {
    return this.selected;
  }

  @Watch("model")
  onModelChange() {
    if (!this.selected || this.selected !== this.model) {
      this.selected = this.model ? { value: this.model } : null;
    }
  }

  onClear(evnt: Event) {
    evnt.stopPropagation();
    this.selected = null;
  }
}
