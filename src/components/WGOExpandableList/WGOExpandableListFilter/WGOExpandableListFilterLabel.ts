import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";

@Component({})
export default class WGOExpandableListFilterLabel extends Vue {
  @Prop({ default: "" }) filterStr!: string;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => ({}) }) filter!: WGOListItem;
  @Prop({ default: "and" }) joinText!: string;
  @Prop({ default: () => {} }) cleanFilter!: () => unknown;
  @Prop({ default: () => {} }) openFilter!: () => unknown;

  getFilterLabel() {
    if (this.filterStr) return this.filterStr;
    const filterStr: string[] = [];
    this.propsEditor.forEach((prop) => {
      if (prop.prop in this.filter && this.filter[prop.prop]) {
        if (prop.type !== "select")
          filterStr.push(`${prop.label} contiene <${this.filter[prop.prop]}>`);
        else
          filterStr.push(
            `${prop.label} contiene <${(this.filter[prop.prop] as any)?.label}>`
          );
      }
    });

    return filterStr.join(` ${this.joinText} `);
  }
}
