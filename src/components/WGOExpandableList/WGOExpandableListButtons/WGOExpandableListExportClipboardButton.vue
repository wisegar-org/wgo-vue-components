<template>
  <q-btn flat dense color="primary" @click="exportExcel" icon="content_copy"
    ><q-tooltip>Copy data</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { ListItem, PropToEdit } from "../models";
import { WGOExpandableListExportClipboard } from "../WGOExpandableListExports";

@Component({})
export default class WGOExpandableListExportClipboardButton extends Vue {
  @Prop({ default: () => [] }) items!: ListItem[];
  @Prop({ default: () => [] }) propsEditor!: PropToEdit[];

  async exportExcel() {
    const text = WGOExpandableListExportClipboard(this.items, this.propsEditor);
    await navigator.clipboard.writeText(text);
    this.$q.notify({
      color: "positive",
      textColor: "white",
      icon: "cloud_done",
      position: "top",
      message: "Dati copiati negli appunti",
    });
  }
}
</script>
