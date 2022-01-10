<template>
  <q-btn flat dense color="primary" @click="exportCSV" icon="las la-file-csv"
    ><q-tooltip>{{ tooltip }}</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { ListItem, PropToEdit } from '../models';
import { WGOExpandableListExportCSV } from '../WGOExpandableListExports';

@Component({})
export default class WGOExpandableListExportCSVButton extends Vue {
  @Prop({ default: () => [] }) items!: ListItem[];
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];
  @Prop({ default: 'Export to CSV' }) tooltip!: string;

  exportCSV() {
    void WGOExpandableListExportCSV(this.items, this.propsEditor);
  }
}
</script>
