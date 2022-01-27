<template>
  <q-btn
    flat
    dense
    color="primary"
    icon="format_list_bulleted"
    @click="clickBtn"
  >
    <q-popup-proxy>
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
    </q-popup-proxy>
    <q-tooltip>{{ tooltip }}</q-tooltip>
  </q-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { WGOPropToEdit } from "../models";

@Component({})
export default class WGOExpandableListSelectColumnsButtton extends Vue {
  @Prop({ default: () => [] }) propsEditor!: WGOPropToEdit[];
  @Prop({ default: "Show / Hide columns" }) tooltip!: string;
  @Prop() showMenu!: () => unknown;

  clickBtn() {
    if (this.showMenu) this.showMenu();
  }
}
</script>
