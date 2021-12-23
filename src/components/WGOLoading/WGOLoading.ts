import { Vue, Component, Prop } from "vue-property-decorator";

@Component({})
export default class WGOLoading extends Vue {
  @Prop({ default: false }) loading!: boolean;
}
