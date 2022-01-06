import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { IWGODialogOptions } from '../../models/IWGODialogOptions';
import WGOLoading from '../WGOLoading/WGOLoading.vue';

@Component({
  components: {
    WGOLoading
  }
})
export default class WGODialog extends Vue {
  @Prop({ required: true }) options!: IWGODialogOptions;

  contentHeight = '200px';

  @Watch('options.open', { immediate: false })
  resizeContent() {
    if (this.options.open === true && this.contentHeight === '200px')
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
      const buttonsH = buttons?.offsetHeight || 0;
      const titleH = title.offsetHeight || 0;
      let height = h - buttonsH - titleH - 68;

      const vueElement = this.$refs.placeholder2 as Vue;
      if (vueElement && vueElement.$el) {
        const element = vueElement.$el as HTMLElement;
        debugger;
        const h = element.children[0].children[0].getBoundingClientRect()
          .height;
        height = h > 100 ? h + 15 : height;
      }
      this.contentHeight = `${height}px`;
      if (this.options.afterResize) this.options.afterResize(height);
    }
  }

  getIcon() {
    if (!this.options.icon) return '';
    return this.options.icon;
  }

  getStyle() {
    debugger;
    if (this.options.fullHeight && this.options.fullWidth) return '';
    if (!!this.options.styleDialog) return this.options.styleDialog;
    else if (this.options.fullWidth) {
      return this.options.height
        ? `height: ${this.options.height};`
        : 'height: 500px;';
    } else if (this.options.fullHeight) {
      return this.options.width
        ? `width: ${this.options.width};`
        : 'width: 500px;';
    }

    if (this.options.height && this.options.width) {
      return `height: ${this.options.height}; width: ${this.options.width};`;
    } else if (this.options.height)
      return `height: ${this.options.height}; width: 500px;`;
    else if (this.options.width)
      return `height: fit; width: ${this.options.width};`;

    return 'height: fit; width: 500px;';
  }

  mounted() {
    window.addEventListener('resize', this.onResize);
    this.resizeContent();
  }

  unmounted() {
    window.removeEventListener('resize', this.onResize);
  }
}
