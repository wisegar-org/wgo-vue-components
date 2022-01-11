import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import InputDate from "../../WGOInputDate/WGOInputDate.vue";
import InputText from "../../WGOInputText/WGOInputText.vue";
import InputNumber from "../../WGOInputNumber/WGOInputNumber.vue";
import InputSelect from "../../WGOInputSelect/WGOInputSelect.vue";
import { QForm, QInput } from "quasar";
import {
  GetMaskedDate,
  MASK_YYYY_MM_DD_HH_mm_ss,
  MASK_DD_MM_YYYY,
} from "@wisegar-org/wgo-opengar-shared";
import { IWGOInputDateOptions } from "../../../models/IWGOInputDateOptions";

@Component({
  components: {
    InputDate,
    InputText,
    InputNumber,
    InputSelect,
  },
})
export default class WGOExpandableListEditor extends Vue {
  @Prop() item!: WGOListItem;
  @Prop({ default: false }) reactive!: boolean;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => {} }) onSaveItem!: (item: WGOListItem) => unknown;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop({ default: false }) showClose!: boolean;

  itemForm: WGOListItem = {};

  constructor() {
    super();
    if (!!this.item)
      this.itemForm = this.reactive ? this.item : { ...this.item };
    else this.itemForm = {};
  }

  id_item = "upload-button-" + Math.random().toString(20).substring(2, 10);

  async onSave() {
    const form = this.$refs.oAdminEditor as QForm;
    const count = form.$children.length;
    let index = 0;
    while (
      index < count &&
      "validate" in (form.$children[index] as QInput) &&
      (form.$children[index] as QInput).validate()
    ) {
      index += 1;
    }
    if (await form.validate()) {
      this.onSaveItem(this.itemForm);
    }
  }

  setDateValue(date: Date, obj: WGOListItem, prop: string) {
    obj[prop] = date.toISOString();
  }

  getDateOptions(
    options: IWGOInputDateOptions,
    obj: WGOListItem,
    prop: string
  ) {
    const setDateValue = this.setDateValue;
    const inputOptions = {
      onChangeDate: (date: Date) => setDateValue(date, obj, prop),
    };
    return options ? { ...options, ...inputOptions } : inputOptions;
  }

  getDateValue(date: string) {
    const dateObj = new Date(date).toISOString();
    const maskDate = GetMaskedDate(
      dateObj,
      MASK_DD_MM_YYYY,
      MASK_YYYY_MM_DD_HH_mm_ss
    );
    return maskDate;
  }
}
