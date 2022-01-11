import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import WGOExpandableListFilter from "./WGOExpandableListFilter.vue";
import Dialog from "../../WGODialog/WGODialog.vue";
import { IWGODialogOptions } from "../../../models";

@Component({
  components: {
    WGOExpandableListFilter,
    Dialog,
  },
})
export default class WGOExpandableListFilterDialog extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() styleDialog!: string;
  @Prop() filter!: WGOListItem;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => {} }) applyFilter!: (filter: WGOListItem) => unknown;

  options: IWGODialogOptions = {
    title: this.title,
    icon: this.icon,
    open: this.open,
    onClose: () => this.close(),
    hideButtons: true,
    fullHeight: false,
    fullWidth: false,
    styleDialog: this.styleDialog,
    width: "800px",
  };

  @Watch("open")
  changeStatus() {
    this.options = { ...this.options, open: this.open };
  }
}
