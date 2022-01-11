import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { IWGODialogOptions } from "../../../models";
import Dialog from "../../WGODialog/WGODialog.vue";
import { WGOListItem, WGOPropToEdit } from "../models";
import WGOExpandableListEditor from "./WGOExpandableListEditor.vue";

@Component({
  components: {
    Dialog,
    WGOExpandableListEditor,
  },
})
export default class WGOExpandableListEditorDialog extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() styleDialog!: string;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop() item!: WGOListItem;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => {} }) onSaveItem!: (item: WGOListItem) => unknown;

  options: IWGODialogOptions = {
    title: this.title,
    icon: this.icon,
    open: this.open,
    onClose: () => this.close(),
    hideButtons: true,
    fullHeight: false,
    fullWidth: false,
    styleDialog: this.styleDialog,
  };

  @Watch("open")
  changeStatus() {
    this.options = { ...this.options, open: this.open };
  }
}
