<template>
  <q-btn flat dense color="primary" @click="exportCSV" icon="las la-file-csv"
    ><q-tooltip>{{ tooltip }}</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import { WGOExpandableListExportCSV } from "../WGOExpandableListExports";

@Component({})
export default class WGOExpandableListExportCSVButton extends Vue {
  @Prop({ default: () => [] }) items!: WGOListItem[];
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: "Export to CSV" }) tooltip!: string;

  exportCSV() {
    void WGOExpandableListExportCSV(this.items, this.propsEditor);
  }
}
</script>
