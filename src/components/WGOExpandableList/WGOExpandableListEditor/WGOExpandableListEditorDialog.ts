import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { IWGODialogOptions } from '../../../models';
import Dialog from '../../WGODialog/WGODialog.vue';
import { ListItem, PropToEdit } from '../models';
import WGOExpandableListEditor from './WGOExpandableListEditor.vue';

@Component({
  components: {
    Dialog,
    WGOExpandableListEditor
  }
})
export default class WGOExpandableListEditorDialog extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() styleDialog!: string;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop() item!: ListItem;
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];
  @Prop({ default: () => {} }) onSaveItem!: (item: ListItem) => unknown;

  options: IWGODialogOptions = {
    title: this.title,
    icon: this.icon,
    open: this.open,
    onClose: () => this.close(),
    hideButtons: true,
    fullHeight: false,
    fullWidth: false,
    styleDialog: this.styleDialog
  };

  @Watch('open')
  changeStatus() {
    this.options = { ...this.options, open: this.open };
  }
}
