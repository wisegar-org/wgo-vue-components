import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import InputDate from "../../WGOInputDate/WGOInputDate.vue";
import InputText from "../../WGOInputText/WGOInputText.vue";
import InputNumber from "../../WGOInputNumber/WGOInputNumber.vue";
import InputSelect from "../../WGOInputSelect/WGOInputSelect.vue";

@Component({
  components: {
    InputDate,
    InputText,
    InputNumber,
    InputSelect,
  },
})
export default class WGOExpandableListFilter extends Vue {
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => {} }) applyFilter!: (filter: WGOListItem) => unknown;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop() filter!: WGOListItem;
  filterEdit: WGOListItem;
  id_item = "upload-button-" + Math.random().toString(20).substring(2, 10);

  constructor() {
    super();
    this.filterEdit = this.filter ? { ...this.filter } : {};
  }

  @Watch("filter")
  onModelChange() {
    this.filterEdit = this.filter ? { ...this.filter } : {};
  }

  onApplyFilter() {
    if (this.applyFilter) this.applyFilter(this.filterEdit);
    if (this.close) this.close();
  }

  onResetFilter() {
    this.filterEdit = {};
  }
}
