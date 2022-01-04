import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { ListItem, PropToEdit } from "../models";
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
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];
  @Prop({ default: () => {} }) applyFilter!: (filter: ListItem) => unknown;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop() filter!: ListItem;
  filterEdit: ListItem;
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
