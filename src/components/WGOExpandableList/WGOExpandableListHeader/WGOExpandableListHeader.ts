import { Vue, Component, Prop } from 'vue-property-decorator';
import {
  DefaultWGOExpandableListOptions,
  WGOExpandableListOptions,
  WGOListItem,
  WGOPropToEdit
} from '../models';
import WGOExpandableListHeaderMobile from './WGOExpandableListHeaderMobile.vue';
import WGOExpandableListHeaderWeb from './WGOExpandableListHeaderWeb.vue';

@Component({
  components: {
    WGOExpandableListHeaderMobile,
    WGOExpandableListHeaderWeb
  }
})
export default class WGOExpandableListHeader extends Vue {
  @Prop({ default: '' }) title!: string;
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
  id_button =
    'button-header-' +
    Math.random()
      .toString(20)
      .substring(2, 10);

  isMobile() {
    return this.$q.platform.is.mobile || this.$q.screen.xs;
  }
}
