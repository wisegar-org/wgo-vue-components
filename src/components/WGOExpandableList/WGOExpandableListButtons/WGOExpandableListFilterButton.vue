<template>
  <q-btn flat dense color="primary" @click="onShowDialog" icon="filter_alt"
    ><q-tooltip>Abilita filtri</q-tooltip>
    <WGOExpandableListFilterDialog
      :title="title"
      icon="filter_alt"
      :filter="filter"
      :propsEditor="propsEditor"
      :applyFilter="applyFilter"
      :open="showFilterDialog"
      :close="() => (showFilterDialog = false)"
    />
    <q-tooltip>{{ tooltip }}</q-tooltip></q-btn
  >
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOListItem, WGOPropToEdit } from "../models";
import WGOExpandableListFilterDialog from "../WGOExpandableListFilter/WGOExpandableListFilterDialog.vue";

@Component({
  components: {
    WGOExpandableListFilterDialog,
  },
})
export default class WGOExpandableListFilterButton extends Vue {
  @Prop({ default: () => ({}) }) filter!: WGOListItem;
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: () => null }) applyFilter!: (filter: WGOListItem) => unknown;
  @Prop({ default: "Filter" }) title!: string;
  @Prop({ default: "Set filters" }) tooltip!: string;
  showFilterDialog = false;

  onShowDialog() {
    this.showFilterDialog = true;
  }
}
</script>
