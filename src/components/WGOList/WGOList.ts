import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import {
  WGOPropToEdit,
  DefaultWGOExpandableListOptions,
  WGOExpandableListOptions,
} from "../WGOExpandableList/models";
import WGOExpandableListEditor from "../WGOExpandableList/WGOExpandableListEditor/WGOExpandableListEditor.vue";
import WGOExpandableListEditorDialog from "../WGOExpandableList/WGOExpandableListEditor/WGOExpandableListEditorDialog.vue";
import Loader from "../WGOLoading/WGOLoading.vue";
import WGOExpandableListFilterLabel from "../WGOExpandableList/WGOExpandableListFilter/WGOExpandableListFilterLabel.vue";
import WGOExpandableListHeader from "../WGOExpandableList/WGOExpandableListHeader/WGOExpandableListHeader.vue";
import WGOListItem from "./WGOListItem/WGOListItem.vue";
import WGOListItemTitle from "./WGOListItem/WGOListItemTitle.vue";

@Component({
  components: {
    WGOExpandableListEditor,
    WGOExpandableListEditorDialog,
    Loader,
    WGOExpandableListFilterLabel,
    WGOExpandableListHeader,
    WGOListItem,
    WGOListItemTitle,
  },
})
export default class WGOList extends Vue {
  @Prop({ default: "" }) title!: string;
  @Prop({ default: () => [] }) items!: WGOListItem[];
  @Prop({ default: () => [] }) allItems!: WGOListItem[];
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: "info" }) icon!: string;
  @Prop({ default: () => DefaultWGOExpandableListOptions })
  options!: WGOExpandableListOptions;
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: "" }) filterStr!: string;
  @Prop() watchProps!: any;

  filterItems: WGOListItem[] = this.items as WGOListItem[];
  openDialog = false;
  selectedItem: WGOListItem | null = null;
  filter: WGOListItem = <WGOListItem>{};

  public cardHeight = 500;
  public listHeight = 300;
  id_button = "button-" + Math.random().toString(20).substring(2, 10);

  @Watch("filter")
  @Watch("items")
  onFilterChange() {
    this.filterItems = this.options.filterItems
      ? this.options.filterItems(this.items as any, this.filter as any)
      : (this.items as any[]);
    this.resizeCard();
  }
  applyFilter(filter: WGOListItem) {
    this.filter = { ...filter };
  }

  openFilter() {
    (
      this.$refs.filter as any as {
        onShowDialog: () => unknown;
      }
    ).onShowDialog();
  }

  addItem(item: WGOListItem | null = null) {
    this.selectedItem = item;
    this.openDialog = true;
  }

  closeDialog() {
    this.openDialog = false;
  }

  deleteItem(item: WGOListItem, index: number) {
    this.$q
      .dialog({
        title: "Confirm",
        message: this.options.textDeleteConfirm,
        persistent: true,
        focus: "cancel",
        ok: {
          color: "primary",
          label: "Si",
          tabindex: 0,
        },
        cancel: {
          flat: true,
          label: "No",
          tabindex: 1,
        },
      })
      .onOk(async () => {
        await this.options.onDeleteItem(item as any, index);
      });
  }

  public addResize(onResizeFn: any) {
    window.addEventListener("resize", onResizeFn);
    this.$nextTick(() => {
      setTimeout(onResizeFn, 150);
    });
  }

  public removeResize(onResizeFn: any) {
    window.removeEventListener("resize", onResizeFn);
  }

  @Watch("watchProps", { immediate: false, deep: true })
  @Watch("filterStr", { immediate: false })
  resizeMenu() {
    setTimeout(this.resizeCard, 400);
  }

  public resizeCard(
    defaultBottomPx: number = 0,
    defaultplaceholderExpListPx: number = 157
  ) {
    const placeholderExpList = this.$refs.placeholderExpList as HTMLElement;
    const filterLabel = this.$refs.filterLabel as HTMLElement;
    const pagination = this.$refs.pagination as HTMLElement;
    const headerTitle = this.$refs.headerList as HTMLElement;
    if (placeholderExpList) {
      const h =
        placeholderExpList.getBoundingClientRect().bottom ||
        defaultplaceholderExpListPx;
      this.cardHeight = this.options.minHeight
        ? this.options.minHeight
        : window.innerHeight - h - defaultBottomPx;
    } else {
      this.cardHeight = 500;
    }
    const placeholderExpList2 = this.$refs.placeholderExpList2 as HTMLElement;
    const placeholderExpList3 = this.$refs.placeholderExpList3 as HTMLElement;
    if (this.cardHeight === this.options.minHeight) {
      const mobileH = placeholderExpList3 ? 0 : 40;
      const filterH = filterLabel.offsetHeight || 0;
      this.listHeight =
        this.options.minHeight -
        120 -
        mobileH -
        filterH -
        headerTitle.offsetHeight;
    } else if (placeholderExpList2) {
      const h =
        placeholderExpList2.getBoundingClientRect().bottom ||
        defaultplaceholderExpListPx;
      const filterH = filterLabel.offsetHeight || 0;
      const paginationH = pagination.offsetHeight || 0;
      this.listHeight =
        window.innerHeight -
        h -
        paginationH -
        defaultBottomPx -
        20 -
        filterH -
        headerTitle.offsetHeight;
    } else {
      this.listHeight = 300;
    }
  }

  getLabels(item: WGOListItem) {
    const result: { label: string; tooltip?: string; columns: number }[] = [];
    this.propsEditor.forEach((prop) => {
      if (prop.required || prop.visible) {
        const value = prop.value
          ? prop.value(item as any)
          : `${(item as any)[prop.prop]}`;
        let tooltip = "";
        const columns = prop.columns || 1;

        if (prop.tooltip) {
          tooltip =
            typeof prop.tooltip === "string"
              ? prop.tooltip
              : prop.tooltip(item as any);
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
        result.push({ label: value, tooltip: "", columns: prop.columns || 1 });
      }
    });
    return result;
  }

  @Watch("propsEditor", { deep: true })
  changeProps() {
    if (this.options.localStoreKey) {
      const items = this.propsEditor.map((item) => ({
        prop: item.prop,
        visible: item.visible,
      }));
      localStorage.setItem(this.options.localStoreKey, JSON.stringify(items));
    }
  }

  loadPorpsVisibleStatus() {
    if (this.options.localStoreKey) {
      const storageStr = localStorage.getItem(this.options.localStoreKey);
      const items = storageStr
        ? (JSON.parse(storageStr) as { prop: string; visible: boolean }[])
        : [];
      items.map((item, index) => {
        if (this.propsEditor[index].prop === item.prop)
          this.propsEditor[index].visible = item.visible;
      });
    }
  }

  toggleFullScreen() {
    const target = this.$refs.viewCard as Vue;
    this.$q.fullscreen.toggle(target.$el as any);
  }

  async mounted() {
    this.loadPorpsVisibleStatus();
    this.addResize(this.onResize);
  }

  async unmounted() {
    this.removeResize(this.onResize);
  }

  onResize() {
    setTimeout(this.resizeCard, 100);
  }
}
