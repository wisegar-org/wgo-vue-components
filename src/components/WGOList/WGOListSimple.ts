import { Vue, Component, Prop } from 'vue-property-decorator';
import { WGOPropToEdit, DefaultWGOExpandableListOptions, WGOExpandableListOptions } from '../WGOExpandableList/models';
import Loader from '../WGOLoading/WGOLoading.vue';
import WGOListItem from './WGOListItem/WGOListItem.vue';
import WGOListItemTitle from './WGOListItem/WGOListItemTitle.vue';

@Component({
  components: {
    Loader,
    WGOListItem,
    WGOListItemTitle,
  },
})
export default class WGOListSimple extends Vue {
  @Prop({ default: () => [] }) items!: WGOListItem[];
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => DefaultWGOExpandableListOptions })
  options!: WGOExpandableListOptions;
  @Prop({ default: false }) loading!: boolean;

  openDialog = false;
  selectedItem: WGOListItem | null = null;
  filter: WGOListItem = <WGOListItem>{};

  public cardHeight = 500;
  public listHeight = 300;
  id_button = 'button-' + Math.random().toString(20).substring(2, 10);

  getLabels(item: WGOListItem) {
    const result: { label: string; tooltip?: string; columns: number }[] = [];
    this.propsEditor.forEach((prop) => {
      if (prop.required || prop.visible) {
        const value = prop.value ? prop.value(item as any) : `${(item as any)[prop.prop]}`;
        let tooltip = '';
        const columns = prop.columns || 1;

        if (prop.tooltip) {
          tooltip = typeof prop.tooltip === 'string' ? prop.tooltip : prop.tooltip(item as any);
        }

        result.push({ label: value, tooltip: tooltip, columns: columns });
      }
    });
    return result;
  }

  getTitleLabels() {
    const result: { label: string; tooltip?: string; columns: number }[] = [];
    this.propsEditor.forEach((prop) => {
      if (prop.required || prop.visible) {
        const value = prop.label;
        result.push({ label: value, tooltip: '', columns: prop.columns || 1 });
      }
    });
    return result;
  }

  loadPorpsVisibleStatus() {
    if (this.options.localStoreKey) {
      const storageStr = localStorage.getItem(this.options.localStoreKey);
      const items = storageStr ? (JSON.parse(storageStr) as { prop: string; visible: boolean }[]) : [];
      items.map((item, index) => {
        if (this.propsEditor[index].prop === item.prop) this.propsEditor[index].visible = item.visible;
      });
    }
  }

  toggleFullScreen() {
    const target = this.$refs.viewCard as Vue;
    this.$q.fullscreen.toggle(target.$el as any);
  }

  async mounted() {
    this.loadPorpsVisibleStatus();
  }
}
