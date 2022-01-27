import { Vue, Component, Prop } from "vue-property-decorator";
import {
  DefaultWGOExpandableListOptions,
  WGOExpandableListOptions,
  WGOListItem,
  WGOPropToEdit,
} from "../models";
import WGOExpandableListExportClipboardButton from "../WGOExpandableListButtons/WGOExpandableListExportClipboardButton.vue";
import WGOExpandableListExportCSVButton from "../WGOExpandableListButtons/WGOExpandableListExportCSVButton.vue";
import WGOExpandableListExportExcelButton from "../WGOExpandableListButtons/WGOExpandableListExportExcelButton.vue";
import WGOExpandableListFilterButton from "../WGOExpandableListButtons/WGOExpandableListFilterButton.vue";
import WGOExpandableListSelectColumnsButtton from "../WGOExpandableListButtons/WGOExpandableListSelectColumnsButtton.vue";
import WGOExpandableListSelectColumnsDialog from "../WGOExpandableListButtons/WGOExpandableListSelectColumnsDialog.vue";

@Component({
  components: {
    WGOExpandableListExportClipboardButton,
    WGOExpandableListExportCSVButton,
    WGOExpandableListExportExcelButton,
    WGOExpandableListFilterButton,
    WGOExpandableListSelectColumnsButtton,
    WGOExpandableListSelectColumnsDialog,
  },
})
export default class WGOExpandableListHeaderMobile extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => DefaultWGOExpandableListOptions })
  options!: WGOExpandableListOptions;
  @Prop({ default: () => [] }) items!: WGOListItem[];
  @Prop({ default: () => {} }) filter!: WGOListItem;
  @Prop({ default: () => ({}) }) toggleFullScreen!: () => unknown;
  @Prop({ default: (item: WGOListItem | null) => ({}) }) addItem!: (
    item: WGOListItem | null
  ) => unknown;
  @Prop({ default: (filter: WGOListItem) => ({}) }) applyFilter!: (
    filter: WGOListItem
  ) => unknown;
  @Prop({ default: () => ({}) }) closeDialog!: () => unknown;
  id_button = "button-header-" + Math.random().toString(20).substring(2, 10);

  showSelectColumns = false;
}
