<template>
  <q-btn
    flat
    dense
    color="primary"
    @click="exportExcel"
    icon="las la-file-excel"
    ><q-tooltip>Export to Excel</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ListItem, PropToEdit } from "../models";
import { WGOExpandableListExportExcel } from "../WGOExpandableListExports";

@Component({})
export default class WGOExpandableListExportExcelButton extends Vue {
  @Prop({ default: () => [] }) items!: ListItem[];
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];

  exportExcel() {
    void WGOExpandableListExportExcel(this.items, this.propsEditor);
  }
}
</script>
