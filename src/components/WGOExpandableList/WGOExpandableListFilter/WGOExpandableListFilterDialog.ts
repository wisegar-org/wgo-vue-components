import { Vue, Component, Prop } from "vue-property-decorator";
import { ListItem, PropToEdit } from "../models";
import WGOExpandableListFilter from "./WGOExpandableListFilter.vue";
import Dialog from "../../Dialog/Dialog.vue";

@Component({
  components: {
    WGOExpandableListFilter,
    Dialog,
  },
})
export default class WGOExpandableListFilterDialog extends Vue {
  @Prop({ default: false }) open!: boolean;
  @Prop() title!: string;
  @Prop() icon!: string;
  @Prop() filter!: ListItem;
  @Prop({ default: () => {} }) close!: () => unknown;
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];
  @Prop({ default: () => {} }) applyFilter!: (filter: ListItem) => unknown;
}
