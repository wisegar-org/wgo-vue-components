import { Vue, Component, Prop } from "vue-property-decorator";
import {
  DefaultWGOExpandableListOptions,
  WGOExpandableListOptions,
  ListItem,
  PropToEdit,
} from "../models";
import WGOExpandableListExportClipboardButton from "../WGOExpandableListButtons/WGOExpandableListExportClipboardButton.vue";
import WGOExpandableListExportCSVButton from "../WGOExpandableListButtons/WGOExpandableListExportCSVButton.vue";
import WGOExpandableListExportExcelButton from "../WGOExpandableListButtons/WGOExpandableListExportExcelButton.vue";
import WGOExpandableListFilterButton from "../WGOExpandableListButtons/WGOExpandableListFilterButton.vue";
import WGOExpandableListSelectColumnsButtton from "../WGOExpandableListButtons/WGOExpandableListSelectColumnsButtton.vue";

@Component({
  components: {
    WGOExpandableListExportClipboardButton,
    WGOExpandableListExportCSVButton,
    WGOExpandableListExportExcelButton,
    WGOExpandableListFilterButton,
    WGOExpandableListSelectColumnsButtton,
  },
})
export default class WGOExpandableListHeader extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];
  @Prop({ default: () => DefaultWGOExpandableListOptions })
  options!: WGOExpandableListOptions;
  @Prop({ default: () => [] }) items!: ListItem[];
  @Prop({ default: () => {} }) filter!: ListItem;
  @Prop({ default: () => ({}) }) toggleFullScreen!: () => unknown;
  @Prop({ default: (item: ListItem | null) => ({}) }) addItem!: (
    item: ListItem | null
  ) => unknown;
  @Prop({ default: (filter: ListItem) => ({}) }) applyFilter!: (
    filter: ListItem
  ) => unknown;
  @Prop({ default: () => ({}) }) closeDialog!: () => unknown;
  id_button = "button-header-" + Math.random().toString(20).substring(2, 10);
}
