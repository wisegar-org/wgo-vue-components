import { Vue, Component, Prop, Watch } from 'vue-property-decorator';

@Component({})
export default class WGOSimpleExpanded extends Vue {
  @Prop() label!: string;
  @Prop() labels!: (
    | string
    | { label: string; tooltip: string; columns: number }
  )[];
  @Prop() icon!: string;
  @Prop() group!: string;
  @Prop() iconUrl!: string;
  @Prop({ default: false }) expandIcon!: boolean;
  @Prop({ default: false }) switchToggle!: boolean;
  @Prop({ default: 4 }) maxLabels!: number;
  @Prop({ default: 2 }) maxLines!: number;

  showPopup: boolean;
  labelsLength: number;

  /**
   *
   */
  constructor() {
    super();
    this.showPopup = false;
    this.labelsLength = (this.labels || [])
      .map(label => (typeof label === 'string' ? 1 : label.columns || 1))
      .reduce((a, b) => a + b, 0);
  }

  @Watch('labels')
  setLabelsLength() {
    this.labelsLength = this.labels
      .map(label => (typeof label === 'string' ? 1 : label.columns || 1))
      .reduce((a, b) => a + b, 0);
  }

  getIcon() {
    return this.iconUrl ? `img:${this.iconUrl}` : this.icon;
  }

  invertValue() {
    this.showPopup = !this.showPopup;
    return this.showPopup;
  }

  getExpandedWithIcon() {
    return this.expandIcon;
  }

  getLabelsClass(index: number, columns = 1) {
    if (this.labels.length === 1) {
      return 'col-12 col-sm-12 q-ml-none q-pl-sm';
    }
    const maxColumns = this.getDisplayInSM()
      ? Math.min(this.maxLabels, this.labelsLength)
      : 2;
    const value = !this.getDisplayInXS() ? 12 / maxColumns : 6;
    return `col-${index < this.maxLines ? 12 : 0} col-sm-${value *
      columns} q-ml-none q-pl-sm`;
  }

  getLabelsStyle(index: number) {
    const isOnlySM = !this.getDisplayInSM();
    return index >= this.maxLines && isOnlySM
      ? 'display: none;'
      : 'margin-left: 0 !important;';
  }
  isStringLabel(label: { label: string; tooltip: string } | string) {
    return typeof label === 'string';
  }

  getDisplayInXS() {
    return this.$q.screen.xs;
  }

  getDisplayInSM() {
    return this.$q.screen.gt.sm;
  }
}
