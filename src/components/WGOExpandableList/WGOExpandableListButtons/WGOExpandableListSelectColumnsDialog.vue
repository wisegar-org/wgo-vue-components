<template>
  <q-dialog v-model="showList">
    <q-banner>
      <div v-for="(prop, index) in propsEditor" :key="index">
        <q-checkbox
          v-if="!prop.required"
          v-model="prop.visible"
          :label="prop.label"
          size="xs"
        />
        <q-checkbox
          v-else
          :value="true"
          :label="prop.label"
          size="xs"
          readonly
          disabled
        />
      </div>
    </q-banner>
  </q-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOPropToEdit } from "../models";

@Component({})
export default class WGOExpandableListSelectColumnsDialog extends Vue {
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop() showList!: boolean;
}
</script>
