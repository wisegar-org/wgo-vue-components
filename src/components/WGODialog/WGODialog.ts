import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import { IWGODialogOptions } from "../../models/IWGODialogOptions";
import WGOLoading from "../WGOLoading/WGOLoading.vue";

@Component({
  components: {
    WGOLoading,
  },
})
export default class WGODialog extends Vue {
  @Prop({ required: true }) options!: IWGODialogOptions;

  contentHeight = "380px";

  @Watch("options.open", { immediate: false })
  resizeContent() {
    this.$nextTick(() => setTimeout(this.onResize, 300));
  }

  onResize() {
    const placeholder = this.$refs.placeholder;
    const buttons = this.$refs.buttons as HTMLElement;
    const title = this.$refs.title as HTMLElement;
    if (placeholder) {
      const h =
        ((placeholder as any).$el as HTMLElement).getBoundingClientRect()
          .height || 0;
      const buttonsH = buttons.offsetHeight || 0;
      const titleH = title.offsetHeight || 0;
      this.contentHeight = `${h - buttonsH - titleH - 68}px`;
    }
  }

  getIcon() {
    if (!this.options.icon) return "";
    return this.options.icon;
  }

  getStyle() {
    if (this.options.fullHeight && this.options.fullWidth) return "";
    else if (this.options.fullWidth) {
      return this.options.height
        ? `height: ${this.options.height};`
        : "height: 500px;";
    } else if (this.options.fullHeight) {
      return this.options.width
        ? `width: ${this.options.width};`
        : "width: 500px;";
    }

    if (this.options.height && this.options.width) {
      return `height: ${this.options.height}; width: ${this.options.width};`;
    } else if (this.options.height)
      return `height: ${this.options.height}; width: 500px;`;
    else if (this.options.width)
      return `height: 500px; width: ${this.options.width};`;

    return "height: 500px; width: 500px;";
  }

  mounted() {
    window.addEventListener("resize", this.onResize);
    this.resizeContent();
  }

  unmounted() {
    window.removeEventListener("resize", this.onResize);
  }
}
