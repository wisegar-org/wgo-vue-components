<template>
  <q-btn
    flat
    dense
    color="primary"
    @click="exportExcel"
    icon="las la-file-excel"
    ><q-tooltip>{{ tooltip }}</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import { WGOExpandableListExportExcel } from "../WGOExpandableListExports";

@Component({})
export default class WGOExpandableListExportExcelButton extends Vue {
  @Prop({ default: () => [] }) items!: WGOListItem[];
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: "Export to Excel" }) tooltip!: string;

  exportExcel() {
    void WGOExpandableListExportExcel(this.items, this.propsEditor);
  }
}
</script>
