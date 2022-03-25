import { Vue, Component, Prop, Watch } from "vue-property-decorator";

@Component({})
export default class WGOListItem extends Vue {
  @Prop() label!: string;
  @Prop() labels!: (
    | string
    | { label: string; tooltip: string; columns: number }
  )[];
  @Prop() icon!: string;
  @Prop() iconUrl!: string;
  @Prop({ default: 4 }) maxLabels!: number;
  @Prop({ default: 2 }) maxLines!: number;

  labelsLength = this.labels
    .map((label) => (typeof label === "string" ? 1 : label.columns || 1))
    .reduce((a, b) => a + b, 0);

  @Watch("labels")
  setLabelsLength() {
    this.labelsLength = this.labels
      .map((label) => (typeof label === "string" ? 1 : label.columns || 1))
      .reduce((a, b) => a + b, 0);
  }

  getIcon() {
    return this.iconUrl ? `img:${this.iconUrl}` : this.icon;
  }

  clickInHeader() {
    const expanded = this.$refs.expanded as unknown as {
      invertValue: () => unknown;
    };
    if (!!expanded && !!expanded.invertValue) expanded.invertValue();
  }

  getLabelsClass(index: number, columns = 1) {
    if (this.labels.length === 1) {
      return "col-12 col-sm-12 q-ml-none q-pl-sm";
    }
    const maxColumns = this.getDisplayInSM()
      ? Math.min(this.maxLabels, this.labelsLength)
      : 2;
    const value = !this.getDisplayInXS() ? Math.floor(12 / maxColumns) : 6;
    return `col-${index < this.maxLines ? 12 : 0} col-sm-${
      value * columns
    } q-ml-none q-pl-sm`;
  }
  isStringLabel(label: { label: string; tooltip: string } | string) {
    return typeof label === "string";
  }

  getLabelsStyle(index: number) {
    const isOnlySM = !this.getDisplayInSM();
    return index >= this.maxLines && isOnlySM
      ? "display: none;"
      : "margin-left: 0 !important;";
  }

  getDisplayInXS() {
    return this.$q.screen.xs;
  }

  getDisplayInSM() {
    return this.$q.screen.gt.sm;
  }

  isMobile() {
    return this.$q.platform.is.mobile || !this.getDisplayInXS();
  }

  getJustify() {
    return this.labelsLength <= this.maxLabels
      ? "justify-content: space-between"
      : "";
  }
}
